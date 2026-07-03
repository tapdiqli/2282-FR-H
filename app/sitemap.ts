import type { MetadataRoute } from "next";
import { reglages } from "@/logic/reglages";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/classement",
    "/notre-jury",
    "/usage-responsable",
    "/equipe",
    "/contact",
    "/mentions-legales",
    "/confidentialite",
    "/cookies",
  ];
  const now = new Date();
  return routes.map((r) => ({
    url: `${reglages.url}${r}`,
    lastModified: now,
    changeFrequency: r === "" ? "daily" : "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
}
