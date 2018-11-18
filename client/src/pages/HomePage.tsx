import * as React from "react";
import { Header } from "./homepage/Header";
import { Screens } from "./homepage/Screens";
import { CallToAction } from "./homepage/CallToAction";

interface Props {
  [type: string]: any;
}

export class HomePage extends React.Component<Props> {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <Screens />
          <CallToAction />
        </main>
      </React.Fragment>
    );
  }
}
