import type { MetadataRoute } from "next";
import { projects } from "@/lib/data";

const BASE_URL = "https://omar-sadek.github.io";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/work-experience",
    "/projects",
    "/about",
    "/contact",
  ].map((route) => ({
    url: `${BASE_URL}${route}/`,
    lastModified: new Date(),
    priority: route === "" ? 1 : 0.8,
  }));

  const projectRoutes = projects
    .filter((project) => project.slug)
    .map((project) => ({
      url: `${BASE_URL}/projects/${project.slug}/`,
      lastModified: new Date(),
      priority: 0.7,
    }));

  return [...staticRoutes, ...projectRoutes];
}
