const fs = require('fs');
const path = require('path');

const templatePath = path.join(__dirname, '../app/showcase/page.tsx');
let template = fs.readFileSync(templatePath, 'utf8');

const projects = [
  {
    slug: "earthy-crafts",
    title: "Earthy Crafts",
    industry: "E-Commerce",
    services: ["Web Design", "WebGL", "Commerce"],
    date: "2026",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1400&h=900&fit=crop&q=80",
    summary: "Earthy Crafts is a luxury handcrafted decor platform that blends timeless artistry with modern design, showcasing premium marble sculptures and artisan-crafted home decor pieces."
  },
  {
    slug: "global-peace-ministry",
    title: "Global Peace Ministry",
    industry: "Nonprofit",
    services: ["Brand System", "Spatial Design"],
    date: "2026",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&h=900&fit=crop&q=80",
    summary: "Designed and developed a modern nonprofit website for Global Peace Ministry, focused on spreading peace, community empowerment, and spiritual values through an engaging and user-friendly digital experience."
  },
  {
    slug: "ecotellus",
    title: "Ecotellus",
    industry: "Sustainability",
    services: ["Product Design", "Design Ops"],
    date: "2026",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&h=900&fit=crop&q=80",
    summary: "Built a modern sustainability-focused website for Ecotellus, showcasing eco-friendly solutions and innovative environmental initiatives through a clean, conversion-focused digital experience."
  },
  {
    slug: "kena-impex",
    title: "Kena Impex",
    industry: "Corporate",
    services: ["Launch Campaign", "Motion"],
    date: "2026",
    image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=1400&h=900&fit=crop&q=80",
    summary: "Developed a professional corporate website for Kena Impex, showcasing their global import-export services with a modern design, clear branding, and conversion-focused user experience."
  },
  {
    slug: "hvh-globals",
    title: "HVH Globals",
    industry: "Business",
    services: ["Identity", "Strategy"],
    date: "2026",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1400&h=900&fit=crop&q=80",
    summary: "Created a modern and high-performance web experience for HVH, featuring smooth animations, premium visuals, and a conversion-focused UI with a sleek futuristic design."
  },
  {
    slug: "eyve",
    title: "EYVE",
    industry: "Beauty",
    services: ["Web App", "UX Research"],
    date: "2026",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&h=900&fit=crop&q=80",
    summary: "Designed a premium beauty eCommerce website for EYVE, focused on showcasing skincare and beauty products through a modern, elegant, and conversion-driven shopping experience."
  }
];

projects.forEach(project => {
  let content = template;
  
  // Hero Title replacement
  const heroTitleTarget = 'Nexus<br /><span className="font-satoshi italic font-normal text-white/50">Space.</span>';
  const projectTitleSplit = project.title.split(" ");
  const firstPart = projectTitleSplit[0];
  const secondPart = projectTitleSplit.slice(1).join(" ") || "";
  const newHeroTitle = `${firstPart}<br /><span className="font-satoshi italic font-normal text-white/50">${secondPart}</span>`;
  content = content.replace(heroTitleTarget, newHeroTitle);
  
  // Replace Client Name
  content = content.replace(/Nexus Space Corp\./g, project.title);
  
  // Replace Industry
  content = content.replace(/Spatial Technology/g, project.industry);
  content = content.replace(/Spatial Tech/g, project.industry);

  // Replace Services array in projectSpec
  const servicesString = `["${project.services.join('", "')}"]`;
  content = content.replace(/services: \["Web", "SEO", "Branding"\]/g, `services: ${servicesString}`);

  // Replace hero image
  content = content.replace(/https:\/\/images\.unsplash\.com\/photo-1600607688969-a5bfcd646154\?q=80&w=2000&auto=format&fit=crop/g, project.image);

  // Replace description section text
  const descRegex = /const text = "We approached this challenge by dismantling the conventional grid\..*?rigid layout\.";/gs;
  content = content.replace(descRegex, `const text = "${project.summary}";`);

  const dirPath = path.join(__dirname, '../app/showcase', project.slug);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), content);
  console.log(`Generated: app/showcase/${project.slug}/page.tsx`);
});

console.log('All pages generated successfully!');
