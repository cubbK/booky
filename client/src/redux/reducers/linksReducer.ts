import { GET_LINKS } from "../actionTypes";
import produce from "immer";

export interface Links {
  data: any[];
  loading: boolean;
  error: string | null;
}

const defaultState: Links = {
  data: [],
  loading: false,
  error: null
};

export function linksReducer(state = defaultState, action: any) {
  switch (action.type) {
    case GET_LINKS + "_PENDING":
      return produce(state, draftState => {
        draftState.loading = true;
      });
    case GET_LINKS + "_FULFILLED":
      return produce(state, draftState => {
        draftState.loading = false;
        draftState.data = action.payload.data;
      });
    case GET_LINKS + "_REJECTED":
      return produce(state, draftState => {
        draftState.loading = false;
        draftState.error = action.payload;
      });
    default:
      return state;
  }
}
