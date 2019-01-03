import axios from "axios";
import {
  SET_JWT,
  REFRESH_JWT,
  FETCH_GROUPS,
  FETCH_LINKS,
  ADD_LINK,
  SET_FAVORITE_LINK,
  DELETE_LINK,
  FETCH_FAVORITE_LINKS_COUNT,
  FETCH_FAVORITES
} from "./actionTypes";
import { API_URL } from "../constants";
import { fetchWithAuth } from "../helpers/fetchWithAuth";
import { Link } from "./reducers/linksReducer";

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

export function fetchGroups() {
  return {
    type: FETCH_GROUPS,
    payload: fetchWithAuth({ url: `${API_URL}/links/groups` })
  };
}

export function fetchLinks(group: string) {
  return {
    type: FETCH_LINKS,
    payload: fetchWithAuth({ url: `${API_URL}/links/group/${group}` })
  };
}

export function addLink(link: Link) {
  return {
    type: ADD_LINK,
    payload: link
  };
}

export function setFavoriteLink(linkId: number, favoriteState: boolean) {
  return {
    type: SET_FAVORITE_LINK,
    payload: fetchWithAuth({
      url: `${API_URL}/links/favorite`,
      data: {
        toFavorite: favoriteState,
        linkId
      },
      method: "PUT"
    })
  };
}

export function deleteLink(linkId: number) {
  return {
    type: DELETE_LINK,
    payload: fetchWithAuth({
      url: `${API_URL}/links`,
      data: {
        linkId: linkId
      },
      method: "DELETE"
    })
  };
}

export function fetchFavoriteLinksCount() {
  return {
    type: FETCH_FAVORITE_LINKS_COUNT,
    payload: fetchWithAuth({
      url: `${API_URL}/links/favorites/count`
    })
  };
}

export function fetchFavorites() {
  return {
    type: FETCH_FAVORITES,
    payload: fetchWithAuth({
      url: `${API_URL}/links/favorites`
    })
  };
}
