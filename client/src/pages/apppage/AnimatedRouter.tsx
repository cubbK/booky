import * as React from "react";
import { Router, Link, Redirect, Location } from "@reach/router";
import { Transition, animated, config } from "react-spring";

const left = {
  transform: "translate3d(-3000px, 0, 0)",
  opacity: 0
};

const center = {
  transform: "translate3d(0px, 0, 0)",
  opacity: 1
};

const right = {
  transform: "translate3d(3000px, 0, 0)",
  opacity: 0
};

function getFromStyles(pathname: string, entered: boolean) {
  if (pathname === "/") {
    if (!entered) return left;
    if (entered) return center;
  } else {
    if (!entered) return right;
    if (entered) return center;
  }
}

function getLeaveStyles(pathname: string, entered: boolean) {
  if (pathname === "/") {
    return left;
  } else {
    return right;
  }
}

export const AnimatedRouter = ({ children }: any) => {
  const [entered, setEntered] = React.useState(false);
  return (
    <Location>
      {({ location }) => (
        <Transition
          items={location}
          keys={location.pathname}
          from={getFromStyles(location.pathname, entered)}
          enter={{ transform: "translate3d(0, 0, 0)", opacity: 1 }}
          leave={getLeaveStyles(location.pathname, entered)}
          config={config.gentle}
          onDestroyed={() => setEntered(true)}
        >
          {location => style => {
            // if (style.opacity) {
            //   setEntered(true);
            // }
            return (
              <animated.div
                style={{ position: "absolute", width: "100%", ...style }}
              >
                <Router location={location}>{children}</Router>
              </animated.div>
            );
          }}
        </Transition>
      )}
    </Location>
  );
};
