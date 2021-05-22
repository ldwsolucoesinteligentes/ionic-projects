import { Post } from "../components/post-card/post";

export interface User {
  id: string;
  userName: string;
  userImageURL: string;
  fullName: string;
  birthday: string;
  active: boolean;
  biography: string;
  posts?: Post[];
}
