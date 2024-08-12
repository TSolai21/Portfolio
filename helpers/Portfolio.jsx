import { imagesSources } from "./imageSources";

export const portfolio = [
  {
    name: "watchnext ",
    image: imagesSources.portfolio1,
    link: "https://watchnext-movie.vercel.app/",
    code: "https://github.com/TSolai21/watchnext-movie-app",
    techStack: ["Html", "Css", "Tailwind", "React", "Firebase"],
    completed: false,
  },
  {
    name: "my portfolio",
    image: imagesSources.portfolio,
    link: "https://solaikumar.vercel.app/",
    code: "https://github.com/TSolai21/Portfolio",
    techStack: ["Html", "Css", "Tailwind", "nextjs"],
    completed: true,
  },
  {
    name: "Marksheet",
    image: imagesSources.marksheet,
    link: "https://score-sheet-manager.vercel.app/",
    code: "https://github.com/TSolai21/ScoreSheetManager",
    techStack: ["Html", "Css", "Scss", "nextjs", "MongoDB"],
    completed: true,
  },
];
