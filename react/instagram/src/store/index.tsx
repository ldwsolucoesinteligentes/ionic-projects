import React, { createContext, ReactNode, useEffect, useReducer } from "react";
import { AppAction } from "./actions";
import { loggerMiddleware } from "./middleware";
import { reducer } from "./reducers";
import {
  AppState,
  initialState,
  getPersistedState,
  persisteState,
} from "./state";

const fullInitialState: AppState = {
  ...initialState,
  ...getPersistedState(),
};

const store = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}>({ state: initialState, dispatch: () => undefined });
const { Provider, Consumer } = store;
const loggerReducer = loggerMiddleware(reducer);

function AppContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(loggerReducer, fullInitialState);
  // useEffect(() => {
  //   persisteState({ posts: state.posts });
  // }, [state]);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
}

export { store, AppContextProvider, Consumer };
