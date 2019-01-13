import { FETCH_FAVORITE_LINKS_COUNT, FULFILLED } from "../actionTypes";

export type FavoritesCount = number;

const defaultState: FavoritesCount = 0;

export function favoritesCountReducer(state = defaultState, action: any) {
  switch (action.type) {
    case FETCH_FAVORITE_LINKS_COUNT + FULFILLED:
      return action.payload.data;

    default:
      return state;
  }
}
