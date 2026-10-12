export interface Project {
    id: string;
    title: string;
    category: "swe" | "gamedev";
    featured?: boolean;
    summary: string;
    details?: string;
    tags: string[];
    month?: number;
    year: number;
    thumbnail?: string;
    liveUrl?: string;
    repoUrl?: string;
}