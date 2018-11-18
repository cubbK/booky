import * as React from "react";
import { Header } from "./homepage/Header";
import { Screens } from "./homepage/Screens";
import { CallToAction } from "./homepage/CallToAction";
import { Footer } from "../components/Footer";
import { Features } from "./homepage/Features";

interface Props {
  [type: string]: any;
}

export class HomePage extends React.Component<Props> {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <Features />
          <Screens />
          <CallToAction />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}
