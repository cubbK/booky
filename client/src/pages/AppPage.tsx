import * as React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { CategoryList } from "./apppage/CategoryList";
import { withRefreshJwt } from "../hocs/withRefreshJwt";

interface Props {
  [type: string]: any;
}

@(withRefreshJwt as any)
export class AppPage extends React.Component<Props> {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <CategoryList />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}
