import axios, { AxiosRequestConfig } from "axios";
import produce from "immer";
import { store } from "../redux/store";
import { refreshJWT } from "../redux/actions";

export async function fetchWithAuthAndRefreshJWT(config: AxiosRequestConfig) {
  const state = store.getState();
  const jwt = state.jwt;

  store.dispatch(refreshJWT(jwt));

  const configWithAuth = produce(config, draftConfig => {
    draftConfig.headers.Authorization = `Bearer ${jwt}`;
  });

  return axios(configWithAuth);
}
