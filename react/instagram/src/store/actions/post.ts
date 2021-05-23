import { Post } from "../../models/Post";
import { ActionType, IAction } from "./interfaces";

export interface AddPostsAction
  extends IAction<Post[], ActionType.AddPostsAction> {}

export interface LoadPostsAction
  extends IAction<undefined, ActionType.LoadPostsAction> {}

export class AddPosts implements AddPostsAction {
  type: ActionType.AddPostsAction = ActionType.AddPostsAction;
  constructor(public payload: Post[]) {}
}

export class LoadPosts implements LoadPostsAction {
  type: ActionType.LoadPostsAction = ActionType.LoadPostsAction;
}
