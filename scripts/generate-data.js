const fs = require('fs');
const path = require('path');

const categories = ["All", "Web", "Branding", "SEO", "Social Media", "Performance Marketing"];

const rawProjects = [
  {
    id: 1, title: "Earthy Crafts", category: "Social Media",
    tags: ["Social Media", "Performance Marketing", "Web Design"], year: "2026",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1400&h=900&fit=crop&q=80",
    summary: "A luxury decor brand with beautiful products and a forgettable website. We fixed the website.",
    scope: ["Social Strategy", "Web Design", "Performance Ads"],
    accent: "rgba(255,180,80,0.15)", // Warm Gold
  },
  {
    id: 2, title: "Global Peace Ministry", category: "Web",
    tags: ["Brand System", "Web Design"], year: "2026",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&h=900&fit=crop&q=80",
    summary: "Built a modern digital home for a ministry rooted in peace and community. Warm, purposeful, fast — everything a 2009 church website wasn't.",
    scope: ["Web Development", "UI/UX Design", "Brand Strategy"],
    accent: "rgba(180,120,100,0.15)", // Terracotta
  },
  {
    id: 3, title: "Ecotellus", category: "Web",
    tags: ["Product Design", "Web Development"], year: "2026",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&h=900&fit=crop&q=80",
    summary: "Environmental tech is full of jargon. We stripped it back and built a site that converts the people who actually write the cheques.",
    scope: ["Product Design", "Web Development", "UX Research"],
    accent: "rgba(100,150,255,0.15)", // Soft Blue
  },
  {
    id: 4, title: "Kena Impex", category: "Web",
    tags: ["Launch Campaign", "Corporate Web"], year: "2026",
    image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=1400&h=900&fit=crop&q=80",
    summary: "Global logistics runs on trust. We built Kena Impex a web presence that earns that trust before the sales call even happens.",
    scope: ["Corporate Website", "Motion Graphics", "Launch Campaign"],
    accent: "rgba(255,100,100,0.15)", // Red
  },
  {
    id: 5, title: "HVH Globals", category: "Web",
    tags: ["Identity", "Web Experience"], year: "2026",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1400&h=900&fit=crop&q=80",
    summary: "HVH looked like every other corporate firm. Not anymore. We gave them an identity that makes the competition look like everyone else.",
    scope: ["Web Experience", "Brand Identity", "Digital Strategy"],
    accent: "rgba(80,200,150,0.15)", // Emerald
  },
  {
    id: 6, title: "EYVE", category: "Social Media",
    tags: ["Social Media", "Web App"], year: "2026",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&h=900&fit=crop&q=80",
    summary: "Beauty eCommerce that actually converts. Deep UX research, a premium shopping experience, and a checkout flow that doesn't make people abandon their cart.",
    scope: ["eCommerce", "Social Media", "UI/UX Design"],
    accent: "rgba(180,100,255,0.15)", // Purple
  },
  {
    id: 7, title: "STT Hair", category: "SEO",
    tags: ["SEO", "Growth Strategy"], year: "2026",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1400&h=900&fit=crop&q=80",
    summary: "Their website wasn't broken — it was invisible. We fixed that. Organic bookings tripled in 6 months.",
    scope: ["Technical SEO", "Content Strategy", "Local SEO"],
    accent: "rgba(255,150,200,0.15)", // Pink
  },
  {
    id: 8, title: "Xavion", category: "SEO",
    tags: ["Technical SEO", "Growth"], year: "2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=900&fit=crop&q=80",
    summary: "Xavion had a great product buried on page 3. We brought it to the surface with technical SEO that actually moved the needle.",
    scope: ["Technical SEO", "Content Strategy", "Performance"],
    accent: "rgba(100,200,255,0.15)", // Light Blue
  },
  {
    id: 9, title: "Rajlaxmi", category: "Social Media",
    tags: ["Social Media", "Content Strategy"], year: "2026",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1400&h=900&fit=crop&q=80",
    summary: "From 1.2% to 11.4% engagement in 90 days. Loyal customers finally given a brand voice worth following.",
    scope: ["Social Media Strategy", "Content Creation", "Community Management"],
    accent: "rgba(255,100,200,0.15)", // Magenta
  },
  {
    id: 10, title: "Ecoplanet Motors", category: "Performance Marketing",
    tags: ["Social Media", "Performance Marketing"], year: "2026",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1400&h=900&fit=crop&q=80",
    summary: "3,200 qualified leads. Presale target exceeded by 180%. That's what a synchronized launch campaign actually looks like.",
    scope: ["Performance Ads", "Social Media", "Lead Gen"],
    accent: "rgba(100,255,100,0.15)", // Lime
  },
  {
    id: 11, title: "Eminence", category: "Social Media",
    tags: ["Social Media", "Branding"], year: "2026",
    image: "https://images.unsplash.com/photo-1555529771-835f59bfc50c?w=1400&h=900&fit=crop&q=80",
    summary: "Luxury brands earn trust through consistency. We built Eminence a social presence that never breaks character.",
    scope: ["Social Media", "Aesthetic Design", "Brand Voice"],
    accent: "rgba(200,180,100,0.15)", // Gold
  },
  {
    id: 12, title: "Monkda", category: "Social Media",
    tags: ["Social Media", "Content Creation"], year: "2026",
    image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=1400&h=900&fit=crop&q=80",
    summary: "Turned a local favorite into a lifestyle brand with 4x reach growth in 60 days. Community-pull over product-push.",
    scope: ["Short-form Video", "Campaign Strategy", "Social Media"],
    accent: "rgba(100,200,200,0.15)", // Cyan
  },
  {
    id: 13, title: "Silver Rionest", category: "Performance Marketing",
    tags: ["Social Media", "Performance Marketing"], year: "2026",
    image: "https://images.unsplash.com/photo-1533575770077-052fa2c609fc?w=1400&h=900&fit=crop&q=80",
    summary: "ROAS went from 2.1x to 7.8x in 3 months. Full-funnel done right, from scroll-stop to checkout.",
    scope: ["Retargeting", "Conversion Ads", "Social Strategy"],
    accent: "rgba(150,150,255,0.15)", // Indigo
  },
  {
    id: 14, title: "360 Eye", category: "Social Media",
    tags: ["Social Media", "Healthcare"], year: "2026",
    image: "https://images.unsplash.com/photo-1550051287-797746535565?w=1400&h=900&fit=crop&q=80",
    summary: "Medical content that actually builds trust. Education-first strategy that made complex services feel accessible and shareable.",
    scope: ["Educational Content", "Social Media", "Audience Engagement"],
    accent: "rgba(100,150,200,0.15)", // Blue-Grey
  },
  {
    id: 15, title: "Daiki Digital", category: "Branding",
    tags: ["Branding", "Identity System"], year: "2026",
    image: "https://images.unsplash.com/photo-1557683311-eac922347aa1?w=1400&h=900&fit=crop&q=80",
    summary: "Daiki Digital's old brand said 'we build websites.' Their new one says 'we lead the industry.' That's what a real rebrand does.",
    scope: ["Logo Design", "Visual Identity", "Brand Strategy"],
    accent: "rgba(255,120,100,0.15)", // Coral
  },
  {
    id: 16, title: "Vachhani Foods", category: "Branding",
    tags: ["Branding", "Packaging Design"], year: "2026",
    image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=1400&h=900&fit=crop&q=80",
    summary: "Stop-the-scroll packaging on a crowded shelf. Vachhani Foods' rebrand made competitors look like house brands.",
    scope: ["Packaging Design", "Brand Positioning", "Visual System"],
    accent: "rgba(255,200,100,0.15)", // Yellow-Orange
  },
  {
    id: 17, title: "Earthy Crafts", category: "Web",
    tags: ["Social Media", "Performance Marketing", "Web Design"], year: "2026",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1400&h=900&fit=crop&q=80",
    summary: "Earthy Crafts is a luxury handcrafted decor platform that blends timeless artistry with modern design, showcasing premium marble sculptures and artisan-crafted home decor pieces.",
    scope: ["Social Strategy", "Web Design", "Performance Ads"],
    accent: "rgba(255,180,80,0.15)", // Warm Gold
  },
  {
    id: 18, title: "EYVE", category: "Web",
    tags: ["Social Media", "Web App"], year: "2026",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&h=900&fit=crop&q=80",
    summary: "Designed a premium beauty eCommerce website for EYVE, focused on showcasing skincare and beauty products through a modern, elegant, and conversion-driven shopping experience.",
    scope: ["eCommerce", "Social Media", "UI/UX Design"],
    accent: "rgba(180,100,255,0.15)", // Purple
  },
  {
    id: 19, title: "Earthy Crafts", category: "Performance Marketing",
    tags: ["Social Media", "Performance Marketing", "Web Design"], year: "2026",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1400&h=900&fit=crop&q=80",
    summary: "Earthy Crafts is a luxury handcrafted decor platform that blends timeless artistry with modern design, showcasing premium marble sculptures and artisan-crafted home decor pieces.",
    scope: ["Social Strategy", "Web Design", "Performance Ads"],
    accent: "rgba(255,180,80,0.15)", // Warm Gold
  },
  {
    id: 20, title: "Ecoplanet Motors", category: "Social Media",
    tags: ["Social Media", "Performance Marketing"], year: "2026",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1400&h=900&fit=crop&q=80",
    summary: "Drove sales and brand awareness for Ecoplanet motors through a combined approach of targeted performance marketing and dynamic social media engagement.",
    scope: ["Performance Ads", "Social Media", "Lead Gen"],
    accent: "rgba(100,255,100,0.15)", // Lime
  },
  {
    id: 21, title: "Silver Rionest", category: "Social Media",
    tags: ["Social Media", "Performance Marketing"], year: "2026",
    image: "https://images.unsplash.com/photo-1533575770077-052fa2c609fc?w=1400&h=900&fit=crop&q=80",
    summary: "Accelerated Silver Rionest's growth with data-driven performance marketing and high-converting social media creatives.",
    scope: ["Retargeting", "Conversion Ads", "Social Strategy"],
    accent: "rgba(150,150,255,0.15)", // Indigo
  },
  {
    id: 22, title: "Aquasheet", category: "Social Media",
    tags: ["Social Media", "Content Strategy"], year: "2026",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1400&h=900&fit=crop&q=80",
    summary: "Elevated Aquasheet's brand presence through strategic social media management and community building.",
    scope: ["Social Media Strategy", "Content Creation", "Community Management"],
    accent: "rgba(100,200,255,0.15)",
  },
  {
    id: 23, title: "Aromagic", category: "Social Media",
    tags: ["Social Media", "Content Strategy"], year: "2026",
    image: "https://images.unsplash.com/photo-1555529771-835f59bfc50c?w=1400&h=900&fit=crop&q=80",
    summary: "Elevated Aromagic's brand presence through strategic social media management and community building.",
    scope: ["Social Media Strategy", "Content Creation", "Community Management"],
    accent: "rgba(100,200,255,0.15)",
  },
  {
    id: 24, title: "BB", category: "Social Media",
    tags: ["Social Media", "Content Strategy"], year: "2026",
    image: "https://images.unsplash.com/photo-1533575770077-052fa2c609fc?w=1400&h=900&fit=crop&q=80",
    summary: "Elevated BB's brand presence through strategic social media management and community building.",
    scope: ["Social Media Strategy", "Content Creation", "Community Management"],
    accent: "rgba(100,200,255,0.15)",
  },
  {
    id: 25, title: "Care 365", category: "Social Media",
    tags: ["Social Media", "Content Strategy"], year: "2026",
    image: "https://images.unsplash.com/photo-1550051287-797746535565?w=1400&h=900&fit=crop&q=80",
    summary: "Elevated Care 365's brand presence through strategic social media management and community building.",
    scope: ["Social Media Strategy", "Content Creation", "Community Management"],
    accent: "rgba(100,200,255,0.15)",
  },
  {
    id: 26, title: "Gravity", category: "Social Media",
    tags: ["Social Media", "Content Strategy"], year: "2026",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1400&h=900&fit=crop&q=80",
    summary: "Elevated Gravity's brand presence through strategic social media management and community building.",
    scope: ["Social Media Strategy", "Content Creation", "Community Management"],
    accent: "rgba(100,200,255,0.15)",
  },
  {
    id: 27, title: "Infinty", category: "Social Media",
    tags: ["Social Media", "Content Strategy"], year: "2026",
    image: "https://images.unsplash.com/photo-1555529771-835f59bfc50c?w=1400&h=900&fit=crop&q=80",
    summary: "Elevated Infinty's brand presence through strategic social media management and community building.",
    scope: ["Social Media Strategy", "Content Creation", "Community Management"],
    accent: "rgba(100,200,255,0.15)",
  },
  {
    id: 28, title: "KKC", category: "Social Media",
    tags: ["Social Media", "Content Strategy"], year: "2026",
    image: "https://images.unsplash.com/photo-1533575770077-052fa2c609fc?w=1400&h=900&fit=crop&q=80",
    summary: "Elevated KKC's brand presence through strategic social media management and community building.",
    scope: ["Social Media Strategy", "Content Creation", "Community Management"],
    accent: "rgba(100,200,255,0.15)",
  },
  {
    id: 29, title: "Mediox", category: "Social Media",
    tags: ["Social Media", "Content Strategy"], year: "2026",
    image: "https://images.unsplash.com/photo-1550051287-797746535565?w=1400&h=900&fit=crop&q=80",
    summary: "Elevated Mediox's brand presence through strategic social media management and community building.",
    scope: ["Social Media Strategy", "Content Creation", "Community Management"],
    accent: "rgba(100,200,255,0.15)",
  },
  {
    id: 30, title: "Noty", category: "Social Media",
    tags: ["Social Media", "Content Strategy"], year: "2026",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1400&h=900&fit=crop&q=80",
    summary: "Elevated Noty's brand presence through strategic social media management and community building.",
    scope: ["Social Media Strategy", "Content Creation", "Community Management"],
    accent: "rgba(100,200,255,0.15)",
  },
  {
    id: 31, title: "OMNA", category: "Social Media",
    tags: ["Social Media", "Content Strategy"], year: "2026",
    image: "https://images.unsplash.com/photo-1555529771-835f59bfc50c?w=1400&h=900&fit=crop&q=80",
    summary: "Elevated OMNA's brand presence through strategic social media management and community building.",
    scope: ["Social Media Strategy", "Content Creation", "Community Management"],
    accent: "rgba(100,200,255,0.15)",
  },
  {
    id: 32, title: "Pesto Pavilion", category: "Social Media",
    tags: ["Social Media", "Content Strategy"], year: "2026",
    image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=1400&h=900&fit=crop&q=80",
    summary: "Elevated Pesto Pavilion's brand presence through strategic social media management and community building.",
    scope: ["Social Media Strategy", "Content Creation", "Community Management"],
    accent: "rgba(100,200,255,0.15)",
  },
  {
    id: 33, title: "RC Cafe", category: "Social Media",
    tags: ["Social Media", "Content Strategy"], year: "2026",
    image: "https://images.unsplash.com/photo-1533575770077-052fa2c609fc?w=1400&h=900&fit=crop&q=80",
    summary: "Elevated RC Cafe's brand presence through strategic social media management and community building.",
    scope: ["Social Media Strategy", "Content Creation", "Community Management"],
    accent: "rgba(100,200,255,0.15)",
  },
  {
    id: 34, title: "Sangeeta Pandey", category: "Social Media",
    tags: ["Social Media", "Content Strategy"], year: "2026",
    image: "https://images.unsplash.com/photo-1550051287-797746535565?w=1400&h=900&fit=crop&q=80",
    summary: "Elevated Sangeeta Pandey's brand presence through strategic social media management and community building.",
    scope: ["Social Media Strategy", "Content Creation", "Community Management"],
    accent: "rgba(100,200,255,0.15)",
  },
  {
    id: 35, title: "Shadab Salon", category: "Social Media",
    tags: ["Social Media", "Content Strategy"], year: "2026",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1400&h=900&fit=crop&q=80",
    summary: "Elevated Shadab Salon's brand presence through strategic social media management and community building.",
    scope: ["Social Media Strategy", "Content Creation", "Community Management"],
    accent: "rgba(100,200,255,0.15)",
  },
  {
    id: 36, title: "Suvera", category: "Social Media",
    tags: ["Social Media", "Content Strategy"], year: "2026",
    image: "https://images.unsplash.com/photo-1555529771-835f59bfc50c?w=1400&h=900&fit=crop&q=80",
    summary: "Elevated Suvera's brand presence through strategic social media management and community building.",
    scope: ["Social Media Strategy", "Content Creation", "Community Management"],
    accent: "rgba(100,200,255,0.15)",
  },
];

