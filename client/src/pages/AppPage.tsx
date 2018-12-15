import * as React from "react";
import { Footer } from "../components/Footer";
import { CategoryList } from "./apppage/CategoryList";
import { withRefreshJwt } from "../hocs/withRefreshJwt";
import { useRedirectIfUnauthorized } from "../hooks/useRedirectIfUnauthorizer";
import { AppHeader } from "./apppage/AppHeader";

interface Props {
  [type: string]: any;
}

export const AppPage = (props: Props) => {
  const isAuthorized = useRedirectIfUnauthorized();
  return (
    <React.Fragment>
      <AppHeader />
      <main>
        <CategoryList />
      </main>
      <Footer />
    </React.Fragment>
  );
};
