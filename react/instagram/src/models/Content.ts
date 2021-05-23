import { CommentModel } from "./Comment";

export interface ContentModel {
  description?: string;
  imageUrl: string;
  comments?: CommentModel[];
}
