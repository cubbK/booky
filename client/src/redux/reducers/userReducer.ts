import { decode } from "jsonwebtoken";
import { SET_JWT } from "../actionTypes";

const defaultState = null;

export function userReducer(state = defaultState, action: any) {
  switch (action.type) {
    case SET_JWT:
      return decode(action.payload);
    default:
      return state;
  }
}
