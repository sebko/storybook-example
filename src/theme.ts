// theme.js
import { createMuiTheme } from "@material-ui/core/styles";

const baseTheme = {
  shape: {
    borderRadius: 8,
  },
  typography: {
    h4: {
      fontWeight: 600,
    },
    h6: {
      lineHeight: 1.2,
    },
  },
};

export const lightTheme = createMuiTheme({ ...baseTheme });

export const darkTheme = createMuiTheme({
  ...baseTheme,
  palette: {
    type: "dark",
  },
});
