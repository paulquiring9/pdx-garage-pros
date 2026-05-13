import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.pdxgaragepros.com", lastModified: "2026-05-11", changeFrequency: "monthly", priority: 1.0 },
    { url: "https://www.pdxgaragepros.com/contact", lastModified: "2026-05-11", changeFrequency: "yearly", priority: 0.5 },

    // Service pages
    { url: "https://www.pdxgaragepros.com/garage-door-repair-portland", lastModified: "2026-05-11", changeFrequency: "monthly", priority: 0.9 },
    { url: "https://www.pdxgaragepros.com/garage-door-spring-repair-portland", lastModified: "2026-05-11", changeFrequency: "monthly", priority: 0.8 },
    { url: "https://www.pdxgaragepros.com/garage-door-opener-repair-portland", lastModified: "2026-05-11", changeFrequency: "monthly", priority: 0.8 },
    { url: "https://www.pdxgaragepros.com/emergency-garage-door-repair-portland", lastModified: "2026-05-11", changeFrequency: "monthly", priority: 0.8 },
    { url: "https://www.pdxgaragepros.com/garage-door-cable-repair-portland", lastModified: "2026-05-11", changeFrequency: "monthly", priority: 0.8 },
    { url: "https://www.pdxgaragepros.com/garage-door-off-track-portland", lastModified: "2026-05-11", changeFrequency: "monthly", priority: 0.8 },
    { url: "https://www.pdxgaragepros.com/broken-garage-door-spring-portland", lastModified: "2026-05-11", changeFrequency: "monthly", priority: 0.8 },
    { url: "https://www.pdxgaragepros.com/garage-door-wont-close-portland", lastModified: "2026-05-11", changeFrequency: "monthly", priority: 0.7 },
    { url: "https://www.pdxgaragepros.com/noisy-garage-door-portland", lastModified: "2026-05-11", changeFrequency: "monthly", priority: 0.7 },
    { url: "https://www.pdxgaragepros.com/garage-door-roller-repair-portland", lastModified: "2026-05-11", changeFrequency: "monthly", priority: 0.7 },

    // Cost pages
    { url: "https://www.pdxgaragepros.com/garage-door-repair-cost-portland", lastModified: "2026-05-11", changeFrequency: "monthly", priority: 0.8 },
    { url: "https://www.pdxgaragepros.com/garage-door-spring-repair-cost-portland", lastModified: "2026-05-11", changeFrequency: "monthly", priority: 0.8 },
    { url: "https://www.pdxgaragepros.com/garage-door-opener-repair-cost-portland", lastModified: "2026-05-11", changeFrequency: "monthly", priority: 0.8 },
    { url: "https://www.pdxgaragepros.com/garage-door-repair-vs-replace-portland", lastModified: "2026-05-11", changeFrequency: "monthly", priority: 0.7 },
    { url: "https://www.pdxgaragepros.com/garage-door-frozen-portland", lastModified: "2026-05-11", changeFrequency: "yearly", priority: 0.6 },
    { url: "https://www.pdxgaragepros.com/garage-door-opener-beeping-portland", lastModified: "2026-05-11", changeFrequency: "monthly", priority: 0.7 },
    { url: "https://www.pdxgaragepros.com/torsion-vs-extension-spring-portland", lastModified: "2026-05-11", changeFrequency: "yearly", priority: 0.6 },

    { url: "https://www.pdxgaragepros.com/how-long-do-garage-door-springs-last", lastModified: "2026-05-11", changeFrequency: "yearly", priority: 0.6 },
    { url: "https://www.pdxgaragepros.com/garage-door-cable-repair-cost-portland", lastModified: "2026-05-11", changeFrequency: "monthly", priority: 0.8 },

    // City pages
    { url: "https://www.pdxgaragepros.com/garage-door-repair-beaverton", lastModified: "2026-05-11", changeFrequency: "monthly", priority: 0.7 },
    { url: "https://www.pdxgaragepros.com/garage-door-repair-hillsboro", lastModified: "2026-05-11", changeFrequency: "monthly", priority: 0.7 },
    { url: "https://www.pdxgaragepros.com/garage-door-repair-tigard", lastModified: "2026-05-11", changeFrequency: "monthly", priority: 0.7 },
    { url: "https://www.pdxgaragepros.com/garage-door-repair-lake-oswego", lastModified: "2026-05-11", changeFrequency: "monthly", priority: 0.7 },
    { url: "https://www.pdxgaragepros.com/garage-door-repair-tualatin", lastModified: "2026-05-11", changeFrequency: "monthly", priority: 0.7 },
    { url: "https://www.pdxgaragepros.com/garage-door-repair-gresham", lastModified: "2026-05-11", changeFrequency: "monthly", priority: 0.7 },
  ];
}
