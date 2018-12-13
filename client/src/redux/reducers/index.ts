import { combineReducers, Reducer } from "redux";
import { jwtReducer } from "./jwtReducer";
import { userReducer } from "./userReducer";
import { linksReducer } from "./linksReducer";

interface CombinedReducers {
  jwt: string | null;
  user: any;
  links: any;
}

export const combinedReducers: Reducer<CombinedReducers> = combineReducers<CombinedReducers>({
  jwt: jwtReducer,
  user: userReducer,
  links: linksReducer
});


