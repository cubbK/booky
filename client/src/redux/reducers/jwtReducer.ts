import { SET_JWT } from "../actionTypes";

const defaultState: null | string = null;

export function jwtReducer(state = defaultState, action: any) {
  switch (action.type) {
    case SET_JWT:
      return action.payload;
    default:
      return state;
  }
}
