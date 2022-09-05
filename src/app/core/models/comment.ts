import { User } from './user';

export interface Comment {
  user: User;
  text: string;
  date: number;
  replies: Comment[];
  likes: number;
  recipeId: number;
}
