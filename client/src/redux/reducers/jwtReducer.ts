import { SET_JWT, REFRESH_JWT } from "../actionTypes";

const defaultState: null | string = null;

export function jwtReducer(state = defaultState, action: any) {
  switch (action.type) {
    case SET_JWT:
      return action.payload;
    case REFRESH_JWT:
      if (state === null) {
        // if jwt is null then the user already logged out, no need to set the new one
        return state;
      } else {
        return action.payload;
      }
    default:
      return state;
  }
}
