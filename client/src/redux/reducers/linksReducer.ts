import {
  PENDING,
  FULFILLED,
  REJECTED,
  FETCH_LINKS,
  ADD_LINK,
  SET_FAVORITE_LINK,
  DELETE_LINK
} from "../actionTypes";
import produce from "immer";
import { uniqWith, isEqual } from "lodash";

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
        const dataWithDuplicates = [...draftState.data, ...action.payload.data];
        const dataWithoutDuplicates = uniqWith(dataWithDuplicates, isEqual);
        draftState.data = dataWithoutDuplicates;
        draftState.error = null;
      });
    case FETCH_LINKS + REJECTED:
      return produce(state, draftState => {
        draftState.loading = false;
        draftState.error = action.payload;
      });

    case SET_FAVORITE_LINK + FULFILLED: {
      return produce(state, draftState => {
        for (const [index, link] of draftState.data.entries()) {
          if (link.id === action.payload.data.id) {
            draftState.data[index].isFavorite = action.payload.data.isFavorite;
          }
        }
      });
    }

    case DELETE_LINK + FULFILLED:
      return produce(state, draftState => {
        draftState.data = draftState.data.filter(
          link => link.id != action.payload.data.linkId
        );
      });

    default:
      return state;
  }
}
