import { combineReducers, Reducer } from "redux";
import { jwtReducer } from "./jwtReducer";
import { userReducer } from "./userReducer";

export interface CombinedReducers {
  jwt: string | null;
  user: any;
}

export const combinedReducers: Reducer<CombinedReducers> = combineReducers<CombinedReducers>({
  jwt: jwtReducer,
  user: userReducer,
});


