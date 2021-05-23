import { LikeModel } from "./Like";
import { User } from "./User";

export interface CommentModel {
  user: User;
  comment: string;
  like?: LikeModel;
  comments?: CommentModel[];
  dateTime: string;
}
