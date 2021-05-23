import { AppAction } from "../actions";
import { AppState } from "../state";

export const loggerMiddleware = (
  reducer: (state: AppState, action: AppAction) => AppState
) => {
  const reducerLogger = (state: AppState, action: AppAction) => {
    const nextState = reducer(state, action);
    console.log(
      "%cPrevious State:",
      "color: #9E9E9E; font-weight: 700;",
      state
    );
    console.log("%cAction:", "color: #00A7F7; font-weight: 700;", action);
    console.log(
      "%cNext State:",
      "color: #47B04B; font-weight: 700;",
      nextState
    );
    return nextState;
  };
  return reducerLogger;
};
