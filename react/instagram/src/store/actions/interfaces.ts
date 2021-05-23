export interface IAction<M, T> {
  payload?: M;
  type: T;
}

export enum ActionType {
  AddPostsAction,
  LoadPostsAction,
  AsyncCallError,
}
