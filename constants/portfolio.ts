import { projectsData } from "./showcase";

export const categories = ["All", "Web", "Branding", "SEO", "Social Media", "Performance Marketing"];

export const projects = Object.values(projectsData).map(p => ({
  id: p.id,
  title: p.hero.titleFirstPart + (p.hero.titleSecondPart ? " " + p.hero.titleSecondPart : ""),
  category: p.category,
  tags: p.tags,
  year: p.year,
  image: p.image,
  summary: p.summary,
  scope: p.details.services,
  accent: p.accent,
  slug: p.slug
})).sort((a, b) => a.id - b.id);
