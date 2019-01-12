import { createMuiTheme } from "@material-ui/core/styles";

export const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#1C77C3"
    }
  },
  typography: {
    fontFamily: "'IBM Plex Sans', sans-serif",
    useNextVariants: true
  },
  shape: {
    borderRadius: 0
  }
});

export interface Theme {
  titleFamilyFont: string;
  primary: string;
}

export const styledTheme: Theme = {
  titleFamilyFont: "'Varela Round', sans-serif",
  primary: "#1C77C3"
};
