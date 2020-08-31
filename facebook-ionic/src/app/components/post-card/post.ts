import { User } from "src/app/profile/profile";
import { MediaTypes } from "./media";
import { PostComment } from "./post-comment";
import { Interaction } from "./interaction";

export interface Post {
  id: string;
  author: Pick<User, "id" | "userName" | "userImageURL">;
  date: string;
  title: string;
  location?: [{ lat: number; long: number }];
  media?: MediaTypes[];
  body: string;
  postIn?: string;
  views: number;
  shares?: [
    {
      userId: string;
    }
  ];
  comments: PostComment[];
  interactions: Interaction[];
}
