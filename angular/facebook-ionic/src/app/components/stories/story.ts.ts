import { User } from "src/app/profile/profile";

export interface Story {
  id: string;
  author: Pick<User, "id" | "userName" | "userImageURL">;
  stories: [
    {
      imageURL: string;
      body?: string;
    }
  ];
}
