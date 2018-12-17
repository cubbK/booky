import { combineReducers, Reducer } from "redux";
import { jwtReducer } from "./jwtReducer";
import { userReducer } from "./userReducer";
import { newLinkReducer } from "./newLinkReducer";

export interface CombinedReducers {
  jwt: string | null;
  user: any;
  newLink: any;
}

export const combinedReducers: Reducer<CombinedReducers> = combineReducers<CombinedReducers>({
  jwt: jwtReducer,
  user: userReducer,
  newLink: newLinkReducer
});


