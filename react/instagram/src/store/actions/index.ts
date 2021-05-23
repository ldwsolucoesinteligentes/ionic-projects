import { AsyncCallErrorAction } from "./async-calls";
import { AddPostsAction, LoadPostsAction } from "./post";

export type AppAction = AddPostsAction | LoadPostsAction | AsyncCallErrorAction;

export * from "./async-calls";
export * from "./post";
