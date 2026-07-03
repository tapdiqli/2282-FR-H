"use client";

import { useEffect, useState } from "react";

const CLE_SSID = "tpg_ssid";
const CLE_CAMPAIGN = "tpg_campaign";
const CLE_GAD_CID = "tpg_gad_cid";
const CLE_GAD_SRC = "tpg_gad_src";
const CLE_GCLID = "tpg_gclid";

export interface Suivi {
  ssid: string;
  utmCampaign: string;
  gclid: string;
  gadCampaignId: string;
  gadSource: string;
}

function fromSession(key: string): string {
  try {
    return sessionStorage.getItem(key) ?? "";
  } catch {
    return "";
  }
}

function toSession(key: string, value: string) {
  if (!value) return;
  try {
    sessionStorage.setItem(key, value);
  } catch {}
}

function genSsid(): string {
  const PREFIX = "tpg";
  const ts = Date.now().toString(36).padStart(10, "0");
  const rand = Math.random().toString(36).slice(2, 15).padEnd(13, "0");
  return (PREFIX + ts + rand).slice(0, 26);
}

function getOrCreateSsid(): string {
  const stored = fromSession(CLE_SSID);
  if (stored) return stored;
  const fresh = genSsid();
  toSession(CLE_SSID, fresh);
  return fresh;
}

export function useSuivi(): Suivi {
  const [suivi, setSuivi] = useState<Suivi>({
    ssid: "",
    utmCampaign: "",
    gclid: "",
    gadCampaignId: "",
    gadSource: "",
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const p = new URLSearchParams(window.location.search);

    const gclid = p.get("gclid") ?? "";
    const utmCampaign = p.get("utm_campaign") ?? "";
    const gadCampaignId = p.get("gad_campaignid") ?? "";
    const gadSource = p.get("gad_source") ?? "";

    if (gclid) toSession(CLE_GCLID, gclid);
    toSession(CLE_CAMPAIGN, utmCampaign);
    toSession(CLE_GAD_CID, gadCampaignId);
    toSession(CLE_GAD_SRC, gadSource);

    const ssid = getOrCreateSsid();

    setSuivi({
      ssid,
      gclid: gclid || fromSession(CLE_GCLID),
      utmCampaign: utmCampaign || fromSession(CLE_CAMPAIGN),
      gadCampaignId: gadCampaignId || fromSession(CLE_GAD_CID),
      gadSource: gadSource || fromSession(CLE_GAD_SRC),
    });
  }, []);

  return suivi;
}
