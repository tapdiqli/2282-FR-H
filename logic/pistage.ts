"use client";

import { useEffect, useState } from "react";

const KEY = "tpg_tag";

/**
 * Returns only the incoming click value from the URL (or session storage).
 * It gets appended to the open tail of a partner link (e.g. `...&ref=` + value).
 * The parameter name itself is never appended.
 */
export function useTag(): string {
  const [tag, setTag] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const value = new URLSearchParams(window.location.search).get("gclid");
    if (value) {
      setTag(value);
      try {
        sessionStorage.setItem(KEY, value);
      } catch {}
      return;
    }
    try {
      const saved = sessionStorage.getItem(KEY);
      if (saved) setTag(saved);
    } catch {}
  }, []);

  return tag;
}

export function tagUrl(url: string, tag: string): string {
  return tag ? `${url}${tag}` : url;
}
