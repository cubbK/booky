import { SET_JWT } from "./actionTypes";

export function setJwt(jwt: string) {
  return {
    type: SET_JWT,
    payload: jwt
  };
}
