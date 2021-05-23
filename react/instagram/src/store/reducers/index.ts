import { AppAction } from "../actions";
import { ActionType } from "../actions/interfaces";
import { AppState } from "../state";

export const reducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    case ActionType.AddPostsAction: {
      return {
        ...state,
        isLoading: false,
        posts: [...state.posts, ...(action.payload || [])],
      };
    }

    case ActionType.AsyncCallError: {
      return {
        ...state,
        isLoading: false,
        message: action.payload,
      };
    }

    case ActionType.LoadPostsAction: {
      return {
        ...state,
        isLoading: true,
      };
    }

    default:
      return state;
  }
};
