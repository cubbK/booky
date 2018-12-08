import * as React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

interface Props {
  [type: string]: any;
}

export class AppPage extends React.Component<Props> {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Footer />
      </React.Fragment>
    );
  }
}
