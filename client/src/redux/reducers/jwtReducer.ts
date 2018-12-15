import { SET_JWT, REFRESH_JWT } from "../actionTypes";

const defaultState: null | string = null;

export function jwtReducer(state = defaultState, action: any) {
  switch (action.type) {
    case SET_JWT:
      return action.payload;
    case REFRESH_JWT + "_FULFILLED":
      return action.payload.data;
    default:
      return state;
  }
}
