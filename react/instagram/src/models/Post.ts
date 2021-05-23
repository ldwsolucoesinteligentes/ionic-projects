import { ContentModel } from "./Content";
import { LikeModel } from "./Like";
import { User } from "./User";

export interface Post {
  id: string;
  dateTime: string;
  user: User;
  content: ContentModel;
  likes?: LikeModel[];
  bookmarks?: {
    user: User;
    dateTime: string;
  };
}
