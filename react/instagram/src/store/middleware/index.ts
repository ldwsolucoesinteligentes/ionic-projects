import { AppAction } from "../actions";
import { AppState } from "../state";

export * from "./logger";

export const combineReducers =
  (slices: any) => (state: AppState, action: AppAction) =>
    Object.keys(slices).reduce(
      (acc: any, prop: any) => ({
        ...acc,
        [prop]: slices[prop](acc[prop], action),
      }),
      state
    );
