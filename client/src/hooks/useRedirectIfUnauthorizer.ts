import { useState, useEffect } from "react";
import { store } from "../redux/store";
import { navigate } from "@reach/router";

export function useRedirectIfUnauthorized(): boolean {
  const [isAuthorized, setAuthorized] = useState(false);

  useEffect(() => {
    const jwt = store.getState().jwt;

    if (!jwt) {
      navigate("/landing");
    } else {
      setAuthorized(true);
    }
  });

  return isAuthorized;
}
