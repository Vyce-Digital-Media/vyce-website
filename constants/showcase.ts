export type ProjectShowcase = {
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
  gallery: {
    top: string;
    left: string;
    center: string;
    right: string;
    bottomLeft: string;
    bottomRight: string;
    bottom: string;
  };
  execution: {
    weeks: string;
    title: string;
    description: string;
    tags: string[];
  }[];
  strategy: {
    num: string;
    title: string[];
    color: string;
    items: string[];
  }[];
  impact: {
    label: string;
    value: string;
    suffix: string;
  }[];
  relatedProjects: {
    title: string;
    industry: string;
    image: string;
    link: string;
  }[];
  cta: {
    bgImage: string;
  };
};

const defaultGallery = {
  top: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  left: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  center: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
  right: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  bottomLeft: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  bottomRight: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  bottom: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=800&q=80",
};

const defaultExecution = [
  {
    weeks: "Week 1–2",
    title: "Research & Planning",
    description: "Deep dive into the spatial tech landscape, audience mapping, and architecting the core user journey.",
    tags: ["Strategy", "UX Design"]
  },
  {
    weeks: "Week 3–5",
    title: "Design & Development",
    description: "Translating insights into high-fidelity components. Implementing the WebGL core and organic physics.",
    tags: ["WebGL", "Next.js", "Three.js"]
  },
  {
    weeks: "Week 6–12",
    title: "Execution & Optimization",
    description: "Scaling the platform, running performance audits, and executing the cross-channel growth campaign.",
    tags: ["Growth", "SEO", "Performance"]
  }
];

const defaultStrategy = [
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
];

const defaultImpact = [
  { label: "Revenue Growth", value: "+142%", suffix: "" },
  { label: "Return on Ad Spend", value: "8.4", suffix: "x" },
  { label: "Conversion Rate", value: "3.2", suffix: "%" },
  { label: "Lead volume", value: "+210%", suffix: "" },
];

const defaultRelatedProjects = [
  {
    title: "Zenith Space Hub",
    industry: "Spatial Architecture",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    link: "/showcase/zenith"
  },
  {
    title: "Etheris Platform",
    industry: "Metaverse Systems",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    link: "/showcase/etheris"
  }
];

const defaultCta = {
  bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop"
};

