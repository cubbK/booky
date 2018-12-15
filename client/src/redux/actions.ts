import axios from "axios";
import { SET_JWT, GET_LINKS, REFRESH_JWT } from "./actionTypes";
import { API_URL } from "../constants";
import { fetchWithAuth } from "../helpers/fetchWithAuth";

export function setJwt(jwt: string) {
  return {
    type: SET_JWT,
    payload: jwt
  };
}

export function getLinks() {
  return {
    type: GET_LINKS,
    payload: fetchWithAuth({
      method: "GET",
      url: `${API_URL}/links`
    })
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
