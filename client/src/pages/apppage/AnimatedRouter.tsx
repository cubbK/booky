import * as React from "react";
import { Router, Link, Redirect, Location } from "@reach/router";
import { Transition, animated } from "react-spring";

const pages = [
  ({ style }: any) => (
    <animated.div style={{ ...style, background: "lightpink" }}>A</animated.div>
  ),
  ({ style }: any) => (
    <animated.div style={{ ...style, background: "lightblue" }}>B</animated.div>
  ),
  ({ style }: any) => (
    <animated.div style={{ ...style, background: "lightgreen" }}>
      C
    </animated.div>
  )
];

export const AnimatedRouter = (props: any) => {
  return (
    <Location>
      {({ location }) => (
        <Transition
          items={pages}
          from={{ transform: "translate3d(0,-40px,0)" }}
          enter={{ transform: "translate3d(0,0px,0)" }}
          leave={{ transform: "translate3d(0,-40px,0)" }}
        >
          {Item => props => <div style={props}><Item /></div>}
        </Transition>
      )}
    </Location>
  );
};
