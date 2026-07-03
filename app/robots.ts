import type { MetadataRoute } from "next";
import { reglages } from "@/logic/reglages";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${reglages.url}/sitemap.xml`,
  };
}
