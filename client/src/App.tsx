import * as React from "react";
import { Router } from "@reach/router";
import { HomePage } from "./pages/HomePage";
import { AppPage } from "./pages/AppPage";
import { LoginPage } from "./pages/LoginPage";
import { withStyledComponentsTheme } from "./hocs/withStyledComponentsTheme";
import { createGlobalStyle } from "styled-components";
import "normalize.css";
import "./App.css";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { compose } from "redux";
import { MuiThemeProvider } from "@material-ui/core";
import { muiTheme, styledTheme } from "./muiTheme";
import CssBaseline from "@material-ui/core/CssBaseline";
import LoadingBar from "react-redux-loading-bar";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MuiThemeProvider theme={muiTheme}>
            <CssBaseline />
            <LoadingBar
              progressIncrease={10}
              style={{ backgroundColor: "#1C77C3" }}
            />
            <Router>
              <HomePage path="/landing" />
              <AppPage path="/*" />
              <LoginPage path="/login/:status/:jwt" />
            </Router>
          </MuiThemeProvider>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default compose(withStyledComponentsTheme(styledTheme))(App);
