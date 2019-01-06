import axios, { AxiosRequestConfig } from "axios";
import produce from "immer";
import { store } from "../redux/store";

export async function fetchWithAuth(config: AxiosRequestConfig) {
  const state = store.getState();
  const jwt = state.jwt;

  const configWithAuth = produce(config, draftConfig => {
    if (draftConfig.headers) {
      draftConfig.headers.Authorization = `Bearer ${jwt}`;
    }
    draftConfig.headers = {}
    draftConfig.headers.Authorization = `Bearer ${jwt}`;
  });

  return axios(configWithAuth);
}
