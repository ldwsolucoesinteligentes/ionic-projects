import { Post } from "../../models/Post";

export interface AppState {
  message?: string;
  isLoading: boolean;
  posts: Post[];
  user: any[];
  configuration: any;
}

export const initialState: AppState = {
  posts: [],
  user: [],
  configuration: {},
  isLoading: false,
};

export const PERSISTED_STATE_KEY = "persistedState";

export const getPersistedState = () =>
  JSON.parse(window.localStorage[PERSISTED_STATE_KEY] || "{}");
export const persisteState = (data: Partial<AppState>) => {
  window.localStorage[PERSISTED_STATE_KEY] = JSON.stringify(data);
};
