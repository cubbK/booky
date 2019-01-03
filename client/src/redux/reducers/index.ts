import { combineReducers, Reducer } from "redux";
import { jwtReducer } from "./jwtReducer";
import { userReducer } from "./userReducer";
import { Groups, groupsReducer } from "./groupsReducer";
import { Links, linksReducer } from "./linksReducer";
import { loadingBarReducer } from 'react-redux-loading-bar'

export interface CombinedReducers {
  jwt: string | null;
  user: any;
  groups: Groups,
  links: Links
  loadingBar: any
}

export const combinedReducers: Reducer<CombinedReducers> = combineReducers<CombinedReducers>({
  jwt: jwtReducer,
  user: userReducer,
  groups: groupsReducer,
  links: linksReducer,
  loadingBar: loadingBarReducer,
});


