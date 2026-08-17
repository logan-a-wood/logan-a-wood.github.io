export interface Project {
    id: string;
    title: string;
    category: "swe" | "gamedev";
    summary: string;
    tags: string[];
    year: number;
    thumbnail?: string;
    liveUrl?: string;
    repoUrl?: string;
}