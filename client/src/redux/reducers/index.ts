import { combineReducers, Reducer } from "redux";
import { jwtReducer } from "./jwtReducer";
import { userReducer } from "./userReducer";
import { Groups, groupsReducer } from "./groupsReducer";

export interface CombinedReducers {
  jwt: string | null;
  user: any;
  groups: Groups
}

export const combinedReducers: Reducer<CombinedReducers> = combineReducers<CombinedReducers>({
  jwt: jwtReducer,
  user: userReducer,
  groups: groupsReducer
});