// Replace with actual logo base64 strings later
const defaultLogo = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISDxUQEBIWFhUXGBcSGBcYFhkVGBAYFhoWFhcTGxcYHSggGB0oGxUfIzQhJSkrLi4uFx8zODMsOygtLisBCgoKDg0OGxAQGzUlHyUtLSstLy8tLS0wLTEwLS0tLTIuKzItLS0tLS0tLS0rNS0tLS01Li4tLTctLS8tLSstLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwIDBAUGCAH/xABHEAABAwIDAwYKBgcJAQEAAAABAAIDBBEFIUEGMVEHEhMUImEWMlJTcYGRkqHSQlWUscHwIyQ0VHKy0RczQ0RigpOi4fEV/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAQGAgMFAQf/xAA9EQACAQICBgYJAgYCAwEAAAAAAQIDBAUREiExQVGREzJhcaHRBhUiU4GxweHwFEIjM0NyovEWYlKCkjT/2gAMAwEAAhEDEQA/AJxQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQFMjw0FziAACSSbAAZkk6BAaPw1wz6wpPtEXzIB4a4Z9YUn2iL5kA8NcM+sKT7RF8yAeGuGfWFJ9oi+ZAPDXDPrCk+0RfMgHhrhn1hSfaIvmQDw1wz6wpPtEXzIB4a4Z9YUn2iL5kA8NcM+sKT7RF8yAeGuGfWFJ9oi+ZAPDXDPrCk+0RfMgHhrhn1hSfaIvmQDw1wz6wpPtEXzIB4a4Z9YUn2iL5kA8NcM+sKT7RF8yAeGuGfWFJ9oi+ZAbikqo5WNkie17HC7XscHNcOIcMigLyAIAgCAIAgCAIAgCAplkDWlziA0AuJJsGgZkkncEBAfKPt8/EXOpKRxbRtNnyDJ1YRoOEf368FhOeR1MNw2V1LSlqgt/HsRxQoYvNt90LRpPiWtYda+7XIdSi8233Qmk+I9X2vu1yHUYvNt90JpPiPV9r7tch1KLzbfdCaT4j1fa+7XIdSi8233Qmk+I9X2vu1yHUovNt90JpPiPV9r7tch1GLzbfdCaT4j1fa+7XIdRi8233Qmk+I9X23u1yHUYvNt90JpPiPV9t7tch1KLzbfdCaT4j1fa+7XIdSi8233Qmk+I9X2vu1yHUYvNt90JpPiPV9r7tch1GLzbfdCaT4j1fa+7XIdRi8233Qmk+I9X2vu1yHUovNt90JpPiPV9r7tch1KLzbfdCaT4j1fa+7XI6TYXbOXCZeaedJRPN5I95pyd8sf4jX4rbCeeplcxTCnRbq0l7O9cPseh8Pro54mTQvD43gOa5puHA/ndotpwzIQBAEAQBAEAQBAUTStY0ve4Na0FznE2DQMySTuFtUBAPKLt6/EnupaVzmUTTZz8w6sI+IjvprvOgGE55HVw3DJXUtKWqC8exHIPe2NlzZrR+bLRrbLdUnStaWb1RR1WyfJ/JWR9ZrJJYGOA6KOMhry3zj7g2B0Fu/wBPBxLHY20+iopSa2t7O4q9e8r3M9PScVuSeXM0u2+BUtJIKWkqKmWoyL+dI0xwN39rmsBLjwvlroDNwu7ubmHS1oKMd2p5vx2Gmn+pq1FTpTk33vJd5rqaHmNtzi46kkm/t3Lot5sttrb9BDRcnJ723mXHvDRdxAA1K82m6pUjTjpTeSL2E4fV1n7HTOkbe3SO/RxjQ9p1udbgM+5R7m7t7b+dNJ8Nr5HErY2m8qEc+16l5/I6mi5Lqt4BqKyOPi2KMyZcOc4tsfauNV9JaEdVOm33vLzIE768ntnl3L8ZtouSWl/xKqqd6HsaD6uYVBl6T1/2wiub+pGbqy61ST+Jlt5LMO16c95mP4BaH6SXnZy+5j0f/Z8yxPyT0R8Saqj9EoI/7Nv8Vsh6TXK60Yv4PzPVGa6s2viafEOS2pZc0tY2TgyZnN/7tvc+oKfQ9JaMtVWm12p5+Gokwvbynsnn3/mZyOJ01RSPDK2B0JOTX+NG/wBDxl6tNV3be4o3MdKjLP5r4HSt8ag3o11ovju+xTa47itx2WozjluZe2Owekmq+qVsk7TJ/cPZIGtcdYnXae1wOu7UKJiVxcUaPS0Enl1k14rWU+7oVLatoSm8nseZRiFGyCuqqeF7nxRvaxpc7nHnBvbaSBo649S22tWda3hUqLKTWfkdTBJzbqJttLLaULcd8IChkzXFzQc25EfnRetZEencU6spU1tWpo32xG2MuEy/Sko3m8kQzMBO+WP8RuPsI2wnnqZWcUwp0c6tJezvXD7fI9D4ZiEVRCyeB4fG8c5rm7nD8DoQcwRZbThGUgCAIAgCAIC3UTsjY6SRwaxoLnOcQGsaBcuJOQAGqA8/coW3j8UeaenLmULTYnxXVrmnedRHfcPWc7Buuc8jrYZhkrmWnPVBePYvM5SSRsbLnJo/IAWlJtltqVKVtSzeqKO12A2IdM5tdXMswdqCB2uolkH3N/DfW8YxlU06Fu9f7pcOxFVuLid3PTnqiti8+06LlG2vNHGKemINVKOzr0DNxmcPba+ovnax5mC4X+qn0tXqLxfDzNWU6k1Spr2n4ET08HMBuS5zjznOObnuOZcSe8q7t8Nha7Kzha09GO3e+JdXhMOn5OtkmVpNbVt50DXFsMR8WUt8aR41F8ra53yGfBxvFZWv8Cjqk1rfDu7Sm3VxK8quT6i2L6kusaAAAAABYAZAAbgBoqVKTk83tMSpYgIAgCAICzWUscsbopWNexws5rhcO9RWylWnSmpweTXA8cU1kyF9tNlHYbIJYiXUcjrZm5pXnc0nVh0PtzzdfMKxRXsdCeqovHt8/wAykWN5K0moSf8ADf8Aj9jR1MAe21yCM2uG9jhucCusnkWO7tYXNLQl8HwYp4QxtgSSSXEnMuJ3uJ4o3me2lrC2p6EPi+LLi8JIQGZs1sm6tbWSQO5tRC+Mx3PZlDmu50buF+aLH/6IF9iUbOdOM17Ms8+zZrKbcynC9qVKbyaZr4pCS5j2lkjCWvY4WLCN4IKn6mlKLzT2MsdlewuocGtq/Nxu9i9rpsJmLmgyUjzeWEb4z52O+48RuIFjoW7oTz1M4OKYV0WdWkvZ3rh9vkeisJxOGpgZUU8gkjeOc1w3HQjuIORBzBBBW04JloAgCAIC1VVDI2OkkcGMaC5znEBrGjMuJO4WQHnvlB25kxWQwQFzKBh72urXNOTnDeGA7m+s52Ddc55HXwzDJXL056oLx7vM5iSRsbLmwaPyAAtKzbLZUqUralm9UV+ajttgNiTM5tdXMswWdBA74SyD7m+v01vGMYVNOhQev9z4diKrcXE7uenPVFbF+byQ9ocZjo6WSql8VguBq9xyawd5JA+KrFlazuq8aUd/gt7NU5KEcyCDNJNK+qqDeaU853Bo+iwDQAAC3cOC+kU6UKUFSp9WOwsOFWXQ0+kn15eC4FSyOsHC4I7iEMakXKLS4EqckdUx+EQsbbnRGSN48l3SPfn6Q4H1qjekNOUb2Unskk1yyKPQ1R0XtR2S4ZuCAIAgCAIAgMPGMNZU08lNKLskaWHu4OHeDYjvCkWtxK3qxqx2p/75mM4qSyPP1G1zQ6KTx4nuhd6WGy+m6SklKOxrPmWPCK7q2yUtsdXLZ4F9DphAfUB3PIz41d/HD/LIqv6UbKP/ALfQp9z/APrq95udvtihWDrNPZlUwZHc2oaP8N/fwd6jlug4PjDtn0VXXTfh2rs7DSnOnNVKbykvHvIoikJLmPaWSMJa9jsiwjIghXZZNKUXmnsZaLG+hdQ4SW1fm43Gxu1c2ETmSMGSkebzQD6OnTR3yDgNNxAsdC3dCeepnBxXCuizrUV7O9cPt8u49GYPisNVAyop5BJG8Xa4fEEbwQciDmCLLacAzEAQBAY+IUUc8T4Jmh8b2ljmnc5pyIQHm7a7ZeXCqnoHkvp5CTTynh5l+gcL+vfrYaqkN6LFg+JaGVCq9W58Ow01VAXAFps9hD2Ei4DhmLg5EZarUnuexnaxGyV1SyXWWtEy7CbWNr4DzwGVEfZmj79JG/6T8DlwJoOL4ZKzqZx1wex/R9vzKvFvNxmspLajieVbFunrY6Jp/R04E0n+qV47DT6Gm/8Avcu/6PWnRUHXe2Wpdy82SbGh+ouUn1Y639Dl13i3HxAEBcwyuqKSY1FHJzHnJ7HC8cwHlN494zzO65Wm5tqNzT6Oss1u4ruZxb7Cukm6tF5S3rc/I7jD+VgAWrKOVh3c6EiVp77EgtHdcqt1/Rlt50ai+Or5HGqUril/Mpv4a0bqn5TMLdkaksPB8Ugt6w0j4rnT9H76OyOfc0aOnhvNhHtvhp3VsPrdb71HeD3q/pMy6aHEuja/D/32n/5Wf1WHqu891LkOlhxPvhbh/wC/U3/Mz+qeq7z3UuTPelhxPo2sw/8Afqb/AJ4/mXnqy891Lkx0kOJdi2konGzaymJ4CeMn2c5Yyw67is3Sl/8ALHSQ4mwhma8XY5rhxaQ77lGlSnDrJrvRkmmcTinJjTzVEtR1ieMyvMjmsLQ0OdmbXbxXfoekValSjT0E8llrzMYqcM9CbWfB5GL/AGTQfvlV7zPlWz/k9b3cfEz06/vJc2P7Jaf98qvfZ8qf8nre7j4nmlW95Lmx/ZLT/vlX77PlT/k9f3cfHzGlW95LmzotkNkosPEoilkk6UtLjIWkgsDgLWA8r4LmYjilS+0dOKWjns7cvIxjBptt5t8TL2p2hioaZ08uZ8VjB40zzuYPxOgWrD7GpeVVTjs3vghOeiiD5p5Z55KupIM0pubZCNosGxgcAAB6td5+iUqUKNNUqfVRYMLsHRXS1Ou/BcDKwXBp8QqhRUuROcslrtp49XHidANb+sb6cM9bI2MYl0adCm9b2vh2d56Q2cwOGhpY6WnbZjBbPNzyc3PcdXE5/wDi3lUNmgCAIAgNVtPs/BX0r6WobdjxkR40bh4sjTo4f1BuCQgPOGMYRPQVTqKqzcM45NzaiPOzx35ZjiCtFSGWstmEYl0iVGo/aWx8fv8AMx6eolp52VdMebKzTSVv0o3DUEfncRHrUadem6VVZxfh2kjE8P6ZdLT668Vw7y1DUOmdJUyePNI+V3+m5Nm56DRZxpxpQjTjsikhgtFwoOctsm39C6vTrhAEAQH1AfHAHfmhjKEZbUW3UzDvY0+loXubNLtKD2wXJFPU4vNs90f0TSfEx/Q23u48kfOpRebZ7oTSfE8/QW3u1yQ6lF5tnuhNKXEer7X3a5Hw0EXm2+xNOXExeHWr/popbh0YPOYCx2ha5zSPijk2snrNE8GtJbI5dzZt8P2gxGn/ALmte8eRP+lB7ruzaPRZQa+G2dfr01nxWr5EKpgko/yqnwfn9jrsH5VQCGYhAY9Omiu+P0lvjNHvFcO69Gn1raWfY9vM5lalXt/5sdXFa0SHQV0U8YlgkbIw7nNIcDxFxr3Ks16FSjPQqRyfaeRkpLNGQtJ6YeLYnFTQPqJ3c2NguTqeDQNSTkApFtbVLioqdNZtmMpKKzZBmMYtLX1Jq57houIYtIWce9x3k/0AH0Szs6dnSVKG3e+LOthdg2/1FVf2rh2lmnp5Z5mUlK3nzymzRowayOOjQM79ymQjmSsUxFW0NCHXfh2nofYTZGLDKQQR9qR3bmlI7Uz+Pc0bgNB3kkyClttvNnSIeBAEAQBAEBzW3ux8WJ0vQv7ErO3DKN8L/wAWncR6DvAIHqbTzW088TQywzPpalvMniPNe3yuD28WkEG/eFGnDIuuF4irmGjLrrb29oWJ1QgCAIAgCAIAgCAIAgCAIAgCHjSayZVhdZPRydNQv5h+lGc4phwc38Ra2hC03NtRuoaFZZrc967mcO8whfzLfU+G5+RMOy+2NPWUzpyRE6IXnY8/3FgSXE6tyNnd3FUW+wmtbVlTS0lLqtb/ALnEVTapamtpFu1u0TsSqA7MUsRPRMOXSu3GZw+4aD0m9wwzDo2NLLbN7X9F+azoYdYu4l01Rewti4/Y1cshu1jGl8jyGRsGZkcTYAD0ldGMdJnav76FrTze17F+bieOTHYVuHQmWaz6uYAyv3iMbxCzg0anUjgBaSllqKNVqSqzc5vNs7demsIAgCAIAgCAIDhuU/YRuIxCaCzayIfo37ulbv6B54G5sTuJOhK8az1GylVlSmpweTRBEEpPOa5pZIwlkjCLOjc0kFpB7wo8o6LLzYX0LqnpLatq/NxVJIGi7jYceCxWslVa0KS0pvJcQyQOzaQfQbpkxTrU6izhJPuZWhsPiAIAgCAIAgCAIAgCAIAgMWqoQ93O5xFxzXgEjpWghwaePaaD6hwCyUsvp2HLvMLp3FWNR6uPavzwLtTO2NnOdkBkANeAC8SbZKuLina0tJ7FqS+iJi5JdgTTgYjWs/Wnj9Gwj9kY4brHdIQc9QDbUqTFZLIo11czuKjqT/0SevSOEAQBAEAQBAEAQBARdyt7BmYHEqJn6ywfpYwP2uNo4DfIAMtSBbeAF5KKayJFrdTtqinD/ZD8EzZGc4Zg5EH4gqM00y9UK9K7o6S1p7V80y7s1Q0DanocQiJilIEcwe9hgfox1jbmnyiMvRe0W/lddFp2z9pbVknmuzt+ZVL6wVrV/wCj2Ph2EjTck1ITeOoqmdwkaQPay/xVXj6TXK1ShF/Br6mK6SPVnJfFmJPyT+bxCVv8cTZPuc1SYekzyzlSXweX0NiuLpbKr+Ziu5K6oeLiDD/FBb7nFbV6TUXtpPmbFfXq/qZ/BGNLyZ4iPEqKV38XSN+5pW6PpHZvbGS5eZsWJ3q3p/Ax3cn2KjSld6JHD+YBbFj9i98l8DNYtdrbGPj5mLLsbizf8m1/e2eMfBzgVvjjNhL+pl3p+Rmsar76a5mO/Z3E2+Nh8n+1zH/ylbY4nZS2VV8jYscl+6l4/YxhSVLXAS0NU0XzPQuI9oCkRuLeWypHmjP15Ty6klyLVbiETRaQGN3BzC0+wDct6jms1r7mZU8Zts9ba70yxHWxO3SN9tvvXji1uJ8MQtp9Wa+XzL68JaaazQQ9CApkkDWlzjYDMlEszXVqxpQc5vJIkXki2GM7mYrWs7A7VLE4eyocD/197ySpMY6KKNf307qppPUlsX5vJpWRBCAIAgCAIAgCAIAgCAICE+VzYc073YpRMvG486qiaPF41DR/Nw37rkYyjpIn2F9K1qZrXF7V+byO3NbIy29rgo+uLLnKNK6o5bYy/OZ3vJrtg4ObhtW67gLU8p/xGjdC4+UNOO7hesY1hKb/AFVFf3L6+ZU69GdrU6Kezc+KJEq6uOJhklkbGwb3PcGgesqu06VSq9CMc3wRi2lrZzNRykYa1xYKgvI38yORwHr5tj6QV1KeA3stbil3tGvpo7FrKI+UvDTkZXt73RSW9rQV7L0fvU29FP4odKltzXwN7he0FLUnm09RFId/Na8c63HmHtfBQK+H3FHKVWDXblq57DKNSMtjNkoy15Z7zM+7yta9mOZ7tPizez4Hh8eLixzHA5r1Nx1rgDVVuzNFN/e0kLidejaHe8BdS4YhdU+rUfMwdOL3HLYzyaUgje+mkfTFrXO8YviFgSS5r7nK2++Xeuxa4/cOSjUip5vLVqfkIaVF6VKTiRrRSudG1zhYkX/9VqksnkWzDriVxbxqT2l4lYkyUlFZs6rky2LOJTCqqG/qUTuy05dckb3axjXju8q2+EMil4piLuZ6MeovHt8j0C1oAsN270LYck+oAgCAIAgCAIAgCAIAgCA+OaCCCLg5EHcRwQHnzlL2MOGT9Zp2k0UrswM+pyO+j/AdDpu4c7XOGes62F4i7aehPqPw7fM5KohD22vY5Oa4b2kbnAhaE8i1XVrTuqWi+9PgV1s09U9stdKZXNAa0bmsAyuGiwubXJ1WFGjSoJxoxyTOZZ4Ml7Vx7T4bvuVMFt2XoyWZ2404RWUVkiouOpKGWithjy0wJDmkseDdr2nmuYeIIXuerJ60QLrDaFdbMnxX5rJP5PNtTUHqVYR1loux+4VTRr/GAMxqLnQqnYzhHQfx6HU3r/x+xWp050KjpVNu58Ud7ZVzKR6Ob3JlLYCl7w3NxA9OX3r1Qm9iZ5mjSYpthQU4JmqogR9Frukf7jLn4KdQwu8rP2ab73qXNmEqsFvI22x23kr2Gnpmuipj473ZSVAH0QB4rT8faDa8LwaNo+kqvSnu4LzZJtrGtdvWtGHF7+459rbAAbhkO4LstlshCNOKjFZJG32K2VkxWq6MXbSREdPIMued4gYdSdToM+AO6EMtbKti+JdI3Rpv2d74/Y9H0VIyGNsUTAxjAGNaBYNAyAC2nALyAIAgCAIAgCAIAgCAIAgCAICxX0cc0T4ZmB8b2ljmnc4HIhAecNstlpMKquidd1LISaeU/R1MLz5Q+Iz4huqcN6LBg+JaDVCq9W58OzuNStJawgCAICzVUrJAA8XtmNLL1Sa2EW5s6Nykqi2GOMIi4H3istNkP1LacHzYOERcD7xTTY9SWnB82BhEPkf9j/VOkkerBbNft8WZEVJG3xWNHfbP2rFybJdKyt6TzhBIvrwlGTgeCT4jVCipsvpTS2u2nj1Pe47gNe7MjZThnrZXsYxLQXQUnr3vh2d56R2fwWGipmUtO3mxsFhxcdXuOricyVvKqbFAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAazaPA4a6mfS1Lecx4/3MOj2nRwOqA8341gs+H1RoqrM+NFLazaiPRw4O0I0trvOipDLWi14PiXSJUKr17nx7O8wqgvDbsAJGdj9LuvoVgss9Z2Ll1ow0qOTa3Pf9yzRVMkkZkFPKWA81zmML2sIzs4gdnfqvJuEJaLkk3xZyKWPQf8AMg13a/I+R4nCdzwPTcfesnCROp4taT/fl35ovtqWHc9p/wBwXmT4EmN5by2TXNH0zsG97feCZM9dzRW2a5osyYhEN8jfVn9y90JcDRPE7SG2a+Gv5HyascIjM2GV0Yt+k5hbHc5Ac8i1+5eLR0tDSWfDPXyIFXHqMV7EW/BFdHI9zec8Bt9zdQOJKSST1HQsqlerDpKqSz2LzMmlpJqidlJSN508mQ4Rt1kcdABn+bHKEcyJiuIq2joQ678O3yPROw+ykOG0jYIu089uWUizp3ne48BwGg4m5MgpjbbzZ0KAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAOc272RixOkMEnZe3txSjxoX6HvadxGo4EAgeptPNHnepppqed9JVN5s8Zs4aPGkjTq0jP1qPOGRc8LxFXMNCfXXj2+ZewfFpaCpFXBctOU0WkzOPc4bwf/QYd5aU7yk6VTbufBkbFLBp/qKS/uXHtJqpHUlfA2cMimjeLgvY13paQ4GxByIVCq/qrKq6bk4tcGzjrRmszFl2Kw12+ig9TA3+Wyzji97HZVfzHQw4FDNhsNBuKKH1tJ+BK9eM3z/qvw8jzoYcDNZhdFSsdK2CCFrQXOeI2N5oG8kgXWr9Td3MlDTlJvYs2e6MI68iHdqdoX4lUdIbtpoyehjP0zu6Z44nQaDLiTeMOw+NlS0ds31n9F2HRwyx6eXT1F7K2Lj29xrZHOLmxxML5ZCGRsGZe45D1LoxjmdjEL6NrTz/AHPYvzcT3yZ7DNw2AvlIfVS2M0nk8IWf6R8TnusBJSyKNUqSqSc5PNs7RDAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIDieU3YVuIwiSKzKuIExP3c8bzC/i06cCeBIPjWZnTqSpzU4vJogaJ7ruZI0slYSyRhyLHDIiyjSjosvNhfQu6ee9bV+bjabJbROwyoLszSykdKwZ9E7d0zB941HoFudieHxvaWS662P6P81HGxGxdvLpqa9h7Vw+xONPO2RjZI3BzHAOa4G4cDmCCvntSnKnJwksmtpCTzWaKyVik28kekMbe7UnEJerQOPVI3dpwy628fewacd/C18wfC1aQ6Wov4j/xXnxN1lZu8nm+ovHsOdqJ2xtue4ADe46NAXZSbeRZLm5p2tLSlsWxcexEy8k2wJpR1+tb+tyN7LT/lIz9ADR5G86bvKvJSSWRRbm4ncVHUntfgSWvTQEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBARlys7AmpBxCib+tMHbYP82xo8W2rwBkd5Ato23klmsjfbXM7eoqkP9kN08zZGXG45EHQ6tIUZppl6trind0tKOx6mvozpdgNquoSClqHfqkjuw4/5V7syCfIJ9hz4ri4zhf6uHS01/EX+S8ytXlo7Oea6j2dnYbHlK2u6ZzsNpH9kZVErTl3wNP83s4qLgeE9Elc1lr/AGp/N/Q129vK7qdHHqraziiWRs8lrR7P6qya5MtbdK1o8Ix/OZJfJHsIZXMxWtZkO1SxO+iN4qHDjq33vJtIjHRRSb69ndVNJ7Ny4EyrIhBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEBC/K7sKYXPxWiZ2T2qqJo9tQ0fF3veUVjKOkidYXsrWppLY9q/N5G/YkZ5TXD8+tR9aZdP4V1R4xkvz4o+U8DY2c1uQGZJ14ko22zy3oUrWlox1Ja2/qzsuTDYn/APSlFZVN/U43fo2Eftb27yRrGDv4nLylvhDIqeJ4i7qejHqLZ29pPwCzOUfUAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAfCL5FAef+U/Yo4bN1umaepSu7bQP2OR3dpGTu4HLyb4ThmdXDMRdrPRl1Ht7O012wmyj8WqS3MUcRHTSDLpjvEDDxOp0Gerb4whlrZIxbE+mfRUn7O98ft8z0ZSUzIo2xRNDGMAY1rRYNaBYADQWW04ReQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAWaylZLG6KVoex4LHNIuHNORBCAsYNhMFJA2npoxHGzJrRc78ySTmSTqc0BmoAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCA//9k=";

