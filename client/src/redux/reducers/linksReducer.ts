import { GET_LINKS } from "../actionTypes";


const defaultState: string[] = [];

export function linksReducer(state = defaultState, action: any) {
  switch (action.type) {
    case GET_LINKS:
      return action.payload;
    default:
      return state;
  }
}