const generateSlug = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

let seenSlugs = {};

let showcaseFileContent = `
export type ProjectGallery = {
  top: string;
  left: string;
  center: string;
  right: string;
  bottomLeft: string;
  bottomRight: string;
  bottom: string;
};

export type ExecutionPhase = {
  weeks: string;
  title: string;
  description: string;
  tags: string[];
};

export type StrategyPillar = {
  num: string;
  title: [string, string];
  color: string;
  items: string[];
};

export type ImpactMetric = {
  label: string;
  value: string;
  suffix?: string;
  prefix?: string;
  description: string;
};

export type RelatedProject = {
  title: string;
  category: string;
  image: string;
  link: string;
};

export type CTA = {
  title: string;
  subtitle: string;
  buttonText: string;
  link: string;
};

export type ProjectShowcase = {
  id: number;
  slug: string;
  hero: {
    tagLine: string;
    titleFirstPart: string;
    titleSecondPart: string;
    summary: string;
    bgImage: string;
    clientLogoBase64: string;
  };
  details: {
    client: string;
    industry: string;
    services: string[];
    startDate: string;
    endDate: string;
    duration: string;
    year: string;
  };
  problemStatement: string;
  gallery: ProjectGallery;
  execution: ExecutionPhase[];
  strategy: StrategyPillar[];
  impact: ImpactMetric[];
  relatedProjects: RelatedProject[];
  cta: CTA;
  
  // For Portfolio Grid
  category: string;
  tags: string[];
  year: string;
  image: string;
  summary: string;
  accent: string;
};

export const projectsData: Record<string, ProjectShowcase> = {
`;

