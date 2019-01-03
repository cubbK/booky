import { Link, Links } from "./linksReducer";
import {
  FETCH_FAVORITE_LINKS_COUNT,
  PENDING,
  FULFILLED,
  REJECTED
} from "../actionTypes";
import produce from "immer";

export interface Count {
  data: number | null;
  loading: boolean;
  error: any;
}

export interface Favorites {
  count: Count;
  links: Links;
}

const defaultState: Favorites = {
  count: {
    data: null,
    loading: false,
    error: null
  },
  links: {
    data: [],
    loading: false,
    error: null
  }
};

export function favoritesReducer(state = defaultState, action: any) {
  switch (action.type) {
    case FETCH_FAVORITE_LINKS_COUNT + PENDING:
      return produce(state, draftState => {
        draftState.count.loading = true;
      });

    case FETCH_FAVORITE_LINKS_COUNT + FULFILLED:
      return produce(state, draftState => {
        draftState.count.loading = false;
        draftState.count.data = action.payload.data;
      });

    case FETCH_FAVORITE_LINKS_COUNT + REJECTED:
      return produce(state, draftState => {
        draftState.count.loading = false;
        draftState.count.error = action.payload;
      });

    default:
      return state;
  }
}
