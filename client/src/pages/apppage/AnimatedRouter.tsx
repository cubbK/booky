import * as React from "react";
import { Router, Link, Redirect, Location } from "@reach/router";
import { Transition, animated, config } from "react-spring";

export const AnimatedRouter = ({ children }: any) => {
  return (
    <Location>
      {({ location }) => (
        <Transition
          items={location}
          keys={location.pathname}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
          
        >
          {location => style => {
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
