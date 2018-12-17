import axios from "axios";
import { SET_JWT, REFRESH_JWT, SET_NEW_LINK } from "./actionTypes";
import { API_URL } from "../constants";
import { fetchWithAuth } from "../helpers/fetchWithAuth";

export function setJwt(jwt: string) {
  return {
    type: SET_JWT,
    payload: jwt
  };
}

export function refreshJWT(jwt: string | null) {
  return {
    type: REFRESH_JWT,
    payload: axios.get(`${API_URL}/auth/refresh/${jwt}`, {
      headers: { Authorization: `Bearer ${jwt}` }
    })
  };
}

export function setNewLink(link: any) {
  return {
    type: SET_NEW_LINK,
    payload: link
  };
}