export const projectsData: Record<string, ProjectShowcase> = {
  "earthy-crafts": {
    slug: "earthy-crafts",
    hero: {
      tagLine: "Web Design and Commerce",
      titleFirstPart: "Earthy",
      titleSecondPart: "Crafts.",
      summary: "Earthy Crafts is a luxury handcrafted decor platform that blends timeless artistry with modern design, showcasing premium marble sculptures and artisan-crafted home decor pieces.",
      bgImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=2000&h=1200&fit=crop&q=80",
      clientLogoBase64: defaultLogo
    },
    details: {
      client: "Earthy Crafts",
      industry: "Handcrafted Decor",
      services: ["Web Design", "Commerce", "WebGL", "Social Media", "Performance Marketing"],
      startDate: "Jan 2026",
      endDate: "Mar 2026",
      duration: "3 Months",
      year: "2026"
    },
    problemStatement: "Earthy Crafts required an immersive digital storefront. We approached this challenge by focusing on organic materials and smooth animations. Every element was designed to feel tactile, reacting fluidly to user interactions and creating a premium luxury shopping experience.",
    gallery: defaultGallery,
    execution: defaultExecution,
    strategy: defaultStrategy,
    impact: defaultImpact,
    relatedProjects: defaultRelatedProjects,
    cta: defaultCta
  },
  "global-peace-ministry": {
    slug: "global-peace-ministry",
    hero: {
      tagLine: "Brand System & Spatial Design",
      titleFirstPart: "Global",
      titleSecondPart: "Peace.",
      summary: "Designed and developed a modern nonprofit website for Global Peace Ministry, focused on spreading peace, community empowerment, and spiritual values.",
      bgImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=2000&h=1200&fit=crop&q=80",
      clientLogoBase64: defaultLogo
    },
    details: {
      client: "Global Peace Ministry",
      industry: "Nonprofit / Charity",
      services: ["Branding", "SEO", "Web"],
      startDate: "Feb 2026",
      endDate: "May 2026",
      duration: "4 Months",
      year: "2026"
    },
    problemStatement: "The ministry needed a digital presence that conveyed warmth and spiritual connection. We crafted a spatial design system that breathes life into their mission, using serene color palettes and organic scroll interactions to guide the user through their core initiatives.",
    gallery: defaultGallery,
    execution: defaultExecution,
    strategy: defaultStrategy,
    impact: defaultImpact,
    relatedProjects: defaultRelatedProjects,
    cta: defaultCta
  },
  "ecotellus": {
    slug: "ecotellus",
    hero: {
      tagLine: "Product Design & Design Ops",
      titleFirstPart: "Eco",
      titleSecondPart: "tellus.",
      summary: "Built a modern sustainability-focused website for Ecotellus, showcasing eco-friendly solutions and innovative environmental initiatives.",
      bgImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=2000&h=1200&fit=crop&q=80",
      clientLogoBase64: defaultLogo
    },
    details: {
      client: "Ecotellus Inc.",
      industry: "Sustainability Tech",
      services: ["Web", "Automation", "SEO"],
      startDate: "Mar 2026",
      endDate: "Aug 2026",
      duration: "5 Months",
      year: "2026"
    },
    problemStatement: "Ecotellus is pioneering environmental tech. We created a conversion-focused platform with a clean, tech-forward aesthetic. Complex data visualizations and carbon impact metrics were distilled into intuitive, engaging interactive modules.",
    gallery: defaultGallery,
    execution: defaultExecution,
    strategy: defaultStrategy,
    impact: defaultImpact,
    relatedProjects: defaultRelatedProjects,
    cta: defaultCta
  },
  "kena-impex": {
    slug: "kena-impex",
    hero: {
      tagLine: "Launch Campaign & Motion",
      titleFirstPart: "Kena",
      titleSecondPart: "Impex.",
      summary: "Developed a professional corporate website for Kena Impex, showcasing their global import-export services with a modern design and clear branding.",
      bgImage: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=2000&h=1200&fit=crop&q=80",
      clientLogoBase64: defaultLogo
    },
    details: {
      client: "Kena Impex",
      industry: "Global Logistics",
      services: ["Ads", "Web", "Automation"],
      startDate: "Aug 2026",
      endDate: "Oct 2026",
      duration: "2 Months",
      year: "2026"
    },
    problemStatement: "A high-performance corporate platform built for scale. Kena Impex demanded authority and clarity. We delivered a robust user experience with custom motion paths that highlight their global logistics capabilities.",
    gallery: defaultGallery,
    execution: defaultExecution,
    strategy: defaultStrategy,
    impact: defaultImpact,
    relatedProjects: defaultRelatedProjects,
    cta: defaultCta
  },
  "hvh-globals": {
    slug: "hvh-globals",
    hero: {
      tagLine: "Identity & Strategy",
      titleFirstPart: "HVH",
      titleSecondPart: "Globals.",
      summary: "Created a modern and high-performance web experience for HVH, featuring smooth animations, premium visuals, and a futuristic design.",
      bgImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=2000&h=1200&fit=crop&q=80",
      clientLogoBase64: defaultLogo
    },
    details: {
      client: "HVH Globals",
      industry: "Corporate Strategy",
      services: ["Branding", "SEO", "Web"],
      startDate: "May 2026",
      endDate: "Nov 2026",
      duration: "6 Months",
      year: "2026"
    },
    problemStatement: "We reinvented HVH Globals' identity from the ground up. By blending sleek futuristic UI patterns with incredibly smooth Framer Motion transitions, the platform completely repositioned them in the enterprise consulting market.",
    gallery: defaultGallery,
    execution: defaultExecution,
    strategy: defaultStrategy,
    impact: defaultImpact,
    relatedProjects: defaultRelatedProjects,
    cta: defaultCta
  },
  "eyve": {
    slug: "eyve",
    hero: {
      tagLine: "Web App & UX Research",
      titleFirstPart: "EY",
      titleSecondPart: "VE.",
      summary: "Designed a premium beauty eCommerce website for EYVE, focused on showcasing skincare and beauty products through a modern shopping experience.",
      bgImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=2000&h=1200&fit=crop&q=80",
      clientLogoBase64: defaultLogo
    },
    details: {
      client: "EYVE Beauty",
      industry: "Luxury eCommerce",
      services: ["Web", "SEO", "Branding", "Social Media"],
      startDate: "Sep 2026",
      endDate: "Dec 2026",
      duration: "4 Months",
      year: "2026"
    },
    problemStatement: "EYVE required an elegant, seamless eCommerce journey. We conducted extensive UX research to understand beauty consumers, leading to a highly refined, conversion-driven web application with a deeply premium aesthetic.",
    gallery: defaultGallery,
    execution: defaultExecution,
    strategy: defaultStrategy,
    impact: defaultImpact,
    relatedProjects: defaultRelatedProjects,
    cta: defaultCta
  },
  "stt-hair": {
    slug: "stt-hair",
    hero: {
      tagLine: "SEO Strategy & Optimization",
      titleFirstPart: "STT.",
      titleSecondPart: "Hair",
      summary: "Developed a comprehensive SEO strategy for STT Hair to drive organic growth, improve search visibility, and increase online bookings.",
      bgImage: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=2000&h=1200&fit=crop&q=80",
      clientLogoBase64: defaultLogo
    },
    details: {
      client: "STT Hair",
      industry: "Beauty & Salon",
      services: ["SEO", "Growth Strategy"],
      startDate: "Oct 2026",
      endDate: "Ongoing",
      duration: "Ongoing",
      year: "2026"
    },
    problemStatement: "STT Hair needed stronger online visibility to attract local clients. We implemented a robust SEO strategy targeting high-intent keywords, optimizing local search presence, and enhancing technical site health to drive sustainable organic traffic.",
    gallery: defaultGallery,
    execution: defaultExecution,
    strategy: defaultStrategy,
    impact: defaultImpact,
    relatedProjects: defaultRelatedProjects,
    cta: defaultCta
  },
  "xavion": {
    slug: "xavion",
    hero: {
      tagLine: "Technical SEO & Growth",
      titleFirstPart: "Xav",
      titleSecondPart: "ion.",
      summary: "Executed a high-impact technical SEO campaign for Xavion, focusing on performance, site architecture, and content optimization to dominate search results.",
      bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=2000&h=1200&fit=crop&q=80",
      clientLogoBase64: defaultLogo
    },
    details: {
      client: "Xavion",
      industry: "Technology",
      services: ["SEO", "Performance Marketing"],
      startDate: "Sep 2026",
      endDate: "Ongoing",
      duration: "Ongoing",
      year: "2026"
    },
    problemStatement: "Xavion required a technical SEO overhaul to compete in a saturated tech market. We conducted extensive audits, restructured the site architecture, and implemented a content strategy that significantly boosted their domain authority and search rankings.",
    gallery: defaultGallery,
    execution: defaultExecution,
    strategy: defaultStrategy,
    impact: defaultImpact,
    relatedProjects: defaultRelatedProjects,
    cta: defaultCta
  },
  "rajlaxmi": {
    slug: "rajlaxmi",
    hero: {
      tagLine: "Social Media Management",
      titleFirstPart: "Raj",
      titleSecondPart: "laxmi.",
      summary: "Elevated Rajlaxmi's brand presence through strategic social media management, engaging content creation, and community building.",
      bgImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=2000&h=1200&fit=crop&q=80",
      clientLogoBase64: defaultLogo
    },
    details: {
      client: "Rajlaxmi",
      industry: "Retail / Fashion",
      services: ["Social Media", "Content Strategy"],
      startDate: "Jul 2026",
      endDate: "Ongoing",
      duration: "Ongoing",
      year: "2026"
    },
    problemStatement: "Rajlaxmi sought to modernize its brand image and connect with a younger demographic. We developed a vibrant social media strategy centered around high-quality visuals, influencer partnerships, and interactive campaigns that revitalized their online community.",
    gallery: defaultGallery,
    execution: defaultExecution,
    strategy: defaultStrategy,
    impact: defaultImpact,
    relatedProjects: defaultRelatedProjects,
    cta: defaultCta
  },
  "ecoplanet-motors": {
    slug: "ecoplanet-motors",
    hero: {
      tagLine: "Social & Performance Marketing",
      titleFirstPart: "Eco",
      titleSecondPart: "planet.",
      summary: "Drove sales and brand awareness for Ecoplanet motors through a combined approach of targeted performance marketing and dynamic social media engagement.",
      bgImage: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=2000&h=1200&fit=crop&q=80",
      clientLogoBase64: defaultLogo
    },
    details: {
      client: "Ecoplanet Motors",
      industry: "Automotive / EV",
      services: ["Social Media", "Performance Marketing"],
      startDate: "Jun 2026",
      endDate: "Ongoing",
      duration: "Ongoing",
      year: "2026"
    },
    problemStatement: "Ecoplanet motors needed to launch their new EV line with maximum impact. We deployed a highly targeted performance marketing campaign synchronized with an aggressive social media rollout, generating thousands of qualified leads and significantly boosting presales.",
    gallery: defaultGallery,
    execution: defaultExecution,
    strategy: defaultStrategy,
    impact: defaultImpact,
    relatedProjects: defaultRelatedProjects,
    cta: defaultCta
  },
  "eminence": {
    slug: "eminence",
    hero: {
      tagLine: "Social Media Strategy",
      titleFirstPart: "Emi",
      titleSecondPart: "nence.",
      summary: "Crafted a luxury social media narrative for Eminence, focusing on aesthetic consistency and premium audience engagement.",
      bgImage: "https://images.unsplash.com/photo-1555529771-835f59bfc50c?w=2000&h=1200&fit=crop&q=80",
      clientLogoBase64: defaultLogo
    },
    details: {
      client: "Eminence",
      industry: "Luxury Goods",
      services: ["Social Media", "Branding"],
      startDate: "Aug 2026",
      endDate: "Ongoing",
      duration: "Ongoing",
      year: "2026"
    },
    problemStatement: "Eminence required a social presence that matched their premium product line. We established a strict visual language and tone of voice, curating a feed that speaks directly to high-net-worth individuals and fosters exclusive community engagement.",
    gallery: defaultGallery,
    execution: defaultExecution,
    strategy: defaultStrategy,
    impact: defaultImpact,
    relatedProjects: defaultRelatedProjects,
    cta: defaultCta
  },
  "monkda": {
    slug: "monkda",
    hero: {
      tagLine: "Community & Social Media",
      titleFirstPart: "Mon",
      titleSecondPart: "kda.",
      summary: "Grew Monkda's digital footprint through authentic social media storytelling and viral content campaigns.",
      bgImage: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=2000&h=1200&fit=crop&q=80",
      clientLogoBase64: defaultLogo
    },
    details: {
      client: "Monkda",
      industry: "Lifestyle",
      services: ["Social Media", "Content Creation"],
      startDate: "May 2026",
      endDate: "Ongoing",
      duration: "Ongoing",
      year: "2026"
    },
    problemStatement: "Monkda wanted to transition from a local favorite to a recognized lifestyle brand. By leveraging short-form video content and user-generated campaigns, we exponentially increased their reach and established a loyal online following.",
    gallery: defaultGallery,
    execution: defaultExecution,
    strategy: defaultStrategy,
    impact: defaultImpact,
    relatedProjects: defaultRelatedProjects,
    cta: defaultCta
  },
  "silver-rionest": {
    slug: "silver-rionest",
    hero: {
      tagLine: "Social & Performance Ads",
      titleFirstPart: "Silver",
      titleSecondPart: "Rionest.",
      summary: "Accelerated Silver Rionest's growth with data-driven performance marketing and high-converting social media creatives.",
      bgImage: "https://images.unsplash.com/photo-1533575770077-052fa2c609fc?w=2000&h=1200&fit=crop&q=80",
      clientLogoBase64: defaultLogo
    },
    details: {
      client: "Silver Rionest",
      industry: "Jewelry",
      services: ["Social Media", "Performance Marketing"],
      startDate: "Apr 2026",
      endDate: "Ongoing",
      duration: "Ongoing",
      year: "2026"
    },
    problemStatement: "Silver Rionest needed to scale their e-commerce operations efficiently. We built a full-funnel strategy combining aspirational social content with aggressive retargeting ads, resulting in a dramatic increase in ROAS and customer lifetime value.",
    gallery: defaultGallery,
    execution: defaultExecution,
    strategy: defaultStrategy,
    impact: defaultImpact,
    relatedProjects: defaultRelatedProjects,
    cta: defaultCta
  },
  "360-eye": {
    slug: "360-eye",
    hero: {
      tagLine: "Social Media Management",
      titleFirstPart: "360",
      titleSecondPart: "Eye.",
      summary: "Developed a comprehensive social media presence for 360 Eye, highlighting their innovative services through engaging digital content.",
      bgImage: "https://images.unsplash.com/photo-1550051287-797746535565?w=2000&h=1200&fit=crop&q=80",
      clientLogoBase64: defaultLogo
    },
    details: {
      client: "360 Eye",
      industry: "Healthcare / Tech",
      services: ["Social Media"],
      startDate: "Jul 2026",
      endDate: "Ongoing",
      duration: "Ongoing",
      year: "2026"
    },
    problemStatement: "360 Eye required a strategy to educate and engage their audience on complex services. We created a content mix of educational infographics, behind-the-scenes videos, and patient testimonials to build trust and authority.",
    gallery: defaultGallery,
    execution: defaultExecution,
    strategy: defaultStrategy,
    impact: defaultImpact,
    relatedProjects: defaultRelatedProjects,
    cta: defaultCta
  },
  "daiki-digital": {
    slug: "daiki-digital",
    hero: {
      tagLine: "Branding & Identity",
      titleFirstPart: "Daiki",
      titleSecondPart: "Digital.",
      summary: "Reimagined the brand identity for Daiki Digital, creating a cohesive visual system that communicates innovation and reliability.",
      bgImage: "https://images.unsplash.com/photo-1557683311-eac922347aa1?w=2000&h=1200&fit=crop&q=80",
      clientLogoBase64: defaultLogo
    },
    details: {
      client: "Daiki Digital",
      industry: "Digital Agency",
      services: ["Branding", "Identity System"],
      startDate: "Feb 2026",
      endDate: "Apr 2026",
      duration: "3 Months",
      year: "2026"
    },
    problemStatement: "Daiki Digital's outdated branding no longer reflected their cutting-edge services. We designed a dynamic identity system featuring a modern logo, vibrant color palette, and bespoke typography that positioned them as industry leaders.",
    gallery: defaultGallery,
    execution: defaultExecution,
    strategy: defaultStrategy,
    impact: defaultImpact,
    relatedProjects: defaultRelatedProjects,
    cta: defaultCta
  },
  "vachhani-foods": {
    slug: "vachhani-foods",
    hero: {
      tagLine: "Brand Strategy & Design",
      titleFirstPart: "Vachhani",
      titleSecondPart: "Foods.",
      summary: "Revitalized Vachhani Foods' brand identity with a fresh, appetizing visual language and strategic market positioning.",
      bgImage: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=2000&h=1200&fit=crop&q=80",
      clientLogoBase64: defaultLogo
    },
    details: {
      client: "Vachhani Foods",
      industry: "FMCG / Food",
      services: ["Branding", "Packaging Design"],
      startDate: "Jan 2026",
      endDate: "Mar 2026",
      duration: "3 Months",
      year: "2026"
    },
    problemStatement: "Vachhani Foods needed a brand refresh to stand out on crowded supermarket shelves. We redesigned their packaging and corporate identity, focusing on natural ingredients and heritage, which successfully increased shelf appeal and market share.",
    gallery: defaultGallery,
    execution: defaultExecution,
    strategy: defaultStrategy,
    impact: defaultImpact,
    relatedProjects: defaultRelatedProjects,
    cta: defaultCta
  }
};
