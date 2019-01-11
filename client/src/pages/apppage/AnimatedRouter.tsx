import * as React from "react";
import { Router, Link, Redirect, Location } from "@reach/router";
import { Transition, animated, config } from "react-spring";

function getFromStyles(pathname: string) {
  if(pathname === "/") {
    return {
      transform: "translate3d(-3000px, 0, 0)"
    }
  } else {
    return {
      transform: "translate3d(3000px, 0, 0)"
    }
  }
}

function getLeaveStyles(pathname: string) {
  if(pathname === "/") {
    return {
      transform: "translate3d(-3000px, 0, 0)"
    }
  } else {
    return {
      transform: "translate3d(3000px, 0, 0)"
    }
  }
}



export const AnimatedRouter = ({ children }: any) => {
  return (
    <Location>
      {({ location }) => (
        <Transition
          items={location}
          keys={location.pathname}
          from={getFromStyles(location.pathname)}
          enter={{ transform: "translate3d(0, 0, 0)" }}
          leave={getLeaveStyles(location.pathname)}
          config={config.gentle}
        >
          {location => style => (
            <animated.div
              style={{ position: "absolute", width: "100%", ...style }}
            >
              <Router location={location}>{children}</Router>
              {console.log(
                "spring + ",
                location.pathname + "  " + style.transform
              )}
            </animated.div>
          )}
        </Transition>
      )}
    </Location>
  );
};
