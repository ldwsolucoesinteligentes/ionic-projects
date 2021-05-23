import { ActionType, IAction } from "./interfaces";

export interface AsyncCallErrorAction
  extends IAction<string, ActionType.AsyncCallError> {}

export class AsyncCallError implements AsyncCallErrorAction {
  type: ActionType.AsyncCallError = ActionType.AsyncCallError;
  constructor(public payload: string) {}
}
