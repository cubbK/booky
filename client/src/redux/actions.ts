import axios from "axios";
import { SET_JWT, REFRESH_JWT, FETCH_GROUPS, FETCH_LINKS } from "./actionTypes";
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

export function fetchGroups () {
  return {
    type: FETCH_GROUPS,
    payload: fetchWithAuth({url: `${API_URL}/links/groups`})
  }
}

export function fetchLinks(group: string) {
  return {
    type: FETCH_LINKS,
    payload: fetchWithAuth({url: `${API_URL}/links/group/${group}`})
  }
}
