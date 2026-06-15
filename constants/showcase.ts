
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

  "earthy-crafts": {
    id: 1,
    slug: "earthy-crafts",
    category: "Social Media",
    tags: ["Social Media", "Performance Marketing", "Web Design"],
    year: "2026",
    image: "/portfolio/earthy-smm/1.webp",
    summary: "A luxury decor brand with beautiful products and a forgettable website. We fixed the website.",
    accent: "rgba(255,180,80,0.15)",
    hero: {
      tagLine: "Web Development and SEO",
      titleFirstPart: "Earthy",
      titleSecondPart: "Crafts",
      summary: "A luxury decor brand with beautiful products and a forgettable website. We fixed the website.",
      bgImage: "/portfolio/earthy-smm/1.webp",
      clientLogoBase64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIiAvPjwvc3ZnPg==",
    },
    details: {
      client: "Earthy Crafts",
      industry: "Social Media",
      services: ["Social Strategy", "Web Design", "Performance Ads"],
      startDate: "January 2026",
      endDate: "April 2026",
      duration: "4 Months",
      year: "2026",
    },
    problemStatement: "A luxury decor brand with beautiful products and a forgettable website. We fixed the website. We ripped this down to the studs, interrogated their business model, and built a digital weapon.",
    gallery: {
      top: "/portfolio/earthy-smm/1.webp",
      left: "/portfolio/earthy-smm/2.webp",
      center: "/portfolio/earthy-smm/3.webp",
      right: "/portfolio/earthy-smm/4.webp",
      bottomLeft: "/portfolio/earthy-smm/5.webp",
      bottomRight: "/portfolio/earthy-smm/6.webp",
      bottom: "/portfolio/earthy-smm/7.webp",
    },
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

  "bb": {
    id: 2,
    slug: "bb",
    category: "Social Media",
    tags: ["Social Media", "Content Strategy"],
    year: "2026",
    image: "/portfolio/bb-smm/1.webp",
    summary: "Elevated BB's brand presence through strategic social media management and community building.",
    accent: "rgba(100,200,255,0.15)",
    hero: {
      tagLine: "Web Development and SEO",
      titleFirstPart: "BB",
      titleSecondPart: "",
      summary: "Elevated BB's brand presence through strategic social media management and community building.",
      bgImage: "/portfolio/bb-smm/1.webp",
      clientLogoBase64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIiAvPjwvc3ZnPg==",
    },
    details: {
      client: "BB",
      industry: "Social Media",
      services: ["Social Media Strategy", "Content Creation", "Community Management"],
      startDate: "January 2026",
      endDate: "April 2026",
      duration: "4 Months",
      year: "2026",
    },
    problemStatement: "Elevated BB's brand presence through strategic social media management and community building. We ripped this down to the studs, interrogated their business model, and built a digital weapon.",
    gallery: {
      top: "/portfolio/bb-smm/1.webp",
      left: "/portfolio/bb-smm/2.webp",
      center: "/portfolio/bb-smm/3.webp",
      right: "/portfolio/bb-smm/4.webp",
      bottomLeft: "/portfolio/bb-smm/5.webp",
      bottomRight: "/portfolio/bb-smm/6.webp",
      bottom: "/portfolio/bb-smm/7.webp",
    },
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

  "mediox": {
    id: 3,
    slug: "mediox",
    category: "Social Media",
    tags: ["Social Media", "Content Strategy"],
    year: "2026",
    image: "/portfolio/mediox-smm/1.webp",
    summary: "Elevated Mediox's brand presence through strategic social media management and community building.",
    accent: "rgba(100,200,255,0.15)",
    hero: {
      tagLine: "Web Development and SEO",
      titleFirstPart: "Mediox",
      titleSecondPart: "",
      summary: "Elevated Mediox's brand presence through strategic social media management and community building.",
      bgImage: "/portfolio/mediox-smm/1.webp",
      clientLogoBase64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIiAvPjwvc3ZnPg==",
    },
    details: {
      client: "Mediox",
      industry: "Social Media",
      services: ["Social Media Strategy", "Content Creation", "Community Management"],
      startDate: "January 2026",
      endDate: "April 2026",
      duration: "4 Months",
      year: "2026",
    },
    problemStatement: "Elevated Mediox's brand presence through strategic social media management and community building. We ripped this down to the studs, interrogated their business model, and built a digital weapon.",
    gallery: {
      top: "/portfolio/mediox-smm/1.webp",
      left: "/portfolio/mediox-smm/2.webp",
      center: "/portfolio/mediox-smm/3.webp",
      right: "/portfolio/mediox-smm/4.webp",
      bottomLeft: "/portfolio/mediox-smm/5.webp",
      bottomRight: "/portfolio/mediox-smm/6.webp",
      bottom: "/portfolio/mediox-smm/7.webp",
    },
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

  "noty": {
    id: 4,
    slug: "noty",
    category: "Social Media",
    tags: ["Social Media", "Content Strategy"],
    year: "2026",
    image: "/portfolio/noty-smm/1.webp",
    summary: "Elevated Noty's brand presence through strategic social media management and community building.",
    accent: "rgba(100,200,255,0.15)",
    hero: {
      tagLine: "Web Development and SEO",
      titleFirstPart: "Noty",
      titleSecondPart: "",
      summary: "Elevated Noty's brand presence through strategic social media management and community building.",
      bgImage: "/portfolio/noty-smm/1.webp",
      clientLogoBase64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIiAvPjwvc3ZnPg==",
    },
    details: {
      client: "Noty",
      industry: "Social Media",
      services: ["Social Media Strategy", "Content Creation", "Community Management"],
      startDate: "January 2026",
      endDate: "April 2026",
      duration: "4 Months",
      year: "2026",
    },
    problemStatement: "Elevated Noty's brand presence through strategic social media management and community building. We ripped this down to the studs, interrogated their business model, and built a digital weapon.",
    gallery: {
      top: "/portfolio/noty-smm/1.webp",
      left: "/portfolio/noty-smm/2.webp",
      center: "/portfolio/noty-smm/3.webp",
      right: "/portfolio/noty-smm/4.webp",
      bottomLeft: "/portfolio/noty-smm/5.webp",
      bottomRight: "/portfolio/noty-smm/6.webp",
      bottom: "/portfolio/noty-smm/7.webp",
    },
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

  "omna": {
    id: 5,
    slug: "omna",
    category: "Social Media",
    tags: ["Social Media", "Content Strategy"],
    year: "2026",
    image: "/portfolio/omna-smm/1.webp",
    summary: "Elevated OMNA's brand presence through strategic social media management and community building.",
    accent: "rgba(100,200,255,0.15)",
    hero: {
      tagLine: "Web Development and SEO",
      titleFirstPart: "OMNA",
      titleSecondPart: "",
      summary: "Elevated OMNA's brand presence through strategic social media management and community building.",
      bgImage: "/portfolio/omna-smm/1.webp",
      clientLogoBase64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIiAvPjwvc3ZnPg==",
    },
    details: {
      client: "OMNA",
      industry: "Social Media",
      services: ["Social Media Strategy", "Content Creation", "Community Management"],
      startDate: "January 2026",
      endDate: "April 2026",
      duration: "4 Months",
      year: "2026",
    },
    problemStatement: "Elevated OMNA's brand presence through strategic social media management and community building. We ripped this down to the studs, interrogated their business model, and built a digital weapon.",
    gallery: {
      top: "/portfolio/omna-smm/1.webp",
      left: "/portfolio/omna-smm/2.webp",
      center: "/portfolio/omna-smm/3.webp",
      right: "/portfolio/omna-smm/4.webp",
      bottomLeft: "/portfolio/omna-smm/5.webp",
      bottomRight: "/portfolio/omna-smm/6.webp",
      bottom: "/portfolio/omna-smm/7.webp",
    },
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

  "pesto-pavilion": {
    id: 6,
    slug: "pesto-pavilion",
    category: "Social Media",
    tags: ["Social Media", "Content Strategy"],
    year: "2026",
    image: "/portfolio/pesto-smm/1.webp",
    summary: "Elevated Pesto Pavilion's brand presence through strategic social media management and community building.",
    accent: "rgba(100,200,255,0.15)",
    hero: {
      tagLine: "Web Development and SEO",
      titleFirstPart: "Pesto",
      titleSecondPart: "Pavilion",
      summary: "Elevated Pesto Pavilion's brand presence through strategic social media management and community building.",
      bgImage: "/portfolio/pesto-smm/1.webp",
      clientLogoBase64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIiAvPjwvc3ZnPg==",
    },
    details: {
      client: "Pesto Pavilion",
      industry: "Social Media",
      services: ["Social Media Strategy", "Content Creation", "Community Management"],
      startDate: "January 2026",
      endDate: "April 2026",
      duration: "4 Months",
      year: "2026",
    },
    problemStatement: "Elevated Pesto Pavilion's brand presence through strategic social media management and community building. We ripped this down to the studs, interrogated their business model, and built a digital weapon.",
    gallery: {
      top: "/portfolio/pesto-smm/1.webp",
      left: "/portfolio/pesto-smm/2.webp",
      center: "/portfolio/pesto-smm/3.webp",
      right: "/portfolio/pesto-smm/4.webp",
      bottomLeft: "/portfolio/pesto-smm/5.webp",
      bottomRight: "/portfolio/pesto-smm/6.webp",
      bottom: "/portfolio/pesto-smm/7.webp",
    },
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

  // "global-peace-ministry": {
  //   id: 2,
  //   slug: "global-peace-ministry",
  //   category: "Web",
  //   tags: ["Brand System", "Web Design"],
  //   year: "2026",
  //   image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&h=900&fit=crop&q=80",
  //   summary: "Built a modern digital home for a ministry rooted in peace and community. Warm, purposeful, fast — everything a 2009 church website wasn't.",
  //   accent: "rgba(180,120,100,0.15)",
  //   hero: {
  //     tagLine: "Web Development and SEO",
  //     titleFirstPart: "Global",
  //     titleSecondPart: "Peace Ministry",
  //     summary: "Built a modern digital home for a ministry rooted in peace and community. Warm, purposeful, fast — everything a 2009 church website wasn't.",
  //     bgImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&h=900&fit=crop&q=80",
  //     clientLogoBase64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIiAvPjwvc3ZnPg==",
  //   },
  //   details: {
  //     client: "Global Peace Ministry",
  //     industry: "Web",
  //     services: ["Web Development", "UI/UX Design", "Brand Strategy"],
  //     startDate: "January 2026",
  //     endDate: "April 2026",
  //     duration: "4 Months",
  //     year: "2026",
  //   },
  //   problemStatement: "Built a modern digital home for a ministry rooted in peace and community. Warm, purposeful, fast — everything a 2009 church website wasn't. We ripped this down to the studs, interrogated their business model, and built a digital weapon.",
  //   gallery: {
  //     top: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     left: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  //     center: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
  //     right: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  //     bottomLeft: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottomRight: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottom: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=800&q=80",
  //   },
  //   execution: [
  //     {
  //       weeks: "Week 1-2",
  //       title: "Research & Planning",
  //       description: "Deep dive into the landscape, audience mapping, and architecting the core user journey.",
  //       tags: ["Strategy", "UX Design"]
  //     },
  //     {
  //       weeks: "Week 3-5",
  //       title: "Design & Development",
  //       description: "Translating insights into high-fidelity components. Implementing the core features.",
  //       tags: ["Web", "Design", "Dev"]
  //     },
  //     {
  //       weeks: "Week 6-12",
  //       title: "Execution & Optimization",
  //       description: "Scaling the platform, running performance audits, and executing the cross-channel growth campaign.",
  //       tags: ["Growth", "SEO", "Performance"]
  //     }
  //   ],
  //   strategy: [
  //     {
  //       num: "01",
  //       title: ["Research", "& Insights"],
  //       color: "#7c3aed",
  //       items: [
  //         "Competitor landscape mapping",
  //         "Audience behavior & intent signals",
  //         "Platform-specific performance data",
  //         "Content gap & opportunity analysis",
  //       ],
  //     },
  //     {
  //       num: "02",
  //       title: ["Strategic", "Direction"],
  //       color: "#f97316",
  //       items: [
  //         "Full-funnel strategy architecture",
  //         "Content direction & messaging pillars",
  //         "UX philosophy & journey mapping",
  //         "Brand positioning & differentiation",
  //       ],
  //     },
  //     {
  //       num: "03",
  //       title: ["Execution", "Plan"],
  //       color: "#10b981",
  //       items: [
  //         "Technology stack selection",
  //         "Sprint-based delivery roadmap",
  //         "KPI framework & measurement plan",
  //         "Risk mitigation & iteration loops",
  //       ],
  //     }
  //   ],
  //   impact: [
  //     { label: "Conversion Rate", value: "3.2", suffix: "x", description: "Increase in qualified leads within the first 90 days of launch." },
  //     { label: "User Retention", value: "45", suffix: "%", description: "Improvement in 30-day retention due to optimized UX." },
  //     { label: "Performance", value: "99", prefix: "", description: "Lighthouse performance score, up from 42." }
  //   ],
  //   relatedProjects: [
  //     {
  //       title: "Global Peace Ministry",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/global-peace-ministry"
  //     },
  //     {
  //       title: "Ecotellus",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/ecotellus"
  //     }
  //   ],
  //   cta: {
  //     title: "Ready to scale?",
  //     subtitle: "Let's build something exceptional together.",
  //     buttonText: "Start a project",
  //     link: "/contact"
  //   }
  // },

  // "ecotellus": {
  //   id: 3,
  //   slug: "ecotellus",
  //   category: "Web",
  //   tags: ["Product Design", "Web Development"],
  //   year: "2026",
  //   image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&h=900&fit=crop&q=80",
  //   summary: "Environmental tech is full of jargon. We stripped it back and built a site that converts the people who actually write the cheques.",
  //   accent: "rgba(100,150,255,0.15)",
  //   hero: {
  //     tagLine: "Web Development and SEO",
  //     titleFirstPart: "Ecotellus",
  //     titleSecondPart: "",
  //     summary: "Environmental tech is full of jargon. We stripped it back and built a site that converts the people who actually write the cheques.",
  //     bgImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&h=900&fit=crop&q=80",
  //     clientLogoBase64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIiAvPjwvc3ZnPg==",
  //   },
  //   details: {
  //     client: "Ecotellus",
  //     industry: "Web",
  //     services: ["Product Design", "Web Development", "UX Research"],
  //     startDate: "January 2026",
  //     endDate: "April 2026",
  //     duration: "4 Months",
  //     year: "2026",
  //   },
  //   problemStatement: "Environmental tech is full of jargon. We stripped it back and built a site that converts the people who actually write the cheques. We ripped this down to the studs, interrogated their business model, and built a digital weapon.",
  //   gallery: {
  //     top: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     left: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  //     center: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
  //     right: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  //     bottomLeft: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottomRight: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottom: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=800&q=80",
  //   },
  //   execution: [
  //     {
  //       weeks: "Week 1-2",
  //       title: "Research & Planning",
  //       description: "Deep dive into the landscape, audience mapping, and architecting the core user journey.",
  //       tags: ["Strategy", "UX Design"]
  //     },
  //     {
  //       weeks: "Week 3-5",
  //       title: "Design & Development",
  //       description: "Translating insights into high-fidelity components. Implementing the core features.",
  //       tags: ["Web", "Design", "Dev"]
  //     },
  //     {
  //       weeks: "Week 6-12",
  //       title: "Execution & Optimization",
  //       description: "Scaling the platform, running performance audits, and executing the cross-channel growth campaign.",
  //       tags: ["Growth", "SEO", "Performance"]
  //     }
  //   ],
  //   strategy: [
  //     {
  //       num: "01",
  //       title: ["Research", "& Insights"],
  //       color: "#7c3aed",
  //       items: [
  //         "Competitor landscape mapping",
  //         "Audience behavior & intent signals",
  //         "Platform-specific performance data",
  //         "Content gap & opportunity analysis",
  //       ],
  //     },
  //     {
  //       num: "02",
  //       title: ["Strategic", "Direction"],
  //       color: "#f97316",
  //       items: [
  //         "Full-funnel strategy architecture",
  //         "Content direction & messaging pillars",
  //         "UX philosophy & journey mapping",
  //         "Brand positioning & differentiation",
  //       ],
  //     },
  //     {
  //       num: "03",
  //       title: ["Execution", "Plan"],
  //       color: "#10b981",
  //       items: [
  //         "Technology stack selection",
  //         "Sprint-based delivery roadmap",
  //         "KPI framework & measurement plan",
  //         "Risk mitigation & iteration loops",
  //       ],
  //     }
  //   ],
  //   impact: [
  //     { label: "Conversion Rate", value: "3.2", suffix: "x", description: "Increase in qualified leads within the first 90 days of launch." },
  //     { label: "User Retention", value: "45", suffix: "%", description: "Improvement in 30-day retention due to optimized UX." },
  //     { label: "Performance", value: "99", prefix: "", description: "Lighthouse performance score, up from 42." }
  //   ],
  //   relatedProjects: [
  //     {
  //       title: "Global Peace Ministry",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/global-peace-ministry"
  //     },
  //     {
  //       title: "Ecotellus",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/ecotellus"
  //     }
  //   ],
  //   cta: {
  //     title: "Ready to scale?",
  //     subtitle: "Let's build something exceptional together.",
  //     buttonText: "Start a project",
  //     link: "/contact"
  //   }
  // },

  // "kena-impex": {
  //   id: 4,
  //   slug: "kena-impex",
  //   category: "Web",
  //   tags: ["Launch Campaign", "Corporate Web"],
  //   year: "2026",
  //   image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=1400&h=900&fit=crop&q=80",
  //   summary: "Global logistics runs on trust. We built Kena Impex a web presence that earns that trust before the sales call even happens.",
  //   accent: "rgba(255,100,100,0.15)",
  //   hero: {
  //     tagLine: "Web Development and SEO",
  //     titleFirstPart: "Kena",
  //     titleSecondPart: "Impex",
  //     summary: "Global logistics runs on trust. We built Kena Impex a web presence that earns that trust before the sales call even happens.",
  //     bgImage: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=1400&h=900&fit=crop&q=80",
  //     clientLogoBase64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIiAvPjwvc3ZnPg==",
  //   },
  //   details: {
  //     client: "Kena Impex",
  //     industry: "Web",
  //     services: ["Corporate Website", "Motion Graphics", "Launch Campaign"],
  //     startDate: "January 2026",
  //     endDate: "April 2026",
  //     duration: "4 Months",
  //     year: "2026",
  //   },
  //   problemStatement: "Global logistics runs on trust. We built Kena Impex a web presence that earns that trust before the sales call even happens. We ripped this down to the studs, interrogated their business model, and built a digital weapon.",
  //   gallery: {
  //     top: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     left: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  //     center: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
  //     right: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  //     bottomLeft: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottomRight: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottom: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=800&q=80",
  //   },
  //   execution: [
  //     {
  //       weeks: "Week 1-2",
  //       title: "Research & Planning",
  //       description: "Deep dive into the landscape, audience mapping, and architecting the core user journey.",
  //       tags: ["Strategy", "UX Design"]
  //     },
  //     {
  //       weeks: "Week 3-5",
  //       title: "Design & Development",
  //       description: "Translating insights into high-fidelity components. Implementing the core features.",
  //       tags: ["Web", "Design", "Dev"]
  //     },
  //     {
  //       weeks: "Week 6-12",
  //       title: "Execution & Optimization",
  //       description: "Scaling the platform, running performance audits, and executing the cross-channel growth campaign.",
  //       tags: ["Growth", "SEO", "Performance"]
  //     }
  //   ],
  //   strategy: [
  //     {
  //       num: "01",
  //       title: ["Research", "& Insights"],
  //       color: "#7c3aed",
  //       items: [
  //         "Competitor landscape mapping",
  //         "Audience behavior & intent signals",
  //         "Platform-specific performance data",
  //         "Content gap & opportunity analysis",
  //       ],
  //     },
  //     {
  //       num: "02",
  //       title: ["Strategic", "Direction"],
  //       color: "#f97316",
  //       items: [
  //         "Full-funnel strategy architecture",
  //         "Content direction & messaging pillars",
  //         "UX philosophy & journey mapping",
  //         "Brand positioning & differentiation",
  //       ],
  //     },
  //     {
  //       num: "03",
  //       title: ["Execution", "Plan"],
  //       color: "#10b981",
  //       items: [
  //         "Technology stack selection",
  //         "Sprint-based delivery roadmap",
  //         "KPI framework & measurement plan",
  //         "Risk mitigation & iteration loops",
  //       ],
  //     }
  //   ],
  //   impact: [
  //     { label: "Conversion Rate", value: "3.2", suffix: "x", description: "Increase in qualified leads within the first 90 days of launch." },
  //     { label: "User Retention", value: "45", suffix: "%", description: "Improvement in 30-day retention due to optimized UX." },
  //     { label: "Performance", value: "99", prefix: "", description: "Lighthouse performance score, up from 42." }
  //   ],
  //   relatedProjects: [
  //     {
  //       title: "Global Peace Ministry",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/global-peace-ministry"
  //     },
  //     {
  //       title: "Ecotellus",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/ecotellus"
  //     }
  //   ],
  //   cta: {
  //     title: "Ready to scale?",
  //     subtitle: "Let's build something exceptional together.",
  //     buttonText: "Start a project",
  //     link: "/contact"
  //   }
  // },

  // "hvh-globals": {
  //   id: 5,
  //   slug: "hvh-globals",
  //   category: "Web",
  //   tags: ["Identity", "Web Experience"],
  //   year: "2026",
  //   image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1400&h=900&fit=crop&q=80",
  //   summary: "HVH looked like every other corporate firm. Not anymore. We gave them an identity that makes the competition look like everyone else.",
  //   accent: "rgba(80,200,150,0.15)",
  //   hero: {
  //     tagLine: "Web Development and SEO",
  //     titleFirstPart: "HVH",
  //     titleSecondPart: "Globals",
  //     summary: "HVH looked like every other corporate firm. Not anymore. We gave them an identity that makes the competition look like everyone else.",
  //     bgImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1400&h=900&fit=crop&q=80",
  //     clientLogoBase64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIiAvPjwvc3ZnPg==",
  //   },
  //   details: {
  //     client: "HVH Globals",
  //     industry: "Web",
  //     services: ["Web Experience", "Brand Identity", "Digital Strategy"],
  //     startDate: "January 2026",
  //     endDate: "April 2026",
  //     duration: "4 Months",
  //     year: "2026",
  //   },
  //   problemStatement: "HVH looked like every other corporate firm. Not anymore. We gave them an identity that makes the competition look like everyone else. We ripped this down to the studs, interrogated their business model, and built a digital weapon.",
  //   gallery: {
  //     top: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     left: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  //     center: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
  //     right: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  //     bottomLeft: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottomRight: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottom: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=800&q=80",
  //   },
  //   execution: [
  //     {
  //       weeks: "Week 1-2",
  //       title: "Research & Planning",
  //       description: "Deep dive into the landscape, audience mapping, and architecting the core user journey.",
  //       tags: ["Strategy", "UX Design"]
  //     },
  //     {
  //       weeks: "Week 3-5",
  //       title: "Design & Development",
  //       description: "Translating insights into high-fidelity components. Implementing the core features.",
  //       tags: ["Web", "Design", "Dev"]
  //     },
  //     {
  //       weeks: "Week 6-12",
  //       title: "Execution & Optimization",
  //       description: "Scaling the platform, running performance audits, and executing the cross-channel growth campaign.",
  //       tags: ["Growth", "SEO", "Performance"]
  //     }
  //   ],
  //   strategy: [
  //     {
  //       num: "01",
  //       title: ["Research", "& Insights"],
  //       color: "#7c3aed",
  //       items: [
  //         "Competitor landscape mapping",
  //         "Audience behavior & intent signals",
  //         "Platform-specific performance data",
  //         "Content gap & opportunity analysis",
  //       ],
  //     },
  //     {
  //       num: "02",
  //       title: ["Strategic", "Direction"],
  //       color: "#f97316",
  //       items: [
  //         "Full-funnel strategy architecture",
  //         "Content direction & messaging pillars",
  //         "UX philosophy & journey mapping",
  //         "Brand positioning & differentiation",
  //       ],
  //     },
  //     {
  //       num: "03",
  //       title: ["Execution", "Plan"],
  //       color: "#10b981",
  //       items: [
  //         "Technology stack selection",
  //         "Sprint-based delivery roadmap",
  //         "KPI framework & measurement plan",
  //         "Risk mitigation & iteration loops",
  //       ],
  //     }
  //   ],
  //   impact: [
  //     { label: "Conversion Rate", value: "3.2", suffix: "x", description: "Increase in qualified leads within the first 90 days of launch." },
  //     { label: "User Retention", value: "45", suffix: "%", description: "Improvement in 30-day retention due to optimized UX." },
  //     { label: "Performance", value: "99", prefix: "", description: "Lighthouse performance score, up from 42." }
  //   ],
  //   relatedProjects: [
  //     {
  //       title: "Global Peace Ministry",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/global-peace-ministry"
  //     },
  //     {
  //       title: "Ecotellus",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/ecotellus"
  //     }
  //   ],
  //   cta: {
  //     title: "Ready to scale?",
  //     subtitle: "Let's build something exceptional together.",
  //     buttonText: "Start a project",
  //     link: "/contact"
  //   }
  // },

  // "eyve": {
  //   id: 6,
  //   slug: "eyve",
  //   category: "Social Media",
  //   tags: ["Social Media", "Web App"],
  //   year: "2026",
  //   image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&h=900&fit=crop&q=80",
  //   summary: "Beauty eCommerce that actually converts. Deep UX research, a premium shopping experience, and a checkout flow that doesn't make people abandon their cart.",
  //   accent: "rgba(180,100,255,0.15)",
  //   hero: {
  //     tagLine: "Web Development and SEO",
  //     titleFirstPart: "EYVE",
  //     titleSecondPart: "",
  //     summary: "Beauty eCommerce that actually converts. Deep UX research, a premium shopping experience, and a checkout flow that doesn't make people abandon their cart.",
  //     bgImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&h=900&fit=crop&q=80",
  //     clientLogoBase64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIiAvPjwvc3ZnPg==",
  //   },
  //   details: {
  //     client: "EYVE",
  //     industry: "Social Media",
  //     services: ["eCommerce", "Social Media", "UI/UX Design"],
  //     startDate: "January 2026",
  //     endDate: "April 2026",
  //     duration: "4 Months",
  //     year: "2026",
  //   },
  //   problemStatement: "Beauty eCommerce that actually converts. Deep UX research, a premium shopping experience, and a checkout flow that doesn't make people abandon their cart. We ripped this down to the studs, interrogated their business model, and built a digital weapon.",
  //   gallery: {
  //     top: "/portfolio/eyve-smm/1.webp",
  //     left: "/portfolio/eyve-smm/2.webp",
  //     center: "/portfolio/eyve-smm/3.webp",
  //     right: "/portfolio/eyve-smm/4.webp",
  //     bottomLeft: "/portfolio/eyve-smm/5.webp",
  //     bottomRight: "/portfolio/eyve-smm/6.webp",
  //     bottom: "/portfolio/eyve-smm/7.webp",
  //   },
  //   execution: [
  //     {
  //       weeks: "Week 1-2",
  //       title: "Research & Planning",
  //       description: "Deep dive into the landscape, audience mapping, and architecting the core user journey.",
  //       tags: ["Strategy", "UX Design"]
  //     },
  //     {
  //       weeks: "Week 3-5",
  //       title: "Design & Development",
  //       description: "Translating insights into high-fidelity components. Implementing the core features.",
  //       tags: ["Web", "Design", "Dev"]
  //     },
  //     {
  //       weeks: "Week 6-12",
  //       title: "Execution & Optimization",
  //       description: "Scaling the platform, running performance audits, and executing the cross-channel growth campaign.",
  //       tags: ["Growth", "SEO", "Performance"]
  //     }
  //   ],
  //   strategy: [
  //     {
  //       num: "01",
  //       title: ["Research", "& Insights"],
  //       color: "#7c3aed",
  //       items: [
  //         "Competitor landscape mapping",
  //         "Audience behavior & intent signals",
  //         "Platform-specific performance data",
  //         "Content gap & opportunity analysis",
  //       ],
  //     },
  //     {
  //       num: "02",
  //       title: ["Strategic", "Direction"],
  //       color: "#f97316",
  //       items: [
  //         "Full-funnel strategy architecture",
  //         "Content direction & messaging pillars",
  //         "UX philosophy & journey mapping",
  //         "Brand positioning & differentiation",
  //       ],
  //     },
  //     {
  //       num: "03",
  //       title: ["Execution", "Plan"],
  //       color: "#10b981",
  //       items: [
  //         "Technology stack selection",
  //         "Sprint-based delivery roadmap",
  //         "KPI framework & measurement plan",
  //         "Risk mitigation & iteration loops",
  //       ],
  //     }
  //   ],
  //   impact: [
  //     { label: "Conversion Rate", value: "3.2", suffix: "x", description: "Increase in qualified leads within the first 90 days of launch." },
  //     { label: "User Retention", value: "45", suffix: "%", description: "Improvement in 30-day retention due to optimized UX." },
  //     { label: "Performance", value: "99", prefix: "", description: "Lighthouse performance score, up from 42." }
  //   ],
  //   relatedProjects: [
  //     {
  //       title: "Global Peace Ministry",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/global-peace-ministry"
  //     },
  //     {
  //       title: "Ecotellus",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/ecotellus"
  //     }
  //   ],
  //   cta: {
  //     title: "Ready to scale?",
  //     subtitle: "Let's build something exceptional together.",
  //     buttonText: "Start a project",
  //     link: "/contact"
  //   }
  // },

  // "stt-hair": {
  //   id: 7,
  //   slug: "stt-hair",
  //   category: "SEO",
  //   tags: ["SEO", "Growth Strategy"],
  //   year: "2026",
  //   image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1400&h=900&fit=crop&q=80",
  //   summary: "Their website wasn't broken — it was invisible. We fixed that. Organic bookings tripled in 6 months.",
  //   accent: "rgba(255,150,200,0.15)",
  //   hero: {
  //     tagLine: "Web Development and SEO",
  //     titleFirstPart: "STT",
  //     titleSecondPart: "Hair",
  //     summary: "Their website wasn't broken — it was invisible. We fixed that. Organic bookings tripled in 6 months.",
  //     bgImage: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1400&h=900&fit=crop&q=80",
  //     clientLogoBase64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIiAvPjwvc3ZnPg==",
  //   },
  //   details: {
  //     client: "STT Hair",
  //     industry: "SEO",
  //     services: ["Technical SEO", "Content Strategy", "Local SEO"],
  //     startDate: "January 2026",
  //     endDate: "April 2026",
  //     duration: "4 Months",
  //     year: "2026",
  //   },
  //   problemStatement: "Their website wasn't broken — it was invisible. We fixed that. Organic bookings tripled in 6 months. We ripped this down to the studs, interrogated their business model, and built a digital weapon.",
  //   gallery: {
  //     top: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     left: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  //     center: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
  //     right: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  //     bottomLeft: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottomRight: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottom: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=800&q=80",
  //   },
  //   execution: [
  //     {
  //       weeks: "Week 1-2",
  //       title: "Research & Planning",
  //       description: "Deep dive into the landscape, audience mapping, and architecting the core user journey.",
  //       tags: ["Strategy", "UX Design"]
  //     },
  //     {
  //       weeks: "Week 3-5",
  //       title: "Design & Development",
  //       description: "Translating insights into high-fidelity components. Implementing the core features.",
  //       tags: ["Web", "Design", "Dev"]
  //     },
  //     {
  //       weeks: "Week 6-12",
  //       title: "Execution & Optimization",
  //       description: "Scaling the platform, running performance audits, and executing the cross-channel growth campaign.",
  //       tags: ["Growth", "SEO", "Performance"]
  //     }
  //   ],
  //   strategy: [
  //     {
  //       num: "01",
  //       title: ["Research", "& Insights"],
  //       color: "#7c3aed",
  //       items: [
  //         "Competitor landscape mapping",
  //         "Audience behavior & intent signals",
  //         "Platform-specific performance data",
  //         "Content gap & opportunity analysis",
  //       ],
  //     },
  //     {
  //       num: "02",
  //       title: ["Strategic", "Direction"],
  //       color: "#f97316",
  //       items: [
  //         "Full-funnel strategy architecture",
  //         "Content direction & messaging pillars",
  //         "UX philosophy & journey mapping",
  //         "Brand positioning & differentiation",
  //       ],
  //     },
  //     {
  //       num: "03",
  //       title: ["Execution", "Plan"],
  //       color: "#10b981",
  //       items: [
  //         "Technology stack selection",
  //         "Sprint-based delivery roadmap",
  //         "KPI framework & measurement plan",
  //         "Risk mitigation & iteration loops",
  //       ],
  //     }
  //   ],
  //   impact: [
  //     { label: "Conversion Rate", value: "3.2", suffix: "x", description: "Increase in qualified leads within the first 90 days of launch." },
  //     { label: "User Retention", value: "45", suffix: "%", description: "Improvement in 30-day retention due to optimized UX." },
  //     { label: "Performance", value: "99", prefix: "", description: "Lighthouse performance score, up from 42." }
  //   ],
  //   relatedProjects: [
  //     {
  //       title: "Global Peace Ministry",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/global-peace-ministry"
  //     },
  //     {
  //       title: "Ecotellus",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/ecotellus"
  //     }
  //   ],
  //   cta: {
  //     title: "Ready to scale?",
  //     subtitle: "Let's build something exceptional together.",
  //     buttonText: "Start a project",
  //     link: "/contact"
  //   }
  // },

  // "xavion": {
  //   id: 8,
  //   slug: "xavion",
  //   category: "SEO",
  //   tags: ["Technical SEO", "Growth"],
  //   year: "2026",
  //   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=900&fit=crop&q=80",
  //   summary: "Xavion had a great product buried on page 3. We brought it to the surface with technical SEO that actually moved the needle.",
  //   accent: "rgba(100,200,255,0.15)",
  //   hero: {
  //     tagLine: "Web Development and SEO",
  //     titleFirstPart: "Xavion",
  //     titleSecondPart: "",
  //     summary: "Xavion had a great product buried on page 3. We brought it to the surface with technical SEO that actually moved the needle.",
  //     bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=900&fit=crop&q=80",
  //     clientLogoBase64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIiAvPjwvc3ZnPg==",
  //   },
  //   details: {
  //     client: "Xavion",
  //     industry: "SEO",
  //     services: ["Technical SEO", "Content Strategy", "Performance"],
  //     startDate: "January 2026",
  //     endDate: "April 2026",
  //     duration: "4 Months",
  //     year: "2026",
  //   },
  //   problemStatement: "Xavion had a great product buried on page 3. We brought it to the surface with technical SEO that actually moved the needle. We ripped this down to the studs, interrogated their business model, and built a digital weapon.",
  //   gallery: {
  //     top: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     left: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  //     center: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
  //     right: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  //     bottomLeft: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottomRight: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottom: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=800&q=80",
  //   },
  //   execution: [
  //     {
  //       weeks: "Week 1-2",
  //       title: "Research & Planning",
  //       description: "Deep dive into the landscape, audience mapping, and architecting the core user journey.",
  //       tags: ["Strategy", "UX Design"]
  //     },
  //     {
  //       weeks: "Week 3-5",
  //       title: "Design & Development",
  //       description: "Translating insights into high-fidelity components. Implementing the core features.",
  //       tags: ["Web", "Design", "Dev"]
  //     },
  //     {
  //       weeks: "Week 6-12",
  //       title: "Execution & Optimization",
  //       description: "Scaling the platform, running performance audits, and executing the cross-channel growth campaign.",
  //       tags: ["Growth", "SEO", "Performance"]
  //     }
  //   ],
  //   strategy: [
  //     {
  //       num: "01",
  //       title: ["Research", "& Insights"],
  //       color: "#7c3aed",
  //       items: [
  //         "Competitor landscape mapping",
  //         "Audience behavior & intent signals",
  //         "Platform-specific performance data",
  //         "Content gap & opportunity analysis",
  //       ],
  //     },
  //     {
  //       num: "02",
  //       title: ["Strategic", "Direction"],
  //       color: "#f97316",
  //       items: [
  //         "Full-funnel strategy architecture",
  //         "Content direction & messaging pillars",
  //         "UX philosophy & journey mapping",
  //         "Brand positioning & differentiation",
  //       ],
  //     },
  //     {
  //       num: "03",
  //       title: ["Execution", "Plan"],
  //       color: "#10b981",
  //       items: [
  //         "Technology stack selection",
  //         "Sprint-based delivery roadmap",
  //         "KPI framework & measurement plan",
  //         "Risk mitigation & iteration loops",
  //       ],
  //     }
  //   ],
  //   impact: [
  //     { label: "Conversion Rate", value: "3.2", suffix: "x", description: "Increase in qualified leads within the first 90 days of launch." },
  //     { label: "User Retention", value: "45", suffix: "%", description: "Improvement in 30-day retention due to optimized UX." },
  //     { label: "Performance", value: "99", prefix: "", description: "Lighthouse performance score, up from 42." }
  //   ],
  //   relatedProjects: [
  //     {
  //       title: "Global Peace Ministry",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/global-peace-ministry"
  //     },
  //     {
  //       title: "Ecotellus",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/ecotellus"
  //     }
  //   ],
  //   cta: {
  //     title: "Ready to scale?",
  //     subtitle: "Let's build something exceptional together.",
  //     buttonText: "Start a project",
  //     link: "/contact"
  //   }
  // },

  // "rajlaxmi": {
  //   id: 9,
  //   slug: "rajlaxmi",
  //   category: "Social Media",
  //   tags: ["Social Media", "Content Strategy"],
  //   year: "2026",
  //   image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1400&h=900&fit=crop&q=80",
  //   summary: "From 1.2% to 11.4% engagement in 90 days. Loyal customers finally given a brand voice worth following.",
  //   accent: "rgba(255,100,200,0.15)",
  //   hero: {
  //     tagLine: "Web Development and SEO",
  //     titleFirstPart: "Rajlaxmi",
  //     titleSecondPart: "",
  //     summary: "From 1.2% to 11.4% engagement in 90 days. Loyal customers finally given a brand voice worth following.",
  //     bgImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1400&h=900&fit=crop&q=80",
  //     clientLogoBase64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIiAvPjwvc3ZnPg==",
  //   },
  //   details: {
  //     client: "Rajlaxmi",
  //     industry: "Social Media",
  //     services: ["Social Media Strategy", "Content Creation", "Community Management"],
  //     startDate: "January 2026",
  //     endDate: "April 2026",
  //     duration: "4 Months",
  //     year: "2026",
  //   },
  //   problemStatement: "From 1.2% to 11.4% engagement in 90 days. Loyal customers finally given a brand voice worth following. We ripped this down to the studs, interrogated their business model, and built a digital weapon.",
  //   gallery: {
  //     top: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     left: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  //     center: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
  //     right: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  //     bottomLeft: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottomRight: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottom: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=800&q=80",
  //   },
  //   execution: [
  //     {
  //       weeks: "Week 1-2",
  //       title: "Research & Planning",
  //       description: "Deep dive into the landscape, audience mapping, and architecting the core user journey.",
  //       tags: ["Strategy", "UX Design"]
  //     },
  //     {
  //       weeks: "Week 3-5",
  //       title: "Design & Development",
  //       description: "Translating insights into high-fidelity components. Implementing the core features.",
  //       tags: ["Web", "Design", "Dev"]
  //     },
  //     {
  //       weeks: "Week 6-12",
  //       title: "Execution & Optimization",
  //       description: "Scaling the platform, running performance audits, and executing the cross-channel growth campaign.",
  //       tags: ["Growth", "SEO", "Performance"]
  //     }
  //   ],
  //   strategy: [
  //     {
  //       num: "01",
  //       title: ["Research", "& Insights"],
  //       color: "#7c3aed",
  //       items: [
  //         "Competitor landscape mapping",
  //         "Audience behavior & intent signals",
  //         "Platform-specific performance data",
  //         "Content gap & opportunity analysis",
  //       ],
  //     },
  //     {
  //       num: "02",
  //       title: ["Strategic", "Direction"],
  //       color: "#f97316",
  //       items: [
  //         "Full-funnel strategy architecture",
  //         "Content direction & messaging pillars",
  //         "UX philosophy & journey mapping",
  //         "Brand positioning & differentiation",
  //       ],
  //     },
  //     {
  //       num: "03",
  //       title: ["Execution", "Plan"],
  //       color: "#10b981",
  //       items: [
  //         "Technology stack selection",
  //         "Sprint-based delivery roadmap",
  //         "KPI framework & measurement plan",
  //         "Risk mitigation & iteration loops",
  //       ],
  //     }
  //   ],
  //   impact: [
  //     { label: "Conversion Rate", value: "3.2", suffix: "x", description: "Increase in qualified leads within the first 90 days of launch." },
  //     { label: "User Retention", value: "45", suffix: "%", description: "Improvement in 30-day retention due to optimized UX." },
  //     { label: "Performance", value: "99", prefix: "", description: "Lighthouse performance score, up from 42." }
  //   ],
  //   relatedProjects: [
  //     {
  //       title: "Global Peace Ministry",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/global-peace-ministry"
  //     },
  //     {
  //       title: "Ecotellus",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/ecotellus"
  //     }
  //   ],
  //   cta: {
  //     title: "Ready to scale?",
  //     subtitle: "Let's build something exceptional together.",
  //     buttonText: "Start a project",
  //     link: "/contact"
  //   }
  // },

  // "ecoplanet-motors": {
  //   id: 10,
  //   slug: "ecoplanet-motors",
  //   category: "Performance Marketing",
  //   tags: ["Social Media", "Performance Marketing"],
  //   year: "2026",
  //   image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1400&h=900&fit=crop&q=80",
  //   summary: "3,200 qualified leads. Presale target exceeded by 180%. That's what a synchronized launch campaign actually looks like.",
  //   accent: "rgba(100,255,100,0.15)",
  //   hero: {
  //     tagLine: "Web Development and SEO",
  //     titleFirstPart: "Ecoplanet",
  //     titleSecondPart: "Motors",
  //     summary: "3,200 qualified leads. Presale target exceeded by 180%. That's what a synchronized launch campaign actually looks like.",
  //     bgImage: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1400&h=900&fit=crop&q=80",
  //     clientLogoBase64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIiAvPjwvc3ZnPg==",
  //   },
  //   details: {
  //     client: "Ecoplanet Motors",
  //     industry: "Performance Marketing",
  //     services: ["Performance Ads", "Social Media", "Lead Gen"],
  //     startDate: "January 2026",
  //     endDate: "April 2026",
  //     duration: "4 Months",
  //     year: "2026",
  //   },
  //   problemStatement: "3,200 qualified leads. Presale target exceeded by 180%. That's what a synchronized launch campaign actually looks like. We ripped this down to the studs, interrogated their business model, and built a digital weapon.",
  //   gallery: {
  //     top: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     left: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  //     center: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
  //     right: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  //     bottomLeft: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottomRight: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottom: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=800&q=80",
  //   },
  //   execution: [
  //     {
  //       weeks: "Week 1-2",
  //       title: "Research & Planning",
  //       description: "Deep dive into the landscape, audience mapping, and architecting the core user journey.",
  //       tags: ["Strategy", "UX Design"]
  //     },
  //     {
  //       weeks: "Week 3-5",
  //       title: "Design & Development",
  //       description: "Translating insights into high-fidelity components. Implementing the core features.",
  //       tags: ["Web", "Design", "Dev"]
  //     },
  //     {
  //       weeks: "Week 6-12",
  //       title: "Execution & Optimization",
  //       description: "Scaling the platform, running performance audits, and executing the cross-channel growth campaign.",
  //       tags: ["Growth", "SEO", "Performance"]
  //     }
  //   ],
  //   strategy: [
  //     {
  //       num: "01",
  //       title: ["Research", "& Insights"],
  //       color: "#7c3aed",
  //       items: [
  //         "Competitor landscape mapping",
  //         "Audience behavior & intent signals",
  //         "Platform-specific performance data",
  //         "Content gap & opportunity analysis",
  //       ],
  //     },
  //     {
  //       num: "02",
  //       title: ["Strategic", "Direction"],
  //       color: "#f97316",
  //       items: [
  //         "Full-funnel strategy architecture",
  //         "Content direction & messaging pillars",
  //         "UX philosophy & journey mapping",
  //         "Brand positioning & differentiation",
  //       ],
  //     },
  //     {
  //       num: "03",
  //       title: ["Execution", "Plan"],
  //       color: "#10b981",
  //       items: [
  //         "Technology stack selection",
  //         "Sprint-based delivery roadmap",
  //         "KPI framework & measurement plan",
  //         "Risk mitigation & iteration loops",
  //       ],
  //     }
  //   ],
  //   impact: [
  //     { label: "Conversion Rate", value: "3.2", suffix: "x", description: "Increase in qualified leads within the first 90 days of launch." },
  //     { label: "User Retention", value: "45", suffix: "%", description: "Improvement in 30-day retention due to optimized UX." },
  //     { label: "Performance", value: "99", prefix: "", description: "Lighthouse performance score, up from 42." }
  //   ],
  //   relatedProjects: [
  //     {
  //       title: "Global Peace Ministry",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/global-peace-ministry"
  //     },
  //     {
  //       title: "Ecotellus",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/ecotellus"
  //     }
  //   ],
  //   cta: {
  //     title: "Ready to scale?",
  //     subtitle: "Let's build something exceptional together.",
  //     buttonText: "Start a project",
  //     link: "/contact"
  //   }
  // },

  // "eminence": {
  //   id: 11,
  //   slug: "eminence",
  //   category: "Social Media",
  //   tags: ["Social Media", "Branding"],
  //   year: "2026",
  //   image: "https://images.unsplash.com/photo-1555529771-835f59bfc50c?w=1400&h=900&fit=crop&q=80",
  //   summary: "Luxury brands earn trust through consistency. We built Eminence a social presence that never breaks character.",
  //   accent: "rgba(200,180,100,0.15)",
  //   hero: {
  //     tagLine: "Web Development and SEO",
  //     titleFirstPart: "Eminence",
  //     titleSecondPart: "",
  //     summary: "Luxury brands earn trust through consistency. We built Eminence a social presence that never breaks character.",
  //     bgImage: "https://images.unsplash.com/photo-1555529771-835f59bfc50c?w=1400&h=900&fit=crop&q=80",
  //     clientLogoBase64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIiAvPjwvc3ZnPg==",
  //   },
  //   details: {
  //     client: "Eminence",
  //     industry: "Social Media",
  //     services: ["Social Media", "Aesthetic Design", "Brand Voice"],
  //     startDate: "January 2026",
  //     endDate: "April 2026",
  //     duration: "4 Months",
  //     year: "2026",
  //   },
  //   problemStatement: "Luxury brands earn trust through consistency. We built Eminence a social presence that never breaks character. We ripped this down to the studs, interrogated their business model, and built a digital weapon.",
  //   gallery: {
  //     top: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     left: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  //     center: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
  //     right: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  //     bottomLeft: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottomRight: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottom: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=800&q=80",
  //   },
  //   execution: [
  //     {
  //       weeks: "Week 1-2",
  //       title: "Research & Planning",
  //       description: "Deep dive into the landscape, audience mapping, and architecting the core user journey.",
  //       tags: ["Strategy", "UX Design"]
  //     },
  //     {
  //       weeks: "Week 3-5",
  //       title: "Design & Development",
  //       description: "Translating insights into high-fidelity components. Implementing the core features.",
  //       tags: ["Web", "Design", "Dev"]
  //     },
  //     {
  //       weeks: "Week 6-12",
  //       title: "Execution & Optimization",
  //       description: "Scaling the platform, running performance audits, and executing the cross-channel growth campaign.",
  //       tags: ["Growth", "SEO", "Performance"]
  //     }
  //   ],
  //   strategy: [
  //     {
  //       num: "01",
  //       title: ["Research", "& Insights"],
  //       color: "#7c3aed",
  //       items: [
  //         "Competitor landscape mapping",
  //         "Audience behavior & intent signals",
  //         "Platform-specific performance data",
  //         "Content gap & opportunity analysis",
  //       ],
  //     },
  //     {
  //       num: "02",
  //       title: ["Strategic", "Direction"],
  //       color: "#f97316",
  //       items: [
  //         "Full-funnel strategy architecture",
  //         "Content direction & messaging pillars",
  //         "UX philosophy & journey mapping",
  //         "Brand positioning & differentiation",
  //       ],
  //     },
  //     {
  //       num: "03",
  //       title: ["Execution", "Plan"],
  //       color: "#10b981",
  //       items: [
  //         "Technology stack selection",
  //         "Sprint-based delivery roadmap",
  //         "KPI framework & measurement plan",
  //         "Risk mitigation & iteration loops",
  //       ],
  //     }
  //   ],
  //   impact: [
  //     { label: "Conversion Rate", value: "3.2", suffix: "x", description: "Increase in qualified leads within the first 90 days of launch." },
  //     { label: "User Retention", value: "45", suffix: "%", description: "Improvement in 30-day retention due to optimized UX." },
  //     { label: "Performance", value: "99", prefix: "", description: "Lighthouse performance score, up from 42." }
  //   ],
  //   relatedProjects: [
  //     {
  //       title: "Global Peace Ministry",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/global-peace-ministry"
  //     },
  //     {
  //       title: "Ecotellus",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/ecotellus"
  //     }
  //   ],
  //   cta: {
  //     title: "Ready to scale?",
  //     subtitle: "Let's build something exceptional together.",
  //     buttonText: "Start a project",
  //     link: "/contact"
  //   }
  // },

  // "monkda": {
  //   id: 12,
  //   slug: "monkda",
  //   category: "Social Media",
  //   tags: ["Social Media", "Content Creation"],
  //   year: "2026",
  //   image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=1400&h=900&fit=crop&q=80",
  //   summary: "Turned a local favorite into a lifestyle brand with 4x reach growth in 60 days. Community-pull over product-push.",
  //   accent: "rgba(100,200,200,0.15)",
  //   hero: {
  //     tagLine: "Web Development and SEO",
  //     titleFirstPart: "Monkda",
  //     titleSecondPart: "",
  //     summary: "Turned a local favorite into a lifestyle brand with 4x reach growth in 60 days. Community-pull over product-push.",
  //     bgImage: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=1400&h=900&fit=crop&q=80",
  //     clientLogoBase64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIiAvPjwvc3ZnPg==",
  //   },
  //   details: {
  //     client: "Monkda",
  //     industry: "Social Media",
  //     services: ["Short-form Video", "Campaign Strategy", "Social Media"],
  //     startDate: "January 2026",
  //     endDate: "April 2026",
  //     duration: "4 Months",
  //     year: "2026",
  //   },
  //   problemStatement: "Turned a local favorite into a lifestyle brand with 4x reach growth in 60 days. Community-pull over product-push. We ripped this down to the studs, interrogated their business model, and built a digital weapon.",
  //   gallery: {
  //     top: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     left: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  //     center: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
  //     right: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  //     bottomLeft: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottomRight: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottom: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=800&q=80",
  //   },
  //   execution: [
  //     {
  //       weeks: "Week 1-2",
  //       title: "Research & Planning",
  //       description: "Deep dive into the landscape, audience mapping, and architecting the core user journey.",
  //       tags: ["Strategy", "UX Design"]
  //     },
  //     {
  //       weeks: "Week 3-5",
  //       title: "Design & Development",
  //       description: "Translating insights into high-fidelity components. Implementing the core features.",
  //       tags: ["Web", "Design", "Dev"]
  //     },
  //     {
  //       weeks: "Week 6-12",
  //       title: "Execution & Optimization",
  //       description: "Scaling the platform, running performance audits, and executing the cross-channel growth campaign.",
  //       tags: ["Growth", "SEO", "Performance"]
  //     }
  //   ],
  //   strategy: [
  //     {
  //       num: "01",
  //       title: ["Research", "& Insights"],
  //       color: "#7c3aed",
  //       items: [
  //         "Competitor landscape mapping",
  //         "Audience behavior & intent signals",
  //         "Platform-specific performance data",
  //         "Content gap & opportunity analysis",
  //       ],
  //     },
  //     {
  //       num: "02",
  //       title: ["Strategic", "Direction"],
  //       color: "#f97316",
  //       items: [
  //         "Full-funnel strategy architecture",
  //         "Content direction & messaging pillars",
  //         "UX philosophy & journey mapping",
  //         "Brand positioning & differentiation",
  //       ],
  //     },
  //     {
  //       num: "03",
  //       title: ["Execution", "Plan"],
  //       color: "#10b981",
  //       items: [
  //         "Technology stack selection",
  //         "Sprint-based delivery roadmap",
  //         "KPI framework & measurement plan",
  //         "Risk mitigation & iteration loops",
  //       ],
  //     }
  //   ],
  //   impact: [
  //     { label: "Conversion Rate", value: "3.2", suffix: "x", description: "Increase in qualified leads within the first 90 days of launch." },
  //     { label: "User Retention", value: "45", suffix: "%", description: "Improvement in 30-day retention due to optimized UX." },
  //     { label: "Performance", value: "99", prefix: "", description: "Lighthouse performance score, up from 42." }
  //   ],
  //   relatedProjects: [
  //     {
  //       title: "Global Peace Ministry",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/global-peace-ministry"
  //     },
  //     {
  //       title: "Ecotellus",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/ecotellus"
  //     }
  //   ],
  //   cta: {
  //     title: "Ready to scale?",
  //     subtitle: "Let's build something exceptional together.",
  //     buttonText: "Start a project",
  //     link: "/contact"
  //   }
  // },

  // "silver-rionest": {
  //   id: 13,
  //   slug: "silver-rionest",
  //   category: "Performance Marketing",
  //   tags: ["Social Media", "Performance Marketing"],
  //   year: "2026",
  //   image: "https://images.unsplash.com/photo-1533575770077-052fa2c609fc?w=1400&h=900&fit=crop&q=80",
  //   summary: "ROAS went from 2.1x to 7.8x in 3 months. Full-funnel done right, from scroll-stop to checkout.",
  //   accent: "rgba(150,150,255,0.15)",
  //   hero: {
  //     tagLine: "Web Development and SEO",
  //     titleFirstPart: "Silver",
  //     titleSecondPart: "Rionest",
  //     summary: "ROAS went from 2.1x to 7.8x in 3 months. Full-funnel done right, from scroll-stop to checkout.",
  //     bgImage: "https://images.unsplash.com/photo-1533575770077-052fa2c609fc?w=1400&h=900&fit=crop&q=80",
  //     clientLogoBase64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIiAvPjwvc3ZnPg==",
  //   },
  //   details: {
  //     client: "Silver Rionest",
  //     industry: "Performance Marketing",
  //     services: ["Retargeting", "Conversion Ads", "Social Strategy"],
  //     startDate: "January 2026",
  //     endDate: "April 2026",
  //     duration: "4 Months",
  //     year: "2026",
  //   },
  //   problemStatement: "ROAS went from 2.1x to 7.8x in 3 months. Full-funnel done right, from scroll-stop to checkout. We ripped this down to the studs, interrogated their business model, and built a digital weapon.",
  //   gallery: {
  //     top: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     left: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  //     center: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
  //     right: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  //     bottomLeft: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottomRight: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottom: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=800&q=80",
  //   },
  //   execution: [
  //     {
  //       weeks: "Week 1-2",
  //       title: "Research & Planning",
  //       description: "Deep dive into the landscape, audience mapping, and architecting the core user journey.",
  //       tags: ["Strategy", "UX Design"]
  //     },
  //     {
  //       weeks: "Week 3-5",
  //       title: "Design & Development",
  //       description: "Translating insights into high-fidelity components. Implementing the core features.",
  //       tags: ["Web", "Design", "Dev"]
  //     },
  //     {
  //       weeks: "Week 6-12",
  //       title: "Execution & Optimization",
  //       description: "Scaling the platform, running performance audits, and executing the cross-channel growth campaign.",
  //       tags: ["Growth", "SEO", "Performance"]
  //     }
  //   ],
  //   strategy: [
  //     {
  //       num: "01",
  //       title: ["Research", "& Insights"],
  //       color: "#7c3aed",
  //       items: [
  //         "Competitor landscape mapping",
  //         "Audience behavior & intent signals",
  //         "Platform-specific performance data",
  //         "Content gap & opportunity analysis",
  //       ],
  //     },
  //     {
  //       num: "02",
  //       title: ["Strategic", "Direction"],
  //       color: "#f97316",
  //       items: [
  //         "Full-funnel strategy architecture",
  //         "Content direction & messaging pillars",
  //         "UX philosophy & journey mapping",
  //         "Brand positioning & differentiation",
  //       ],
  //     },
  //     {
  //       num: "03",
  //       title: ["Execution", "Plan"],
  //       color: "#10b981",
  //       items: [
  //         "Technology stack selection",
  //         "Sprint-based delivery roadmap",
  //         "KPI framework & measurement plan",
  //         "Risk mitigation & iteration loops",
  //       ],
  //     }
  //   ],
  //   impact: [
  //     { label: "Conversion Rate", value: "3.2", suffix: "x", description: "Increase in qualified leads within the first 90 days of launch." },
  //     { label: "User Retention", value: "45", suffix: "%", description: "Improvement in 30-day retention due to optimized UX." },
  //     { label: "Performance", value: "99", prefix: "", description: "Lighthouse performance score, up from 42." }
  //   ],
  //   relatedProjects: [
  //     {
  //       title: "Global Peace Ministry",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/global-peace-ministry"
  //     },
  //     {
  //       title: "Ecotellus",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/ecotellus"
  //     }
  //   ],
  //   cta: {
  //     title: "Ready to scale?",
  //     subtitle: "Let's build something exceptional together.",
  //     buttonText: "Start a project",
  //     link: "/contact"
  //   }
  // },

  // "360-eye": {
  //   id: 14,
  //   slug: "360-eye",
  //   category: "Social Media",
  //   tags: ["Social Media", "Healthcare"],
  //   year: "2026",
  //   image: "https://images.unsplash.com/photo-1550051287-797746535565?w=1400&h=900&fit=crop&q=80",
  //   summary: "Medical content that actually builds trust. Education-first strategy that made complex services feel accessible and shareable.",
  //   accent: "rgba(100,150,200,0.15)",
  //   hero: {
  //     tagLine: "Web Development and SEO",
  //     titleFirstPart: "360",
  //     titleSecondPart: "Eye",
  //     summary: "Medical content that actually builds trust. Education-first strategy that made complex services feel accessible and shareable.",
  //     bgImage: "https://images.unsplash.com/photo-1550051287-797746535565?w=1400&h=900&fit=crop&q=80",
  //     clientLogoBase64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIiAvPjwvc3ZnPg==",
  //   },
  //   details: {
  //     client: "360 Eye",
  //     industry: "Social Media",
  //     services: ["Educational Content", "Social Media", "Audience Engagement"],
  //     startDate: "January 2026",
  //     endDate: "April 2026",
  //     duration: "4 Months",
  //     year: "2026",
  //   },
  //   problemStatement: "Medical content that actually builds trust. Education-first strategy that made complex services feel accessible and shareable. We ripped this down to the studs, interrogated their business model, and built a digital weapon.",
  //   gallery: {
  //     top: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     left: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  //     center: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
  //     right: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  //     bottomLeft: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottomRight: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottom: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=800&q=80",
  //   },
  //   execution: [
  //     {
  //       weeks: "Week 1-2",
  //       title: "Research & Planning",
  //       description: "Deep dive into the landscape, audience mapping, and architecting the core user journey.",
  //       tags: ["Strategy", "UX Design"]
  //     },
  //     {
  //       weeks: "Week 3-5",
  //       title: "Design & Development",
  //       description: "Translating insights into high-fidelity components. Implementing the core features.",
  //       tags: ["Web", "Design", "Dev"]
  //     },
  //     {
  //       weeks: "Week 6-12",
  //       title: "Execution & Optimization",
  //       description: "Scaling the platform, running performance audits, and executing the cross-channel growth campaign.",
  //       tags: ["Growth", "SEO", "Performance"]
  //     }
  //   ],
  //   strategy: [
  //     {
  //       num: "01",
  //       title: ["Research", "& Insights"],
  //       color: "#7c3aed",
  //       items: [
  //         "Competitor landscape mapping",
  //         "Audience behavior & intent signals",
  //         "Platform-specific performance data",
  //         "Content gap & opportunity analysis",
  //       ],
  //     },
  //     {
  //       num: "02",
  //       title: ["Strategic", "Direction"],
  //       color: "#f97316",
  //       items: [
  //         "Full-funnel strategy architecture",
  //         "Content direction & messaging pillars",
  //         "UX philosophy & journey mapping",
  //         "Brand positioning & differentiation",
  //       ],
  //     },
  //     {
  //       num: "03",
  //       title: ["Execution", "Plan"],
  //       color: "#10b981",
  //       items: [
  //         "Technology stack selection",
  //         "Sprint-based delivery roadmap",
  //         "KPI framework & measurement plan",
  //         "Risk mitigation & iteration loops",
  //       ],
  //     }
  //   ],
  //   impact: [
  //     { label: "Conversion Rate", value: "3.2", suffix: "x", description: "Increase in qualified leads within the first 90 days of launch." },
  //     { label: "User Retention", value: "45", suffix: "%", description: "Improvement in 30-day retention due to optimized UX." },
  //     { label: "Performance", value: "99", prefix: "", description: "Lighthouse performance score, up from 42." }
  //   ],
  //   relatedProjects: [
  //     {
  //       title: "Global Peace Ministry",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/global-peace-ministry"
  //     },
  //     {
  //       title: "Ecotellus",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/ecotellus"
  //     }
  //   ],
  //   cta: {
  //     title: "Ready to scale?",
  //     subtitle: "Let's build something exceptional together.",
  //     buttonText: "Start a project",
  //     link: "/contact"
  //   }
  // },

  // "daiki-digital": {
  //   id: 15,
  //   slug: "daiki-digital",
  //   category: "Branding",
  //   tags: ["Branding", "Identity System"],
  //   year: "2026",
  //   image: "https://images.unsplash.com/photo-1557683311-eac922347aa1?w=1400&h=900&fit=crop&q=80",
  //   summary: "Daiki Digital's old brand said 'we build websites.' Their new one says 'we lead the industry.' That's what a real rebrand does.",
  //   accent: "rgba(255,120,100,0.15)",
  //   hero: {
  //     tagLine: "Web Development and SEO",
  //     titleFirstPart: "Daiki",
  //     titleSecondPart: "Digital",
  //     summary: "Daiki Digital's old brand said 'we build websites.' Their new one says 'we lead the industry.' That's what a real rebrand does.",
  //     bgImage: "https://images.unsplash.com/photo-1557683311-eac922347aa1?w=1400&h=900&fit=crop&q=80",
  //     clientLogoBase64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIiAvPjwvc3ZnPg==",
  //   },
  //   details: {
  //     client: "Daiki Digital",
  //     industry: "Branding",
  //     services: ["Logo Design", "Visual Identity", "Brand Strategy"],
  //     startDate: "January 2026",
  //     endDate: "April 2026",
  //     duration: "4 Months",
  //     year: "2026",
  //   },
  //   problemStatement: "Daiki Digital's old brand said 'we build websites.' Their new one says 'we lead the industry.' That's what a real rebrand does. We ripped this down to the studs, interrogated their business model, and built a digital weapon.",
  //   gallery: {
  //     top: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     left: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  //     center: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
  //     right: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  //     bottomLeft: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottomRight: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottom: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=800&q=80",
  //   },
  //   execution: [
  //     {
  //       weeks: "Week 1-2",
  //       title: "Research & Planning",
  //       description: "Deep dive into the landscape, audience mapping, and architecting the core user journey.",
  //       tags: ["Strategy", "UX Design"]
  //     },
  //     {
  //       weeks: "Week 3-5",
  //       title: "Design & Development",
  //       description: "Translating insights into high-fidelity components. Implementing the core features.",
  //       tags: ["Web", "Design", "Dev"]
  //     },
  //     {
  //       weeks: "Week 6-12",
  //       title: "Execution & Optimization",
  //       description: "Scaling the platform, running performance audits, and executing the cross-channel growth campaign.",
  //       tags: ["Growth", "SEO", "Performance"]
  //     }
  //   ],
  //   strategy: [
  //     {
  //       num: "01",
  //       title: ["Research", "& Insights"],
  //       color: "#7c3aed",
  //       items: [
  //         "Competitor landscape mapping",
  //         "Audience behavior & intent signals",
  //         "Platform-specific performance data",
  //         "Content gap & opportunity analysis",
  //       ],
  //     },
  //     {
  //       num: "02",
  //       title: ["Strategic", "Direction"],
  //       color: "#f97316",
  //       items: [
  //         "Full-funnel strategy architecture",
  //         "Content direction & messaging pillars",
  //         "UX philosophy & journey mapping",
  //         "Brand positioning & differentiation",
  //       ],
  //     },
  //     {
  //       num: "03",
  //       title: ["Execution", "Plan"],
  //       color: "#10b981",
  //       items: [
  //         "Technology stack selection",
  //         "Sprint-based delivery roadmap",
  //         "KPI framework & measurement plan",
  //         "Risk mitigation & iteration loops",
  //       ],
  //     }
  //   ],
  //   impact: [
  //     { label: "Conversion Rate", value: "3.2", suffix: "x", description: "Increase in qualified leads within the first 90 days of launch." },
  //     { label: "User Retention", value: "45", suffix: "%", description: "Improvement in 30-day retention due to optimized UX." },
  //     { label: "Performance", value: "99", prefix: "", description: "Lighthouse performance score, up from 42." }
  //   ],
  //   relatedProjects: [
  //     {
  //       title: "Global Peace Ministry",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/global-peace-ministry"
  //     },
  //     {
  //       title: "Ecotellus",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/ecotellus"
  //     }
  //   ],
  //   cta: {
  //     title: "Ready to scale?",
  //     subtitle: "Let's build something exceptional together.",
  //     buttonText: "Start a project",
  //     link: "/contact"
  //   }
  // },

  // "vachhani-foods": {
  //   id: 16,
  //   slug: "vachhani-foods",
  //   category: "Branding",
  //   tags: ["Branding", "Packaging Design"],
  //   year: "2026",
  //   image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=1400&h=900&fit=crop&q=80",
  //   summary: "Stop-the-scroll packaging on a crowded shelf. Vachhani Foods' rebrand made competitors look like house brands.",
  //   accent: "rgba(255,200,100,0.15)",
  //   hero: {
  //     tagLine: "Web Development and SEO",
  //     titleFirstPart: "Vachhani",
  //     titleSecondPart: "Foods",
  //     summary: "Stop-the-scroll packaging on a crowded shelf. Vachhani Foods' rebrand made competitors look like house brands.",
  //     bgImage: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=1400&h=900&fit=crop&q=80",
  //     clientLogoBase64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIiAvPjwvc3ZnPg==",
  //   },
  //   details: {
  //     client: "Vachhani Foods",
  //     industry: "Branding",
  //     services: ["Packaging Design", "Brand Positioning", "Visual System"],
  //     startDate: "January 2026",
  //     endDate: "April 2026",
  //     duration: "4 Months",
  //     year: "2026",
  //   },
  //   problemStatement: "Stop-the-scroll packaging on a crowded shelf. Vachhani Foods' rebrand made competitors look like house brands. We ripped this down to the studs, interrogated their business model, and built a digital weapon.",
  //   gallery: {
  //     top: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     left: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  //     center: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
  //     right: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  //     bottomLeft: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottomRight: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottom: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=800&q=80",
  //   },
  //   execution: [
  //     {
  //       weeks: "Week 1-2",
  //       title: "Research & Planning",
  //       description: "Deep dive into the landscape, audience mapping, and architecting the core user journey.",
  //       tags: ["Strategy", "UX Design"]
  //     },
  //     {
  //       weeks: "Week 3-5",
  //       title: "Design & Development",
  //       description: "Translating insights into high-fidelity components. Implementing the core features.",
  //       tags: ["Web", "Design", "Dev"]
  //     },
  //     {
  //       weeks: "Week 6-12",
  //       title: "Execution & Optimization",
  //       description: "Scaling the platform, running performance audits, and executing the cross-channel growth campaign.",
  //       tags: ["Growth", "SEO", "Performance"]
  //     }
  //   ],
  //   strategy: [
  //     {
  //       num: "01",
  //       title: ["Research", "& Insights"],
  //       color: "#7c3aed",
  //       items: [
  //         "Competitor landscape mapping",
  //         "Audience behavior & intent signals",
  //         "Platform-specific performance data",
  //         "Content gap & opportunity analysis",
  //       ],
  //     },
  //     {
  //       num: "02",
  //       title: ["Strategic", "Direction"],
  //       color: "#f97316",
  //       items: [
  //         "Full-funnel strategy architecture",
  //         "Content direction & messaging pillars",
  //         "UX philosophy & journey mapping",
  //         "Brand positioning & differentiation",
  //       ],
  //     },
  //     {
  //       num: "03",
  //       title: ["Execution", "Plan"],
  //       color: "#10b981",
  //       items: [
  //         "Technology stack selection",
  //         "Sprint-based delivery roadmap",
  //         "KPI framework & measurement plan",
  //         "Risk mitigation & iteration loops",
  //       ],
  //     }
  //   ],
  //   impact: [
  //     { label: "Conversion Rate", value: "3.2", suffix: "x", description: "Increase in qualified leads within the first 90 days of launch." },
  //     { label: "User Retention", value: "45", suffix: "%", description: "Improvement in 30-day retention due to optimized UX." },
  //     { label: "Performance", value: "99", prefix: "", description: "Lighthouse performance score, up from 42." }
  //   ],
  //   relatedProjects: [
  //     {
  //       title: "Global Peace Ministry",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/global-peace-ministry"
  //     },
  //     {
  //       title: "Ecotellus",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/ecotellus"
  //     }
  //   ],
  //   cta: {
  //     title: "Ready to scale?",
  //     subtitle: "Let's build something exceptional together.",
  //     buttonText: "Start a project",
  //     link: "/contact"
  //   }
  // },

  // "earthy-crafts-17": {
  //   id: 17,
  //   slug: "earthy-crafts-17",
  //   category: "Web",
  //   tags: ["Social Media", "Performance Marketing", "Web Design"],
  //   year: "2026",
  //   image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1400&h=900&fit=crop&q=80",
  //   summary: "Earthy Crafts is a luxury handcrafted decor platform that blends timeless artistry with modern design, showcasing premium marble sculptures and artisan-crafted home decor pieces.",
  //   accent: "rgba(255,180,80,0.15)",
  //   hero: {
  //     tagLine: "Web Development and SEO",
  //     titleFirstPart: "Earthy",
  //     titleSecondPart: "Crafts",
  //     summary: "Earthy Crafts is a luxury handcrafted decor platform that blends timeless artistry with modern design, showcasing premium marble sculptures and artisan-crafted home decor pieces.",
  //     bgImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1400&h=900&fit=crop&q=80",
  //     clientLogoBase64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIiAvPjwvc3ZnPg==",
  //   },
  //   details: {
  //     client: "Earthy Crafts",
  //     industry: "Web",
  //     services: ["Social Strategy", "Web Design", "Performance Ads"],
  //     startDate: "January 2026",
  //     endDate: "April 2026",
  //     duration: "4 Months",
  //     year: "2026",
  //   },
  //   problemStatement: "Earthy Crafts is a luxury handcrafted decor platform that blends timeless artistry with modern design, showcasing premium marble sculptures and artisan-crafted home decor pieces. We ripped this down to the studs, interrogated their business model, and built a digital weapon.",
  //   gallery: {
  //     top: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     left: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  //     center: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
  //     right: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  //     bottomLeft: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottomRight: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottom: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=800&q=80",
  //   },
  //   execution: [
  //     {
  //       weeks: "Week 1-2",
  //       title: "Research & Planning",
  //       description: "Deep dive into the landscape, audience mapping, and architecting the core user journey.",
  //       tags: ["Strategy", "UX Design"]
  //     },
  //     {
  //       weeks: "Week 3-5",
  //       title: "Design & Development",
  //       description: "Translating insights into high-fidelity components. Implementing the core features.",
  //       tags: ["Web", "Design", "Dev"]
  //     },
  //     {
  //       weeks: "Week 6-12",
  //       title: "Execution & Optimization",
  //       description: "Scaling the platform, running performance audits, and executing the cross-channel growth campaign.",
  //       tags: ["Growth", "SEO", "Performance"]
  //     }
  //   ],
  //   strategy: [
  //     {
  //       num: "01",
  //       title: ["Research", "& Insights"],
  //       color: "#7c3aed",
  //       items: [
  //         "Competitor landscape mapping",
  //         "Audience behavior & intent signals",
  //         "Platform-specific performance data",
  //         "Content gap & opportunity analysis",
  //       ],
  //     },
  //     {
  //       num: "02",
  //       title: ["Strategic", "Direction"],
  //       color: "#f97316",
  //       items: [
  //         "Full-funnel strategy architecture",
  //         "Content direction & messaging pillars",
  //         "UX philosophy & journey mapping",
  //         "Brand positioning & differentiation",
  //       ],
  //     },
  //     {
  //       num: "03",
  //       title: ["Execution", "Plan"],
  //       color: "#10b981",
  //       items: [
  //         "Technology stack selection",
  //         "Sprint-based delivery roadmap",
  //         "KPI framework & measurement plan",
  //         "Risk mitigation & iteration loops",
  //       ],
  //     }
  //   ],
  //   impact: [
  //     { label: "Conversion Rate", value: "3.2", suffix: "x", description: "Increase in qualified leads within the first 90 days of launch." },
  //     { label: "User Retention", value: "45", suffix: "%", description: "Improvement in 30-day retention due to optimized UX." },
  //     { label: "Performance", value: "99", prefix: "", description: "Lighthouse performance score, up from 42." }
  //   ],
  //   relatedProjects: [
  //     {
  //       title: "Global Peace Ministry",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/global-peace-ministry"
  //     },
  //     {
  //       title: "Ecotellus",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/ecotellus"
  //     }
  //   ],
  //   cta: {
  //     title: "Ready to scale?",
  //     subtitle: "Let's build something exceptional together.",
  //     buttonText: "Start a project",
  //     link: "/contact"
  //   }
  // },

  // "eyve-18": {
  //   id: 18,
  //   slug: "eyve-18",
  //   category: "Web",
  //   tags: ["Social Media", "Web App"],
  //   year: "2026",
  //   image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&h=900&fit=crop&q=80",
  //   summary: "Designed a premium beauty eCommerce website for EYVE, focused on showcasing skincare and beauty products through a modern, elegant, and conversion-driven shopping experience.",
  //   accent: "rgba(180,100,255,0.15)",
  //   hero: {
  //     tagLine: "Web Development and SEO",
  //     titleFirstPart: "EYVE",
  //     titleSecondPart: "",
  //     summary: "Designed a premium beauty eCommerce website for EYVE, focused on showcasing skincare and beauty products through a modern, elegant, and conversion-driven shopping experience.",
  //     bgImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&h=900&fit=crop&q=80",
  //     clientLogoBase64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIiAvPjwvc3ZnPg==",
  //   },
  //   details: {
  //     client: "EYVE",
  //     industry: "Web",
  //     services: ["eCommerce", "Social Media", "UI/UX Design"],
  //     startDate: "January 2026",
  //     endDate: "April 2026",
  //     duration: "4 Months",
  //     year: "2026",
  //   },
  //   problemStatement: "Designed a premium beauty eCommerce website for EYVE, focused on showcasing skincare and beauty products through a modern, elegant, and conversion-driven shopping experience. We ripped this down to the studs, interrogated their business model, and built a digital weapon.",
  //   gallery: {
  //     top: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     left: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  //     center: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
  //     right: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  //     bottomLeft: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottomRight: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottom: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=800&q=80",
  //   },
  //   execution: [
  //     {
  //       weeks: "Week 1-2",
  //       title: "Research & Planning",
  //       description: "Deep dive into the landscape, audience mapping, and architecting the core user journey.",
  //       tags: ["Strategy", "UX Design"]
  //     },
  //     {
  //       weeks: "Week 3-5",
  //       title: "Design & Development",
  //       description: "Translating insights into high-fidelity components. Implementing the core features.",
  //       tags: ["Web", "Design", "Dev"]
  //     },
  //     {
  //       weeks: "Week 6-12",
  //       title: "Execution & Optimization",
  //       description: "Scaling the platform, running performance audits, and executing the cross-channel growth campaign.",
  //       tags: ["Growth", "SEO", "Performance"]
  //     }
  //   ],
  //   strategy: [
  //     {
  //       num: "01",
  //       title: ["Research", "& Insights"],
  //       color: "#7c3aed",
  //       items: [
  //         "Competitor landscape mapping",
  //         "Audience behavior & intent signals",
  //         "Platform-specific performance data",
  //         "Content gap & opportunity analysis",
  //       ],
  //     },
  //     {
  //       num: "02",
  //       title: ["Strategic", "Direction"],
  //       color: "#f97316",
  //       items: [
  //         "Full-funnel strategy architecture",
  //         "Content direction & messaging pillars",
  //         "UX philosophy & journey mapping",
  //         "Brand positioning & differentiation",
  //       ],
  //     },
  //     {
  //       num: "03",
  //       title: ["Execution", "Plan"],
  //       color: "#10b981",
  //       items: [
  //         "Technology stack selection",
  //         "Sprint-based delivery roadmap",
  //         "KPI framework & measurement plan",
  //         "Risk mitigation & iteration loops",
  //       ],
  //     }
  //   ],
  //   impact: [
  //     { label: "Conversion Rate", value: "3.2", suffix: "x", description: "Increase in qualified leads within the first 90 days of launch." },
  //     { label: "User Retention", value: "45", suffix: "%", description: "Improvement in 30-day retention due to optimized UX." },
  //     { label: "Performance", value: "99", prefix: "", description: "Lighthouse performance score, up from 42." }
  //   ],
  //   relatedProjects: [
  //     {
  //       title: "Global Peace Ministry",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/global-peace-ministry"
  //     },
  //     {
  //       title: "Ecotellus",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/ecotellus"
  //     }
  //   ],
  //   cta: {
  //     title: "Ready to scale?",
  //     subtitle: "Let's build something exceptional together.",
  //     buttonText: "Start a project",
  //     link: "/contact"
  //   }
  // },

  // "earthy-crafts-19": {
  //   id: 19,
  //   slug: "earthy-crafts-19",
  //   category: "Performance Marketing",
  //   tags: ["Social Media", "Performance Marketing", "Web Design"],
  //   year: "2026",
  //   image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1400&h=900&fit=crop&q=80",
  //   summary: "Earthy Crafts is a luxury handcrafted decor platform that blends timeless artistry with modern design, showcasing premium marble sculptures and artisan-crafted home decor pieces.",
  //   accent: "rgba(255,180,80,0.15)",
  //   hero: {
  //     tagLine: "Web Development and SEO",
  //     titleFirstPart: "Earthy",
  //     titleSecondPart: "Crafts",
  //     summary: "Earthy Crafts is a luxury handcrafted decor platform that blends timeless artistry with modern design, showcasing premium marble sculptures and artisan-crafted home decor pieces.",
  //     bgImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1400&h=900&fit=crop&q=80",
  //     clientLogoBase64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIiAvPjwvc3ZnPg==",
  //   },
  //   details: {
  //     client: "Earthy Crafts",
  //     industry: "Performance Marketing",
  //     services: ["Social Strategy", "Web Design", "Performance Ads"],
  //     startDate: "January 2026",
  //     endDate: "April 2026",
  //     duration: "4 Months",
  //     year: "2026",
  //   },
  //   problemStatement: "Earthy Crafts is a luxury handcrafted decor platform that blends timeless artistry with modern design, showcasing premium marble sculptures and artisan-crafted home decor pieces. We ripped this down to the studs, interrogated their business model, and built a digital weapon.",
  //   gallery: {
  //     top: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     left: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  //     center: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
  //     right: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  //     bottomLeft: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottomRight: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottom: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=800&q=80",
  //   },
  //   execution: [
  //     {
  //       weeks: "Week 1-2",
  //       title: "Research & Planning",
  //       description: "Deep dive into the landscape, audience mapping, and architecting the core user journey.",
  //       tags: ["Strategy", "UX Design"]
  //     },
  //     {
  //       weeks: "Week 3-5",
  //       title: "Design & Development",
  //       description: "Translating insights into high-fidelity components. Implementing the core features.",
  //       tags: ["Web", "Design", "Dev"]
  //     },
  //     {
  //       weeks: "Week 6-12",
  //       title: "Execution & Optimization",
  //       description: "Scaling the platform, running performance audits, and executing the cross-channel growth campaign.",
  //       tags: ["Growth", "SEO", "Performance"]
  //     }
  //   ],
  //   strategy: [
  //     {
  //       num: "01",
  //       title: ["Research", "& Insights"],
  //       color: "#7c3aed",
  //       items: [
  //         "Competitor landscape mapping",
  //         "Audience behavior & intent signals",
  //         "Platform-specific performance data",
  //         "Content gap & opportunity analysis",
  //       ],
  //     },
  //     {
  //       num: "02",
  //       title: ["Strategic", "Direction"],
  //       color: "#f97316",
  //       items: [
  //         "Full-funnel strategy architecture",
  //         "Content direction & messaging pillars",
  //         "UX philosophy & journey mapping",
  //         "Brand positioning & differentiation",
  //       ],
  //     },
  //     {
  //       num: "03",
  //       title: ["Execution", "Plan"],
  //       color: "#10b981",
  //       items: [
  //         "Technology stack selection",
  //         "Sprint-based delivery roadmap",
  //         "KPI framework & measurement plan",
  //         "Risk mitigation & iteration loops",
  //       ],
  //     }
  //   ],
  //   impact: [
  //     { label: "Conversion Rate", value: "3.2", suffix: "x", description: "Increase in qualified leads within the first 90 days of launch." },
  //     { label: "User Retention", value: "45", suffix: "%", description: "Improvement in 30-day retention due to optimized UX." },
  //     { label: "Performance", value: "99", prefix: "", description: "Lighthouse performance score, up from 42." }
  //   ],
  //   relatedProjects: [
  //     {
  //       title: "Global Peace Ministry",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/global-peace-ministry"
  //     },
  //     {
  //       title: "Ecotellus",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/ecotellus"
  //     }
  //   ],
  //   cta: {
  //     title: "Ready to scale?",
  //     subtitle: "Let's build something exceptional together.",
  //     buttonText: "Start a project",
  //     link: "/contact"
  //   }
  // },

  // "ecoplanet-motors-20": {
  //   id: 20,
  //   slug: "ecoplanet-motors-20",
  //   category: "Social Media",
  //   tags: ["Social Media", "Performance Marketing"],
  //   year: "2026",
  //   image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1400&h=900&fit=crop&q=80",
  //   summary: "Drove sales and brand awareness for Ecoplanet motors through a combined approach of targeted performance marketing and dynamic social media engagement.",
  //   accent: "rgba(100,255,100,0.15)",
  //   hero: {
  //     tagLine: "Web Development and SEO",
  //     titleFirstPart: "Ecoplanet",
  //     titleSecondPart: "Motors",
  //     summary: "Drove sales and brand awareness for Ecoplanet motors through a combined approach of targeted performance marketing and dynamic social media engagement.",
  //     bgImage: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1400&h=900&fit=crop&q=80",
  //     clientLogoBase64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIiAvPjwvc3ZnPg==",
  //   },
  //   details: {
  //     client: "Ecoplanet Motors",
  //     industry: "Social Media",
  //     services: ["Performance Ads", "Social Media", "Lead Gen"],
  //     startDate: "January 2026",
  //     endDate: "April 2026",
  //     duration: "4 Months",
  //     year: "2026",
  //   },
  //   problemStatement: "Drove sales and brand awareness for Ecoplanet motors through a combined approach of targeted performance marketing and dynamic social media engagement. We ripped this down to the studs, interrogated their business model, and built a digital weapon.",
  //   gallery: {
  //     top: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     left: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  //     center: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
  //     right: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  //     bottomLeft: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottomRight: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottom: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=800&q=80",
  //   },
  //   execution: [
  //     {
  //       weeks: "Week 1-2",
  //       title: "Research & Planning",
  //       description: "Deep dive into the landscape, audience mapping, and architecting the core user journey.",
  //       tags: ["Strategy", "UX Design"]
  //     },
  //     {
  //       weeks: "Week 3-5",
  //       title: "Design & Development",
  //       description: "Translating insights into high-fidelity components. Implementing the core features.",
  //       tags: ["Web", "Design", "Dev"]
  //     },
  //     {
  //       weeks: "Week 6-12",
  //       title: "Execution & Optimization",
  //       description: "Scaling the platform, running performance audits, and executing the cross-channel growth campaign.",
  //       tags: ["Growth", "SEO", "Performance"]
  //     }
  //   ],
  //   strategy: [
  //     {
  //       num: "01",
  //       title: ["Research", "& Insights"],
  //       color: "#7c3aed",
  //       items: [
  //         "Competitor landscape mapping",
  //         "Audience behavior & intent signals",
  //         "Platform-specific performance data",
  //         "Content gap & opportunity analysis",
  //       ],
  //     },
  //     {
  //       num: "02",
  //       title: ["Strategic", "Direction"],
  //       color: "#f97316",
  //       items: [
  //         "Full-funnel strategy architecture",
  //         "Content direction & messaging pillars",
  //         "UX philosophy & journey mapping",
  //         "Brand positioning & differentiation",
  //       ],
  //     },
  //     {
  //       num: "03",
  //       title: ["Execution", "Plan"],
  //       color: "#10b981",
  //       items: [
  //         "Technology stack selection",
  //         "Sprint-based delivery roadmap",
  //         "KPI framework & measurement plan",
  //         "Risk mitigation & iteration loops",
  //       ],
  //     }
  //   ],
  //   impact: [
  //     { label: "Conversion Rate", value: "3.2", suffix: "x", description: "Increase in qualified leads within the first 90 days of launch." },
  //     { label: "User Retention", value: "45", suffix: "%", description: "Improvement in 30-day retention due to optimized UX." },
  //     { label: "Performance", value: "99", prefix: "", description: "Lighthouse performance score, up from 42." }
  //   ],
  //   relatedProjects: [
  //     {
  //       title: "Global Peace Ministry",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/global-peace-ministry"
  //     },
  //     {
  //       title: "Ecotellus",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/ecotellus"
  //     }
  //   ],
  //   cta: {
  //     title: "Ready to scale?",
  //     subtitle: "Let's build something exceptional together.",
  //     buttonText: "Start a project",
  //     link: "/contact"
  //   }
  // },

  // "silver-rionest-21": {
  //   id: 21,
  //   slug: "silver-rionest-21",
  //   category: "Social Media",
  //   tags: ["Social Media", "Performance Marketing"],
  //   year: "2026",
  //   image: "https://images.unsplash.com/photo-1533575770077-052fa2c609fc?w=1400&h=900&fit=crop&q=80",
  //   summary: "Accelerated Silver Rionest's growth with data-driven performance marketing and high-converting social media creatives.",
  //   accent: "rgba(150,150,255,0.15)",
  //   hero: {
  //     tagLine: "Web Development and SEO",
  //     titleFirstPart: "Silver",
  //     titleSecondPart: "Rionest",
  //     summary: "Accelerated Silver Rionest's growth with data-driven performance marketing and high-converting social media creatives.",
  //     bgImage: "https://images.unsplash.com/photo-1533575770077-052fa2c609fc?w=1400&h=900&fit=crop&q=80",
  //     clientLogoBase64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIiAvPjwvc3ZnPg==",
  //   },
  //   details: {
  //     client: "Silver Rionest",
  //     industry: "Social Media",
  //     services: ["Retargeting", "Conversion Ads", "Social Strategy"],
  //     startDate: "January 2026",
  //     endDate: "April 2026",
  //     duration: "4 Months",
  //     year: "2026",
  //   },
  //   problemStatement: "Accelerated Silver Rionest's growth with data-driven performance marketing and high-converting social media creatives. We ripped this down to the studs, interrogated their business model, and built a digital weapon.",
  //   gallery: {
  //     top: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     left: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  //     center: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
  //     right: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  //     bottomLeft: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottomRight: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottom: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=800&q=80",
  //   },
  //   execution: [
  //     {
  //       weeks: "Week 1-2",
  //       title: "Research & Planning",
  //       description: "Deep dive into the landscape, audience mapping, and architecting the core user journey.",
  //       tags: ["Strategy", "UX Design"]
  //     },
  //     {
  //       weeks: "Week 3-5",
  //       title: "Design & Development",
  //       description: "Translating insights into high-fidelity components. Implementing the core features.",
  //       tags: ["Web", "Design", "Dev"]
  //     },
  //     {
  //       weeks: "Week 6-12",
  //       title: "Execution & Optimization",
  //       description: "Scaling the platform, running performance audits, and executing the cross-channel growth campaign.",
  //       tags: ["Growth", "SEO", "Performance"]
  //     }
  //   ],
  //   strategy: [
  //     {
  //       num: "01",
  //       title: ["Research", "& Insights"],
  //       color: "#7c3aed",
  //       items: [
  //         "Competitor landscape mapping",
  //         "Audience behavior & intent signals",
  //         "Platform-specific performance data",
  //         "Content gap & opportunity analysis",
  //       ],
  //     },
  //     {
  //       num: "02",
  //       title: ["Strategic", "Direction"],
  //       color: "#f97316",
  //       items: [
  //         "Full-funnel strategy architecture",
  //         "Content direction & messaging pillars",
  //         "UX philosophy & journey mapping",
  //         "Brand positioning & differentiation",
  //       ],
  //     },
  //     {
  //       num: "03",
  //       title: ["Execution", "Plan"],
  //       color: "#10b981",
  //       items: [
  //         "Technology stack selection",
  //         "Sprint-based delivery roadmap",
  //         "KPI framework & measurement plan",
  //         "Risk mitigation & iteration loops",
  //       ],
  //     }
  //   ],
  //   impact: [
  //     { label: "Conversion Rate", value: "3.2", suffix: "x", description: "Increase in qualified leads within the first 90 days of launch." },
  //     { label: "User Retention", value: "45", suffix: "%", description: "Improvement in 30-day retention due to optimized UX." },
  //     { label: "Performance", value: "99", prefix: "", description: "Lighthouse performance score, up from 42." }
  //   ],
  //   relatedProjects: [
  //     {
  //       title: "Global Peace Ministry",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/global-peace-ministry"
  //     },
  //     {
  //       title: "Ecotellus",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/ecotellus"
  //     }
  //   ],
  //   cta: {
  //     title: "Ready to scale?",
  //     subtitle: "Let's build something exceptional together.",
  //     buttonText: "Start a project",
  //     link: "/contact"
  //   }
  // },

  // "aquasheet": {
  //   id: 22,
  //   slug: "aquasheet",
  //   category: "Social Media",
  //   tags: ["Social Media", "Content Strategy"],
  //   year: "2026",
  //   image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1400&h=900&fit=crop&q=80",
  //   summary: "Elevated Aquasheet's brand presence through strategic social media management and community building.",
  //   accent: "rgba(100,200,255,0.15)",
  //   hero: {
  //     tagLine: "Web Development and SEO",
  //     titleFirstPart: "Aquasheet",
  //     titleSecondPart: "",
  //     summary: "Elevated Aquasheet's brand presence through strategic social media management and community building.",
  //     bgImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1400&h=900&fit=crop&q=80",
  //     clientLogoBase64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIiAvPjwvc3ZnPg==",
  //   },
  //   details: {
  //     client: "Aquasheet",
  //     industry: "Social Media",
  //     services: ["Social Media Strategy", "Content Creation", "Community Management"],
  //     startDate: "January 2026",
  //     endDate: "April 2026",
  //     duration: "4 Months",
  //     year: "2026",
  //   },
  //   problemStatement: "Elevated Aquasheet's brand presence through strategic social media management and community building. We ripped this down to the studs, interrogated their business model, and built a digital weapon.",
  //   gallery: {
  //     top: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     left: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  //     center: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
  //     right: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  //     bottomLeft: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottomRight: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottom: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=800&q=80",
  //   },
  //   execution: [
  //     {
  //       weeks: "Week 1-2",
  //       title: "Research & Planning",
  //       description: "Deep dive into the landscape, audience mapping, and architecting the core user journey.",
  //       tags: ["Strategy", "UX Design"]
  //     },
  //     {
  //       weeks: "Week 3-5",
  //       title: "Design & Development",
  //       description: "Translating insights into high-fidelity components. Implementing the core features.",
  //       tags: ["Web", "Design", "Dev"]
  //     },
  //     {
  //       weeks: "Week 6-12",
  //       title: "Execution & Optimization",
  //       description: "Scaling the platform, running performance audits, and executing the cross-channel growth campaign.",
  //       tags: ["Growth", "SEO", "Performance"]
  //     }
  //   ],
  //   strategy: [
  //     {
  //       num: "01",
  //       title: ["Research", "& Insights"],
  //       color: "#7c3aed",
  //       items: [
  //         "Competitor landscape mapping",
  //         "Audience behavior & intent signals",
  //         "Platform-specific performance data",
  //         "Content gap & opportunity analysis",
  //       ],
  //     },
  //     {
  //       num: "02",
  //       title: ["Strategic", "Direction"],
  //       color: "#f97316",
  //       items: [
  //         "Full-funnel strategy architecture",
  //         "Content direction & messaging pillars",
  //         "UX philosophy & journey mapping",
  //         "Brand positioning & differentiation",
  //       ],
  //     },
  //     {
  //       num: "03",
  //       title: ["Execution", "Plan"],
  //       color: "#10b981",
  //       items: [
  //         "Technology stack selection",
  //         "Sprint-based delivery roadmap",
  //         "KPI framework & measurement plan",
  //         "Risk mitigation & iteration loops",
  //       ],
  //     }
  //   ],
  //   impact: [
  //     { label: "Conversion Rate", value: "3.2", suffix: "x", description: "Increase in qualified leads within the first 90 days of launch." },
  //     { label: "User Retention", value: "45", suffix: "%", description: "Improvement in 30-day retention due to optimized UX." },
  //     { label: "Performance", value: "99", prefix: "", description: "Lighthouse performance score, up from 42." }
  //   ],
  //   relatedProjects: [
  //     {
  //       title: "Global Peace Ministry",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/global-peace-ministry"
  //     },
  //     {
  //       title: "Ecotellus",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/ecotellus"
  //     }
  //   ],
  //   cta: {
  //     title: "Ready to scale?",
  //     subtitle: "Let's build something exceptional together.",
  //     buttonText: "Start a project",
  //     link: "/contact"
  //   }
  // },

  // "aromagic": {
  //   id: 23,
  //   slug: "aromagic",
  //   category: "Social Media",
  //   tags: ["Social Media", "Content Strategy"],
  //   year: "2026",
  //   image: "https://images.unsplash.com/photo-1555529771-835f59bfc50c?w=1400&h=900&fit=crop&q=80",
  //   summary: "Elevated Aromagic's brand presence through strategic social media management and community building.",
  //   accent: "rgba(100,200,255,0.15)",
  //   hero: {
  //     tagLine: "Web Development and SEO",
  //     titleFirstPart: "Aromagic",
  //     titleSecondPart: "",
  //     summary: "Elevated Aromagic's brand presence through strategic social media management and community building.",
  //     bgImage: "https://images.unsplash.com/photo-1555529771-835f59bfc50c?w=1400&h=900&fit=crop&q=80",
  //     clientLogoBase64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIiAvPjwvc3ZnPg==",
  //   },
  //   details: {
  //     client: "Aromagic",
  //     industry: "Social Media",
  //     services: ["Social Media Strategy", "Content Creation", "Community Management"],
  //     startDate: "January 2026",
  //     endDate: "April 2026",
  //     duration: "4 Months",
  //     year: "2026",
  //   },
  //   problemStatement: "Elevated Aromagic's brand presence through strategic social media management and community building. We ripped this down to the studs, interrogated their business model, and built a digital weapon.",
  //   gallery: {
  //     top: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     left: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  //     center: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
  //     right: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  //     bottomLeft: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottomRight: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottom: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=800&q=80",
  //   },
  //   execution: [
  //     {
  //       weeks: "Week 1-2",
  //       title: "Research & Planning",
  //       description: "Deep dive into the landscape, audience mapping, and architecting the core user journey.",
  //       tags: ["Strategy", "UX Design"]
  //     },
  //     {
  //       weeks: "Week 3-5",
  //       title: "Design & Development",
  //       description: "Translating insights into high-fidelity components. Implementing the core features.",
  //       tags: ["Web", "Design", "Dev"]
  //     },
  //     {
  //       weeks: "Week 6-12",
  //       title: "Execution & Optimization",
  //       description: "Scaling the platform, running performance audits, and executing the cross-channel growth campaign.",
  //       tags: ["Growth", "SEO", "Performance"]
  //     }
  //   ],
  //   strategy: [
  //     {
  //       num: "01",
  //       title: ["Research", "& Insights"],
  //       color: "#7c3aed",
  //       items: [
  //         "Competitor landscape mapping",
  //         "Audience behavior & intent signals",
  //         "Platform-specific performance data",
  //         "Content gap & opportunity analysis",
  //       ],
  //     },
  //     {
  //       num: "02",
  //       title: ["Strategic", "Direction"],
  //       color: "#f97316",
  //       items: [
  //         "Full-funnel strategy architecture",
  //         "Content direction & messaging pillars",
  //         "UX philosophy & journey mapping",
  //         "Brand positioning & differentiation",
  //       ],
  //     },
  //     {
  //       num: "03",
  //       title: ["Execution", "Plan"],
  //       color: "#10b981",
  //       items: [
  //         "Technology stack selection",
  //         "Sprint-based delivery roadmap",
  //         "KPI framework & measurement plan",
  //         "Risk mitigation & iteration loops",
  //       ],
  //     }
  //   ],
  //   impact: [
  //     { label: "Conversion Rate", value: "3.2", suffix: "x", description: "Increase in qualified leads within the first 90 days of launch." },
  //     { label: "User Retention", value: "45", suffix: "%", description: "Improvement in 30-day retention due to optimized UX." },
  //     { label: "Performance", value: "99", prefix: "", description: "Lighthouse performance score, up from 42." }
  //   ],
  //   relatedProjects: [
  //     {
  //       title: "Global Peace Ministry",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/global-peace-ministry"
  //     },
  //     {
  //       title: "Ecotellus",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/ecotellus"
  //     }
  //   ],
  //   cta: {
  //     title: "Ready to scale?",
  //     subtitle: "Let's build something exceptional together.",
  //     buttonText: "Start a project",
  //     link: "/contact"
  //   }
  // },

  // "care-365": {
  //   id: 25,
  //   slug: "care-365",
  //   category: "Social Media",
  //   tags: ["Social Media", "Content Strategy"],
  //   year: "2026",
  //   image: "https://images.unsplash.com/photo-1550051287-797746535565?w=1400&h=900&fit=crop&q=80",
  //   summary: "Elevated Care 365's brand presence through strategic social media management and community building.",
  //   accent: "rgba(100,200,255,0.15)",
  //   hero: {
  //     tagLine: "Web Development and SEO",
  //     titleFirstPart: "Care",
  //     titleSecondPart: "365",
  //     summary: "Elevated Care 365's brand presence through strategic social media management and community building.",
  //     bgImage: "https://images.unsplash.com/photo-1550051287-797746535565?w=1400&h=900&fit=crop&q=80",
  //     clientLogoBase64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIiAvPjwvc3ZnPg==",
  //   },
  //   details: {
  //     client: "Care 365",
  //     industry: "Social Media",
  //     services: ["Social Media Strategy", "Content Creation", "Community Management"],
  //     startDate: "January 2026",
  //     endDate: "April 2026",
  //     duration: "4 Months",
  //     year: "2026",
  //   },
  //   problemStatement: "Elevated Care 365's brand presence through strategic social media management and community building. We ripped this down to the studs, interrogated their business model, and built a digital weapon.",
  //   gallery: {
  //     top: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     left: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  //     center: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
  //     right: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  //     bottomLeft: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottomRight: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottom: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=800&q=80",
  //   },
  //   execution: [
  //     {
  //       weeks: "Week 1-2",
  //       title: "Research & Planning",
  //       description: "Deep dive into the landscape, audience mapping, and architecting the core user journey.",
  //       tags: ["Strategy", "UX Design"]
  //     },
  //     {
  //       weeks: "Week 3-5",
  //       title: "Design & Development",
  //       description: "Translating insights into high-fidelity components. Implementing the core features.",
  //       tags: ["Web", "Design", "Dev"]
  //     },
  //     {
  //       weeks: "Week 6-12",
  //       title: "Execution & Optimization",
  //       description: "Scaling the platform, running performance audits, and executing the cross-channel growth campaign.",
  //       tags: ["Growth", "SEO", "Performance"]
  //     }
  //   ],
  //   strategy: [
  //     {
  //       num: "01",
  //       title: ["Research", "& Insights"],
  //       color: "#7c3aed",
  //       items: [
  //         "Competitor landscape mapping",
  //         "Audience behavior & intent signals",
  //         "Platform-specific performance data",
  //         "Content gap & opportunity analysis",
  //       ],
  //     },
  //     {
  //       num: "02",
  //       title: ["Strategic", "Direction"],
  //       color: "#f97316",
  //       items: [
  //         "Full-funnel strategy architecture",
  //         "Content direction & messaging pillars",
  //         "UX philosophy & journey mapping",
  //         "Brand positioning & differentiation",
  //       ],
  //     },
  //     {
  //       num: "03",
  //       title: ["Execution", "Plan"],
  //       color: "#10b981",
  //       items: [
  //         "Technology stack selection",
  //         "Sprint-based delivery roadmap",
  //         "KPI framework & measurement plan",
  //         "Risk mitigation & iteration loops",
  //       ],
  //     }
  //   ],
  //   impact: [
  //     { label: "Conversion Rate", value: "3.2", suffix: "x", description: "Increase in qualified leads within the first 90 days of launch." },
  //     { label: "User Retention", value: "45", suffix: "%", description: "Improvement in 30-day retention due to optimized UX." },
  //     { label: "Performance", value: "99", prefix: "", description: "Lighthouse performance score, up from 42." }
  //   ],
  //   relatedProjects: [
  //     {
  //       title: "Global Peace Ministry",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/global-peace-ministry"
  //     },
  //     {
  //       title: "Ecotellus",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/ecotellus"
  //     }
  //   ],
  //   cta: {
  //     title: "Ready to scale?",
  //     subtitle: "Let's build something exceptional together.",
  //     buttonText: "Start a project",
  //     link: "/contact"
  //   }
  // },

  // "gravity": {
  //   id: 26,
  //   slug: "gravity",
  //   category: "Social Media",
  //   tags: ["Social Media", "Content Strategy"],
  //   year: "2026",
  //   image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1400&h=900&fit=crop&q=80",
  //   summary: "Elevated Gravity's brand presence through strategic social media management and community building.",
  //   accent: "rgba(100,200,255,0.15)",
  //   hero: {
  //     tagLine: "Web Development and SEO",
  //     titleFirstPart: "Gravity",
  //     titleSecondPart: "",
  //     summary: "Elevated Gravity's brand presence through strategic social media management and community building.",
  //     bgImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1400&h=900&fit=crop&q=80",
  //     clientLogoBase64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIiAvPjwvc3ZnPg==",
  //   },
  //   details: {
  //     client: "Gravity",
  //     industry: "Social Media",
  //     services: ["Social Media Strategy", "Content Creation", "Community Management"],
  //     startDate: "January 2026",
  //     endDate: "April 2026",
  //     duration: "4 Months",
  //     year: "2026",
  //   },
  //   problemStatement: "Elevated Gravity's brand presence through strategic social media management and community building. We ripped this down to the studs, interrogated their business model, and built a digital weapon.",
  //   gallery: {
  //     top: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     left: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  //     center: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
  //     right: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  //     bottomLeft: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottomRight: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottom: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=800&q=80",
  //   },
  //   execution: [
  //     {
  //       weeks: "Week 1-2",
  //       title: "Research & Planning",
  //       description: "Deep dive into the landscape, audience mapping, and architecting the core user journey.",
  //       tags: ["Strategy", "UX Design"]
  //     },
  //     {
  //       weeks: "Week 3-5",
  //       title: "Design & Development",
  //       description: "Translating insights into high-fidelity components. Implementing the core features.",
  //       tags: ["Web", "Design", "Dev"]
  //     },
  //     {
  //       weeks: "Week 6-12",
  //       title: "Execution & Optimization",
  //       description: "Scaling the platform, running performance audits, and executing the cross-channel growth campaign.",
  //       tags: ["Growth", "SEO", "Performance"]
  //     }
  //   ],
  //   strategy: [
  //     {
  //       num: "01",
  //       title: ["Research", "& Insights"],
  //       color: "#7c3aed",
  //       items: [
  //         "Competitor landscape mapping",
  //         "Audience behavior & intent signals",
  //         "Platform-specific performance data",
  //         "Content gap & opportunity analysis",
  //       ],
  //     },
  //     {
  //       num: "02",
  //       title: ["Strategic", "Direction"],
  //       color: "#f97316",
  //       items: [
  //         "Full-funnel strategy architecture",
  //         "Content direction & messaging pillars",
  //         "UX philosophy & journey mapping",
  //         "Brand positioning & differentiation",
  //       ],
  //     },
  //     {
  //       num: "03",
  //       title: ["Execution", "Plan"],
  //       color: "#10b981",
  //       items: [
  //         "Technology stack selection",
  //         "Sprint-based delivery roadmap",
  //         "KPI framework & measurement plan",
  //         "Risk mitigation & iteration loops",
  //       ],
  //     }
  //   ],
  //   impact: [
  //     { label: "Conversion Rate", value: "3.2", suffix: "x", description: "Increase in qualified leads within the first 90 days of launch." },
  //     { label: "User Retention", value: "45", suffix: "%", description: "Improvement in 30-day retention due to optimized UX." },
  //     { label: "Performance", value: "99", prefix: "", description: "Lighthouse performance score, up from 42." }
  //   ],
  //   relatedProjects: [
  //     {
  //       title: "Global Peace Ministry",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/global-peace-ministry"
  //     },
  //     {
  //       title: "Ecotellus",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/ecotellus"
  //     }
  //   ],
  //   cta: {
  //     title: "Ready to scale?",
  //     subtitle: "Let's build something exceptional together.",
  //     buttonText: "Start a project",
  //     link: "/contact"
  //   }
  // },

  // "infinty": {
  //   id: 27,
  //   slug: "infinty",
  //   category: "Social Media",
  //   tags: ["Social Media", "Content Strategy"],
  //   year: "2026",
  //   image: "https://images.unsplash.com/photo-1555529771-835f59bfc50c?w=1400&h=900&fit=crop&q=80",
  //   summary: "Elevated Infinty's brand presence through strategic social media management and community building.",
  //   accent: "rgba(100,200,255,0.15)",
  //   hero: {
  //     tagLine: "Web Development and SEO",
  //     titleFirstPart: "Infinty",
  //     titleSecondPart: "",
  //     summary: "Elevated Infinty's brand presence through strategic social media management and community building.",
  //     bgImage: "https://images.unsplash.com/photo-1555529771-835f59bfc50c?w=1400&h=900&fit=crop&q=80",
  //     clientLogoBase64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIiAvPjwvc3ZnPg==",
  //   },
  //   details: {
  //     client: "Infinty",
  //     industry: "Social Media",
  //     services: ["Social Media Strategy", "Content Creation", "Community Management"],
  //     startDate: "January 2026",
  //     endDate: "April 2026",
  //     duration: "4 Months",
  //     year: "2026",
  //   },
  //   problemStatement: "Elevated Infinty's brand presence through strategic social media management and community building. We ripped this down to the studs, interrogated their business model, and built a digital weapon.",
  //   gallery: {
  //     top: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     left: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  //     center: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
  //     right: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  //     bottomLeft: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottomRight: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottom: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=800&q=80",
  //   },
  //   execution: [
  //     {
  //       weeks: "Week 1-2",
  //       title: "Research & Planning",
  //       description: "Deep dive into the landscape, audience mapping, and architecting the core user journey.",
  //       tags: ["Strategy", "UX Design"]
  //     },
  //     {
  //       weeks: "Week 3-5",
  //       title: "Design & Development",
  //       description: "Translating insights into high-fidelity components. Implementing the core features.",
  //       tags: ["Web", "Design", "Dev"]
  //     },
  //     {
  //       weeks: "Week 6-12",
  //       title: "Execution & Optimization",
  //       description: "Scaling the platform, running performance audits, and executing the cross-channel growth campaign.",
  //       tags: ["Growth", "SEO", "Performance"]
  //     }
  //   ],
  //   strategy: [
  //     {
  //       num: "01",
  //       title: ["Research", "& Insights"],
  //       color: "#7c3aed",
  //       items: [
  //         "Competitor landscape mapping",
  //         "Audience behavior & intent signals",
  //         "Platform-specific performance data",
  //         "Content gap & opportunity analysis",
  //       ],
  //     },
  //     {
  //       num: "02",
  //       title: ["Strategic", "Direction"],
  //       color: "#f97316",
  //       items: [
  //         "Full-funnel strategy architecture",
  //         "Content direction & messaging pillars",
  //         "UX philosophy & journey mapping",
  //         "Brand positioning & differentiation",
  //       ],
  //     },
  //     {
  //       num: "03",
  //       title: ["Execution", "Plan"],
  //       color: "#10b981",
  //       items: [
  //         "Technology stack selection",
  //         "Sprint-based delivery roadmap",
  //         "KPI framework & measurement plan",
  //         "Risk mitigation & iteration loops",
  //       ],
  //     }
  //   ],
  //   impact: [
  //     { label: "Conversion Rate", value: "3.2", suffix: "x", description: "Increase in qualified leads within the first 90 days of launch." },
  //     { label: "User Retention", value: "45", suffix: "%", description: "Improvement in 30-day retention due to optimized UX." },
  //     { label: "Performance", value: "99", prefix: "", description: "Lighthouse performance score, up from 42." }
  //   ],
  //   relatedProjects: [
  //     {
  //       title: "Global Peace Ministry",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/global-peace-ministry"
  //     },
  //     {
  //       title: "Ecotellus",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/ecotellus"
  //     }
  //   ],
  //   cta: {
  //     title: "Ready to scale?",
  //     subtitle: "Let's build something exceptional together.",
  //     buttonText: "Start a project",
  //     link: "/contact"
  //   }
  // },

  // "kkc": {
  //   id: 28,
  //   slug: "kkc",
  //   category: "Social Media",
  //   tags: ["Social Media", "Content Strategy"],
  //   year: "2026",
  //   image: "https://images.unsplash.com/photo-1533575770077-052fa2c609fc?w=1400&h=900&fit=crop&q=80",
  //   summary: "Elevated KKC's brand presence through strategic social media management and community building.",
  //   accent: "rgba(100,200,255,0.15)",
  //   hero: {
  //     tagLine: "Web Development and SEO",
  //     titleFirstPart: "KKC",
  //     titleSecondPart: "",
  //     summary: "Elevated KKC's brand presence through strategic social media management and community building.",
  //     bgImage: "https://images.unsplash.com/photo-1533575770077-052fa2c609fc?w=1400&h=900&fit=crop&q=80",
  //     clientLogoBase64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIiAvPjwvc3ZnPg==",
  //   },
  //   details: {
  //     client: "KKC",
  //     industry: "Social Media",
  //     services: ["Social Media Strategy", "Content Creation", "Community Management"],
  //     startDate: "January 2026",
  //     endDate: "April 2026",
  //     duration: "4 Months",
  //     year: "2026",
  //   },
  //   problemStatement: "Elevated KKC's brand presence through strategic social media management and community building. We ripped this down to the studs, interrogated their business model, and built a digital weapon.",
  //   gallery: {
  //     top: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     left: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  //     center: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
  //     right: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  //     bottomLeft: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottomRight: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottom: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=800&q=80",
  //   },
  //   execution: [
  //     {
  //       weeks: "Week 1-2",
  //       title: "Research & Planning",
  //       description: "Deep dive into the landscape, audience mapping, and architecting the core user journey.",
  //       tags: ["Strategy", "UX Design"]
  //     },
  //     {
  //       weeks: "Week 3-5",
  //       title: "Design & Development",
  //       description: "Translating insights into high-fidelity components. Implementing the core features.",
  //       tags: ["Web", "Design", "Dev"]
  //     },
  //     {
  //       weeks: "Week 6-12",
  //       title: "Execution & Optimization",
  //       description: "Scaling the platform, running performance audits, and executing the cross-channel growth campaign.",
  //       tags: ["Growth", "SEO", "Performance"]
  //     }
  //   ],
  //   strategy: [
  //     {
  //       num: "01",
  //       title: ["Research", "& Insights"],
  //       color: "#7c3aed",
  //       items: [
  //         "Competitor landscape mapping",
  //         "Audience behavior & intent signals",
  //         "Platform-specific performance data",
  //         "Content gap & opportunity analysis",
  //       ],
  //     },
  //     {
  //       num: "02",
  //       title: ["Strategic", "Direction"],
  //       color: "#f97316",
  //       items: [
  //         "Full-funnel strategy architecture",
  //         "Content direction & messaging pillars",
  //         "UX philosophy & journey mapping",
  //         "Brand positioning & differentiation",
  //       ],
  //     },
  //     {
  //       num: "03",
  //       title: ["Execution", "Plan"],
  //       color: "#10b981",
  //       items: [
  //         "Technology stack selection",
  //         "Sprint-based delivery roadmap",
  //         "KPI framework & measurement plan",
  //         "Risk mitigation & iteration loops",
  //       ],
  //     }
  //   ],
  //   impact: [
  //     { label: "Conversion Rate", value: "3.2", suffix: "x", description: "Increase in qualified leads within the first 90 days of launch." },
  //     { label: "User Retention", value: "45", suffix: "%", description: "Improvement in 30-day retention due to optimized UX." },
  //     { label: "Performance", value: "99", prefix: "", description: "Lighthouse performance score, up from 42." }
  //   ],
  //   relatedProjects: [
  //     {
  //       title: "Global Peace Ministry",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/global-peace-ministry"
  //     },
  //     {
  //       title: "Ecotellus",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/ecotellus"
  //     }
  //   ],
  //   cta: {
  //     title: "Ready to scale?",
  //     subtitle: "Let's build something exceptional together.",
  //     buttonText: "Start a project",
  //     link: "/contact"
  //   }
  // },




  // "rc-cafe": {
  //   id: 33,
  //   slug: "rc-cafe",
  //   category: "Social Media",
  //   tags: ["Social Media", "Content Strategy"],
  //   year: "2026",
  //   image: "https://images.unsplash.com/photo-1533575770077-052fa2c609fc?w=1400&h=900&fit=crop&q=80",
  //   summary: "Elevated RC Cafe's brand presence through strategic social media management and community building.",
  //   accent: "rgba(100,200,255,0.15)",
  //   hero: {
  //     tagLine: "Web Development and SEO",
  //     titleFirstPart: "RC",
  //     titleSecondPart: "Cafe",
  //     summary: "Elevated RC Cafe's brand presence through strategic social media management and community building.",
  //     bgImage: "https://images.unsplash.com/photo-1533575770077-052fa2c609fc?w=1400&h=900&fit=crop&q=80",
  //     clientLogoBase64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIiAvPjwvc3ZnPg==",
  //   },
  //   details: {
  //     client: "RC Cafe",
  //     industry: "Social Media",
  //     services: ["Social Media Strategy", "Content Creation", "Community Management"],
  //     startDate: "January 2026",
  //     endDate: "April 2026",
  //     duration: "4 Months",
  //     year: "2026",
  //   },
  //   problemStatement: "Elevated RC Cafe's brand presence through strategic social media management and community building. We ripped this down to the studs, interrogated their business model, and built a digital weapon.",
  //   gallery: {
  //     top: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     left: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  //     center: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
  //     right: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  //     bottomLeft: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottomRight: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottom: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=800&q=80",
  //   },
  //   execution: [
  //     {
  //       weeks: "Week 1-2",
  //       title: "Research & Planning",
  //       description: "Deep dive into the landscape, audience mapping, and architecting the core user journey.",
  //       tags: ["Strategy", "UX Design"]
  //     },
  //     {
  //       weeks: "Week 3-5",
  //       title: "Design & Development",
  //       description: "Translating insights into high-fidelity components. Implementing the core features.",
  //       tags: ["Web", "Design", "Dev"]
  //     },
  //     {
  //       weeks: "Week 6-12",
  //       title: "Execution & Optimization",
  //       description: "Scaling the platform, running performance audits, and executing the cross-channel growth campaign.",
  //       tags: ["Growth", "SEO", "Performance"]
  //     }
  //   ],
  //   strategy: [
  //     {
  //       num: "01",
  //       title: ["Research", "& Insights"],
  //       color: "#7c3aed",
  //       items: [
  //         "Competitor landscape mapping",
  //         "Audience behavior & intent signals",
  //         "Platform-specific performance data",
  //         "Content gap & opportunity analysis",
  //       ],
  //     },
  //     {
  //       num: "02",
  //       title: ["Strategic", "Direction"],
  //       color: "#f97316",
  //       items: [
  //         "Full-funnel strategy architecture",
  //         "Content direction & messaging pillars",
  //         "UX philosophy & journey mapping",
  //         "Brand positioning & differentiation",
  //       ],
  //     },
  //     {
  //       num: "03",
  //       title: ["Execution", "Plan"],
  //       color: "#10b981",
  //       items: [
  //         "Technology stack selection",
  //         "Sprint-based delivery roadmap",
  //         "KPI framework & measurement plan",
  //         "Risk mitigation & iteration loops",
  //       ],
  //     }
  //   ],
  //   impact: [
  //     { label: "Conversion Rate", value: "3.2", suffix: "x", description: "Increase in qualified leads within the first 90 days of launch." },
  //     { label: "User Retention", value: "45", suffix: "%", description: "Improvement in 30-day retention due to optimized UX." },
  //     { label: "Performance", value: "99", prefix: "", description: "Lighthouse performance score, up from 42." }
  //   ],
  //   relatedProjects: [
  //     {
  //       title: "Global Peace Ministry",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/global-peace-ministry"
  //     },
  //     {
  //       title: "Ecotellus",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/ecotellus"
  //     }
  //   ],
  //   cta: {
  //     title: "Ready to scale?",
  //     subtitle: "Let's build something exceptional together.",
  //     buttonText: "Start a project",
  //     link: "/contact"
  //   }
  // },

  // "sangeeta-pandey": {
  //   id: 34,
  //   slug: "sangeeta-pandey",
  //   category: "Social Media",
  //   tags: ["Social Media", "Content Strategy"],
  //   year: "2026",
  //   image: "https://images.unsplash.com/photo-1550051287-797746535565?w=1400&h=900&fit=crop&q=80",
  //   summary: "Elevated Sangeeta Pandey's brand presence through strategic social media management and community building.",
  //   accent: "rgba(100,200,255,0.15)",
  //   hero: {
  //     tagLine: "Web Development and SEO",
  //     titleFirstPart: "Sangeeta",
  //     titleSecondPart: "Pandey",
  //     summary: "Elevated Sangeeta Pandey's brand presence through strategic social media management and community building.",
  //     bgImage: "https://images.unsplash.com/photo-1550051287-797746535565?w=1400&h=900&fit=crop&q=80",
  //     clientLogoBase64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIiAvPjwvc3ZnPg==",
  //   },
  //   details: {
  //     client: "Sangeeta Pandey",
  //     industry: "Social Media",
  //     services: ["Social Media Strategy", "Content Creation", "Community Management"],
  //     startDate: "January 2026",
  //     endDate: "April 2026",
  //     duration: "4 Months",
  //     year: "2026",
  //   },
  //   problemStatement: "Elevated Sangeeta Pandey's brand presence through strategic social media management and community building. We ripped this down to the studs, interrogated their business model, and built a digital weapon.",
  //   gallery: {
  //     top: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     left: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  //     center: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
  //     right: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  //     bottomLeft: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottomRight: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottom: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=800&q=80",
  //   },
  //   execution: [
  //     {
  //       weeks: "Week 1-2",
  //       title: "Research & Planning",
  //       description: "Deep dive into the landscape, audience mapping, and architecting the core user journey.",
  //       tags: ["Strategy", "UX Design"]
  //     },
  //     {
  //       weeks: "Week 3-5",
  //       title: "Design & Development",
  //       description: "Translating insights into high-fidelity components. Implementing the core features.",
  //       tags: ["Web", "Design", "Dev"]
  //     },
  //     {
  //       weeks: "Week 6-12",
  //       title: "Execution & Optimization",
  //       description: "Scaling the platform, running performance audits, and executing the cross-channel growth campaign.",
  //       tags: ["Growth", "SEO", "Performance"]
  //     }
  //   ],
  //   strategy: [
  //     {
  //       num: "01",
  //       title: ["Research", "& Insights"],
  //       color: "#7c3aed",
  //       items: [
  //         "Competitor landscape mapping",
  //         "Audience behavior & intent signals",
  //         "Platform-specific performance data",
  //         "Content gap & opportunity analysis",
  //       ],
  //     },
  //     {
  //       num: "02",
  //       title: ["Strategic", "Direction"],
  //       color: "#f97316",
  //       items: [
  //         "Full-funnel strategy architecture",
  //         "Content direction & messaging pillars",
  //         "UX philosophy & journey mapping",
  //         "Brand positioning & differentiation",
  //       ],
  //     },
  //     {
  //       num: "03",
  //       title: ["Execution", "Plan"],
  //       color: "#10b981",
  //       items: [
  //         "Technology stack selection",
  //         "Sprint-based delivery roadmap",
  //         "KPI framework & measurement plan",
  //         "Risk mitigation & iteration loops",
  //       ],
  //     }
  //   ],
  //   impact: [
  //     { label: "Conversion Rate", value: "3.2", suffix: "x", description: "Increase in qualified leads within the first 90 days of launch." },
  //     { label: "User Retention", value: "45", suffix: "%", description: "Improvement in 30-day retention due to optimized UX." },
  //     { label: "Performance", value: "99", prefix: "", description: "Lighthouse performance score, up from 42." }
  //   ],
  //   relatedProjects: [
  //     {
  //       title: "Global Peace Ministry",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/global-peace-ministry"
  //     },
  //     {
  //       title: "Ecotellus",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/ecotellus"
  //     }
  //   ],
  //   cta: {
  //     title: "Ready to scale?",
  //     subtitle: "Let's build something exceptional together.",
  //     buttonText: "Start a project",
  //     link: "/contact"
  //   }
  // },

  // "shadab-salon": {
  //   id: 35,
  //   slug: "shadab-salon",
  //   category: "Social Media",
  //   tags: ["Social Media", "Content Strategy"],
  //   year: "2026",
  //   image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1400&h=900&fit=crop&q=80",
  //   summary: "Elevated Shadab Salon's brand presence through strategic social media management and community building.",
  //   accent: "rgba(100,200,255,0.15)",
  //   hero: {
  //     tagLine: "Web Development and SEO",
  //     titleFirstPart: "Shadab",
  //     titleSecondPart: "Salon",
  //     summary: "Elevated Shadab Salon's brand presence through strategic social media management and community building.",
  //     bgImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1400&h=900&fit=crop&q=80",
  //     clientLogoBase64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIiAvPjwvc3ZnPg==",
  //   },
  //   details: {
  //     client: "Shadab Salon",
  //     industry: "Social Media",
  //     services: ["Social Media Strategy", "Content Creation", "Community Management"],
  //     startDate: "January 2026",
  //     endDate: "April 2026",
  //     duration: "4 Months",
  //     year: "2026",
  //   },
  //   problemStatement: "Elevated Shadab Salon's brand presence through strategic social media management and community building. We ripped this down to the studs, interrogated their business model, and built a digital weapon.",
  //   gallery: {
  //     top: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     left: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  //     center: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
  //     right: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  //     bottomLeft: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottomRight: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottom: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=800&q=80",
  //   },
  //   execution: [
  //     {
  //       weeks: "Week 1-2",
  //       title: "Research & Planning",
  //       description: "Deep dive into the landscape, audience mapping, and architecting the core user journey.",
  //       tags: ["Strategy", "UX Design"]
  //     },
  //     {
  //       weeks: "Week 3-5",
  //       title: "Design & Development",
  //       description: "Translating insights into high-fidelity components. Implementing the core features.",
  //       tags: ["Web", "Design", "Dev"]
  //     },
  //     {
  //       weeks: "Week 6-12",
  //       title: "Execution & Optimization",
  //       description: "Scaling the platform, running performance audits, and executing the cross-channel growth campaign.",
  //       tags: ["Growth", "SEO", "Performance"]
  //     }
  //   ],
  //   strategy: [
  //     {
  //       num: "01",
  //       title: ["Research", "& Insights"],
  //       color: "#7c3aed",
  //       items: [
  //         "Competitor landscape mapping",
  //         "Audience behavior & intent signals",
  //         "Platform-specific performance data",
  //         "Content gap & opportunity analysis",
  //       ],
  //     },
  //     {
  //       num: "02",
  //       title: ["Strategic", "Direction"],
  //       color: "#f97316",
  //       items: [
  //         "Full-funnel strategy architecture",
  //         "Content direction & messaging pillars",
  //         "UX philosophy & journey mapping",
  //         "Brand positioning & differentiation",
  //       ],
  //     },
  //     {
  //       num: "03",
  //       title: ["Execution", "Plan"],
  //       color: "#10b981",
  //       items: [
  //         "Technology stack selection",
  //         "Sprint-based delivery roadmap",
  //         "KPI framework & measurement plan",
  //         "Risk mitigation & iteration loops",
  //       ],
  //     }
  //   ],
  //   impact: [
  //     { label: "Conversion Rate", value: "3.2", suffix: "x", description: "Increase in qualified leads within the first 90 days of launch." },
  //     { label: "User Retention", value: "45", suffix: "%", description: "Improvement in 30-day retention due to optimized UX." },
  //     { label: "Performance", value: "99", prefix: "", description: "Lighthouse performance score, up from 42." }
  //   ],
  //   relatedProjects: [
  //     {
  //       title: "Global Peace Ministry",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/global-peace-ministry"
  //     },
  //     {
  //       title: "Ecotellus",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/ecotellus"
  //     }
  //   ],
  //   cta: {
  //     title: "Ready to scale?",
  //     subtitle: "Let's build something exceptional together.",
  //     buttonText: "Start a project",
  //     link: "/contact"
  //   }
  // },

  // "suvera": {
  //   id: 36,
  //   slug: "suvera",
  //   category: "Social Media",
  //   tags: ["Social Media", "Content Strategy"],
  //   year: "2026",
  //   image: "https://images.unsplash.com/photo-1555529771-835f59bfc50c?w=1400&h=900&fit=crop&q=80",
  //   summary: "Elevated Suvera's brand presence through strategic social media management and community building.",
  //   accent: "rgba(100,200,255,0.15)",
  //   hero: {
  //     tagLine: "Web Development and SEO",
  //     titleFirstPart: "Suvera",
  //     titleSecondPart: "",
  //     summary: "Elevated Suvera's brand presence through strategic social media management and community building.",
  //     bgImage: "https://images.unsplash.com/photo-1555529771-835f59bfc50c?w=1400&h=900&fit=crop&q=80",
  //     clientLogoBase64: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIiAvPjwvc3ZnPg==",
  //   },
  //   details: {
  //     client: "Suvera",
  //     industry: "Social Media",
  //     services: ["Social Media Strategy", "Content Creation", "Community Management"],
  //     startDate: "January 2026",
  //     endDate: "April 2026",
  //     duration: "4 Months",
  //     year: "2026",
  //   },
  //   problemStatement: "Elevated Suvera's brand presence through strategic social media management and community building. We ripped this down to the studs, interrogated their business model, and built a digital weapon.",
  //   gallery: {
  //     top: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     left: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  //     center: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
  //     right: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  //     bottomLeft: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottomRight: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  //     bottom: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=800&q=80",
  //   },
  //   execution: [
  //     {
  //       weeks: "Week 1-2",
  //       title: "Research & Planning",
  //       description: "Deep dive into the landscape, audience mapping, and architecting the core user journey.",
  //       tags: ["Strategy", "UX Design"]
  //     },
  //     {
  //       weeks: "Week 3-5",
  //       title: "Design & Development",
  //       description: "Translating insights into high-fidelity components. Implementing the core features.",
  //       tags: ["Web", "Design", "Dev"]
  //     },
  //     {
  //       weeks: "Week 6-12",
  //       title: "Execution & Optimization",
  //       description: "Scaling the platform, running performance audits, and executing the cross-channel growth campaign.",
  //       tags: ["Growth", "SEO", "Performance"]
  //     }
  //   ],
  //   strategy: [
  //     {
  //       num: "01",
  //       title: ["Research", "& Insights"],
  //       color: "#7c3aed",
  //       items: [
  //         "Competitor landscape mapping",
  //         "Audience behavior & intent signals",
  //         "Platform-specific performance data",
  //         "Content gap & opportunity analysis",
  //       ],
  //     },
  //     {
  //       num: "02",
  //       title: ["Strategic", "Direction"],
  //       color: "#f97316",
  //       items: [
  //         "Full-funnel strategy architecture",
  //         "Content direction & messaging pillars",
  //         "UX philosophy & journey mapping",
  //         "Brand positioning & differentiation",
  //       ],
  //     },
  //     {
  //       num: "03",
  //       title: ["Execution", "Plan"],
  //       color: "#10b981",
  //       items: [
  //         "Technology stack selection",
  //         "Sprint-based delivery roadmap",
  //         "KPI framework & measurement plan",
  //         "Risk mitigation & iteration loops",
  //       ],
  //     }
  //   ],
  //   impact: [
  //     { label: "Conversion Rate", value: "3.2", suffix: "x", description: "Increase in qualified leads within the first 90 days of launch." },
  //     { label: "User Retention", value: "45", suffix: "%", description: "Improvement in 30-day retention due to optimized UX." },
  //     { label: "Performance", value: "99", prefix: "", description: "Lighthouse performance score, up from 42." }
  //   ],
  //   relatedProjects: [
  //     {
  //       title: "Global Peace Ministry",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/global-peace-ministry"
  //     },
  //     {
  //       title: "Ecotellus",
  //       category: "Web",
  //       image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&h=900&fit=crop&q=80",
  //       link: "/showcase/ecotellus"
  //     }
  //   ],
  //   cta: {
  //     title: "Ready to scale?",
  //     subtitle: "Let's build something exceptional together.",
  //     buttonText: "Start a project",
  //     link: "/contact"
  //   }
  // },
};
