import { SET_NEW_LINK } from "../actionTypes";

const defaultState = null;

export function newLinkReducer(state = defaultState, action: any) {
  switch (action.type) {
    case SET_NEW_LINK:
      return action.payload;
    default:
      return state;
  }
}
