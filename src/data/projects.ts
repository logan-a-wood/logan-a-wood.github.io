import type { Project } from "../types/project";

// This is where I add my project details
export const projects: Project[] = [
    // SWE PROJECTS
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
        id: "qt-bartender-simulator",
        title: "Qt Bartender Simulator",
        category: "swe",
        summary: "Developed a 2D physics-based drink mixing game in a 5-person team as final project for Software Practice 2 class.",
        tags: ["C++", "Qt", "Box2D", "Team", "School"],
        month: 4,
        year: 2025,
        repoUrl: "https://github.com/logan-a-wood/cs3505-assignment9-BartenderSimulator",
    },
    {
        id: "qt-sprite-editor",
        title: "Qt Sprite Editor",
        category: "swe",
        summary: "Engineered a 2D sprite editor program in a 5-person team as a project for Software Practice 2 class.",
        tags: ["C++", "Qt", "Team", "School"],
        month: 3,
        year: 2025,
        repoUrl: "https://github.com/logan-a-wood/cs3505-assignment8-SpriteEditor",
    },
    {
        id: "qt-simon-game",
        title: "Qt Simon Game",
        category: "swe",
        summary: "Programmed a 'Simon Game' in a team of 2.",
        tags: ["C++", "Qt", "Team", "School"],
        month: 2,
        year: 2025,
        repoUrl: "https://github.com/logan-a-wood/cs3505-assignment6-SimonGame",
    },
    // GAMES PROJECTS
    {
        id: "quick-hide-the-booze",
        title: "Quick, Hide the Booze!",
        category: "gamedev",
        summary: "A stylized physics-based comedy game about cleaning up your dorm room after a big party.",
        tags: ["Unity", "C#", "Team", "Published", "Director"],
        year: 2026,
        liveUrl: "https://meepo-productions.itch.io/quick-hide-the-booze",
    },
    {
        id: "cube",
        title: "CUBE",
        category: "gamedev",
        summary: "A stylized level-based puzzle game where you roll around as a cube.",
        tags: ["Unity", "C#", "Solo", "Blender", "Ableton"],
        year: 2021,
        liveUrl: "https://meepo-productions.itch.io/cube",
        // repoUrl: "https://github.com/logan-a-wood/CUBE",
    },
    {
        id: "blob-arena",
        title: "Blob Arena",
        category: "gamedev",
        summary: "A fun multiplayer arena game where you and your friends run around shooting each other.",
        tags: ["Unity", "C#", "Solo", "Blender"],
        year: 2022,
        liveUrl: "https://meepo-productions.itch.io/blob-arena",
        // repoUrl: "https://github.com/logan-a-wood/Blob-Arena",
    }
];