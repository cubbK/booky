import { combineReducers, Reducer } from "redux";
import { jwtReducer } from "./jwtReducer";
import { userReducer } from "./userReducer";
import { Groups, groupsReducer } from "./groupsReducer";
import { Links, linksReducer } from "./linksReducer";
import { loadingBarReducer } from 'react-redux-loading-bar'
import { Favorites, favoritesReducer } from "./favoritesReducer";

export interface CombinedReducers {
  jwt: string | null;
  user: any;
  groups: Groups,
  links: Links
  favorites: Favorites
  loadingBar: any
}

export const combinedReducers: Reducer<CombinedReducers> = combineReducers<CombinedReducers>({
  jwt: jwtReducer,
  user: userReducer,
  groups: groupsReducer,
  links: linksReducer,
  favorites: favoritesReducer,
  loadingBar: loadingBarReducer,
});


