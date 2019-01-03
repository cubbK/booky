import { createStore, applyMiddleware } from "redux";

// Middleware
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import { composeWithDevTools } from "redux-devtools-extension";
import { loadingBarMiddleware } from 'react-redux-loading-bar'

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native

import { combinedReducers } from "./reducers/index";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["jwt", "user"]
};

const persistedReducer = persistReducer(persistConfig, combinedReducers);


export const store = createStore(
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(loadingBarMiddleware(), promiseMiddleware(), thunk)
  )
);

export const persistor = persistStore(store);
