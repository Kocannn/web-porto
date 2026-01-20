export interface TechItem {
  name: string;
  icon: string;
  color: string;
  level: number;
}

export const techStack: TechItem[] = [
  { name: "React", icon: "⚛️", color: "#61DAFB", level: 90 },
  { name: "TypeScript", icon: "📘", color: "#3178C6", level: 85 },
  { name: "Go", icon: "🐹", color: "#00ADD8", level: 80 },
  { name: "Laravel", icon: "🔺", color: "#FF2D20", level: 85 },
  { name: "Next.js", icon: "▲", color: "#ffffff", level: 88 },
  { name: "PostgreSQL", icon: "🐘", color: "#4169E1", level: 75 },
  { name: "Docker", icon: "🐳", color: "#2496ED", level: 70 },
  { name: "Tailwind", icon: "🎨", color: "#06B6D4", level: 92 },
];

export const additionalSkills: string[] = [
  "Git",
  "Linux", 
  "REST API",
  "GraphQL",
  "gRPC",
  "Redis",
  "MongoDB",
  "MySQL",
  "Firebase",
  "AWS",
  "Vercel",
  "Figma"
];
