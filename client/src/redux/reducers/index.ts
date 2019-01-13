import { combineReducers, Reducer } from "redux";
import { jwtReducer } from "./jwtReducer";
import { userReducer } from "./userReducer";
import { Groups, groupsReducer } from "./groupsReducer";
import { Links, linksReducer } from "./linksReducer";
import { loadingBarReducer } from 'react-redux-loading-bar'
import { FavoritesCount, favoritesCountReducer } from "./favoritesCountReducer";

export interface CombinedReducers {
  jwt: string | null;
  user: any;
  groups: Groups,
  links: Links
  favoritesCount: FavoritesCount
  loadingBar: any
}

export const combinedReducers: Reducer<CombinedReducers> = combineReducers<CombinedReducers>({
  jwt: jwtReducer,
  user: userReducer,
  groups: groupsReducer,
  links: linksReducer,
  favoritesCount: favoritesCountReducer,
  loadingBar: loadingBarReducer,
});


