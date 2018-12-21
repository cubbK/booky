import { PENDING, FULFILLED, REJECTED, FETCH_LINKS } from "../actionTypes";
import produce from "immer";

export interface Link {
  id: number;
  url: string;
  group: string;
  isFavorite: boolean;
  title: string;
}

export interface Links {
  data: Array<Link>;
  loading: boolean;
  error: any;
}

const defaultState: Links = {
  data: [],
  loading: false,
  error: null
};

export function linksReducer(state = defaultState, action: any) {
  switch (action.type) {
    case FETCH_LINKS + PENDING:
      return produce(state, draftState => {
        draftState.loading = true;
      });
    case FETCH_LINKS + FULFILLED:
      return produce(state, draftState => {
        draftState.loading = false;
        draftState.data.push(...action.payload.data); 
        draftState.error = null;
      });
    case FETCH_LINKS + REJECTED: 
      return produce(state, draftState => {
        draftState.loading = false;
        draftState.error = action.payload;
      });
    default:
      return state;
  }
}
