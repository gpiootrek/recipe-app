import { Category } from './category';
export interface Recipe {
    id: number;
    name: string;
    category: Category;
    ingredients?: [string | undefined, string | undefined][];
    youtubeUrl?: string;
    tags?: string[];
    thumbUrl?: string;
    instructions?: string;
    area?: string;
    source?: string;
    ratings?: number[];
}