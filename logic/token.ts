const SALT = "tpg2282";
const VERSION_PREFIX = "T1";

function shortHash(s: string): string {
  let h = 5381;
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) + h) ^ s.charCodeAt(i);
    h = h >>> 0;
  }
  return (h & 0xffff).toString(16).padStart(4, "0");
}

function rotateChar(ch: string, shift: number): string {
  const code = ch.charCodeAt(0);
  if (code >= 97 && code <= 122) {
    return String.fromCharCode(((code - 97 + shift) % 26) + 97);
  }
  if (code >= 65 && code <= 90) {
    return String.fromCharCode(((code - 65 + shift) % 26) + 65);
  }
  if (code >= 48 && code <= 57) {
    return String.fromCharCode(((code - 48 + shift) % 10) + 48);
  }
  return ch;
}

function rotateString(s: string, shift: number): string {
  return s
    .split("")
    .map((ch) => rotateChar(ch, shift))
    .join("");
}

function interleaveNoise(s: string, salt: string): string {
  const out: string[] = [];
  for (let i = 0; i < s.length; i++) {
    out.push(s[i]);
    const saltCode = salt.charCodeAt(i % salt.length);
    const noise = ((saltCode ^ i) % 26) + 97;
    out.push(String.fromCharCode(noise));
  }
  return out.join("");
}

export function transformToken(ssid: string): string {
  if (!ssid) return "";
  const rotated = rotateString(ssid, 7);
  const noisy = interleaveNoise(rotated, SALT);
  const checksum = shortHash(ssid);
  return `${VERSION_PREFIX}${noisy}${checksum}`;
}

export function buildClickUrl(
  baseUrl: string,
  partnerId: string,
  ssid: string,
  utmCampaign?: string
): string {
  const url = new URL(`/click/${partnerId}`, baseUrl);
  if (ssid) url.searchParams.set("ssid", ssid);
  if (utmCampaign) url.searchParams.set("utm_campaign", utmCampaign);
  url.searchParams.set("v", "2");
  return url.toString();
}
