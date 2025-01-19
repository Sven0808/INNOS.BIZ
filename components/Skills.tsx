"use client";
import { IconCloud } from "@/components/ui/IconCloud";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "postgresql",
  "vercel",
  "jest",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "figma",
  "mongodb",
  "python",
  
];

function Skills() {
  return (
    <div>
      <div className="my-10 py-10">
        <h1 className="heading text-sky-500"> 
          Skills &amp;{" "}
          <span className = "text-transparent bg-gradient-to-r from-sky-400 to-sky-200 bg-clip-text">Technologies</span>
        </h1>
        <IconCloud iconSlugs={ slugs } />
      </div>  
    </div>
  );
}

export default Skills;
