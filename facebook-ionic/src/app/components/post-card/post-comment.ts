import { User } from "src/app/profile/profile";
import { Interaction } from "./interaction";

export interface PostComment {
  id: string;
  author: Pick<User, "id" | "userName" | "userImageURL">;
  comment: string;
  date: string;
  interactions: [
    {
      userId: "7153dc08-d2d3-4c44-81bf-28cfa9079ff9";
      interaction: Interaction;
    }
  ];
  comments: PostComment[];
}
