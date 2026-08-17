import type { Project } from "../types/project";

// This is where I add my project details
export const projects: Project[] = [
    {
        id: "rsc",
        title: "React Spectrum Charts Animations",
        category: "swe",
        summary: "Contributed to Adobe's React Spectrum Charts library by developing an animation system for integrating animations for charts.",
        tags: ["TypeScript", "React", "Internship", "Vega"],
        year: 2026,
        repoUrl: "https://github.com/adobe/react-spectrum-charts",
    },
    {
        id: "cube",
        title: "CUBE",
        category: "gamedev",
        summary: "A stylized, level-based puzzle game where you roll around as a cube.",
        tags: ["Unity", "C#", "Solo", "Blender", "Ableton"],
        year: 2021,
        liveUrl: "https://meepo-productions.itch.io/cube",
        repoUrl: "https://github.com/logan-a-wood/CUBE",
    },
    {
        id: "blob-arena",
        title: "Blob Arena",
        category: "gamedev",
        summary: "A fun multiplayer arena game where you and your friends run around shooting each other.",
        tags: ["Unity", "C#", "Solo", "Blender"],
        year: 2022,
        liveUrl: "https://meepo-productions.itch.io/blob-arena",
        repoUrl: "https://github.com/logan-a-wood/Blob-Arena",
    }
];