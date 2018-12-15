import { combineReducers, Reducer } from "redux";
import { jwtReducer } from "./jwtReducer";
import { userReducer } from "./userReducer";
import { linksReducer, Links } from "./linksReducer";

export interface CombinedReducers {
  jwt: string | null;
  user: any;
  links: Links;
}

export const combinedReducers: Reducer<CombinedReducers> = combineReducers<CombinedReducers>({
  jwt: jwtReducer,
  user: userReducer,
  links: linksReducer
});


