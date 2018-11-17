import * as React from "react";
import { Header } from "./homepage/Header";

interface Props {
  [type: string] : any;
}

export class HomePage extends React.Component<Props> {
  render () {
    return (
      <React.Fragment>
        <Header />
      </React.Fragment>
    )
  }
}