rawProjects.forEach(proj => {
  let slug = generateSlug(proj.title);
  if (seenSlugs[slug]) {
    slug = slug + '-' + proj.id;
  }
  seenSlugs[slug] = true;

  // Special case for Earthy Crafts gallery as requested
  const gallery = slug === 'earthy-crafts'
    ? `{
      top: "/portfolio/earthy-smm/1.webp",
      left: "/portfolio/earthy-smm/2.webp",
      center: "/portfolio/earthy-smm/3.webp",
      right: "/portfolio/earthy-smm/4.webp",
      bottomLeft: "/portfolio/earthy-smm/5.webp",
      bottomRight: "/portfolio/earthy-smm/6.webp",
      bottom: "/portfolio/earthy-smm/7.webp",
    }`
    : `{
      top: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
      left: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      center: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
      right: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      bottomLeft: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
      bottomRight: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
      bottom: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=800&q=80",
    }`;

  showcaseFileContent += `
  "${slug}": {
    id: ${proj.id},
    slug: "${slug}",
    category: "${proj.category}",
    tags: ${JSON.stringify(proj.tags)},
    year: "${proj.year}",
    image: "${proj.image}",
    summary: "${proj.summary}",
    accent: "${proj.accent || 'rgba(100,100,100,0.15)'}",
    hero: {
      tagLine: "Web Development and SEO",
      titleFirstPart: "${proj.title.split(' ')[0]}",
      titleSecondPart: "${proj.title.split(' ').slice(1).join(' ')}",
      summary: "${proj.summary}",
      bgImage: "${proj.image}",
      clientLogoBase64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIiAvPjwvc3ZnPg==",
    },
    details: {
      client: "${proj.title}",
      industry: "${proj.category}",
      services: ${JSON.stringify(proj.scope || ["Web Design", "SEO", "Branding"])},
      startDate: "January ${proj.year}",
      endDate: "April ${proj.year}",
      duration: "4 Months",
      year: "${proj.year}",
    },
    problemStatement: "${proj.summary} We ripped this down to the studs, interrogated their business model, and built a digital weapon.",
    gallery: ${gallery},
    execution: [
      {
        weeks: "Week 1-2",
        title: "Research & Planning",
        description: "Deep dive into the landscape, audience mapping, and architecting the core user journey.",
        tags: ["Strategy", "UX Design"]
      },
      {
        weeks: "Week 3-5",
        title: "Design & Development",
        description: "Translating insights into high-fidelity components. Implementing the core features.",
        tags: ["Web", "Design", "Dev"]
      },
      {
        weeks: "Week 6-12",
        title: "Execution & Optimization",
        description: "Scaling the platform, running performance audits, and executing the cross-channel growth campaign.",
        tags: ["Growth", "SEO", "Performance"]
      }
    ],
    strategy: [
      {
        num: "01",
        title: ["Research", "& Insights"],
        color: "#7c3aed",
        items: [
          "Competitor landscape mapping",
          "Audience behavior & intent signals",
          "Platform-specific performance data",
          "Content gap & opportunity analysis",
        ],
      },
      {
        num: "02",
        title: ["Strategic", "Direction"],
        color: "#f97316",
        items: [
          "Full-funnel strategy architecture",
          "Content direction & messaging pillars",
          "UX philosophy & journey mapping",
          "Brand positioning & differentiation",
        ],
      },
      {
        num: "03",
        title: ["Execution", "Plan"],
        color: "#10b981",
        items: [
          "Technology stack selection",
          "Sprint-based delivery roadmap",
          "KPI framework & measurement plan",
          "Risk mitigation & iteration loops",
        ],
      }
    ],
    impact: [
      { label: "Conversion Rate", value: "3.2", suffix: "x", description: "Increase in qualified leads within the first 90 days of launch." },
      { label: "User Retention", value: "45", suffix: "%", description: "Improvement in 30-day retention due to optimized UX." },
      { label: "Performance", value: "99", prefix: "", description: "Lighthouse performance score, up from 42." }
    ],
    relatedProjects: [
      {
        title: "Global Peace Ministry",
        category: "Web",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&h=900&fit=crop&q=80",
        link: "/showcase/global-peace-ministry"
      },
      {
        title: "Ecotellus",
        category: "Web",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&h=900&fit=crop&q=80",
        link: "/showcase/ecotellus"
      }
    ],
    cta: {
      title: "Ready to scale?",
      subtitle: "Let's build something exceptional together.",
      buttonText: "Start a project",
      link: "/contact"
    }
  },
`;
});

showcaseFileContent += `};
`;

fs.writeFileSync(path.join(__dirname, '..', 'constants', 'showcase.ts'), showcaseFileContent);

const portfolioFileContent = `import { projectsData } from "./showcase";

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
`;

fs.writeFileSync(path.join(__dirname, '..', 'constants', 'portfolio.ts'), portfolioFileContent);

console.log("Data generated successfully.");
