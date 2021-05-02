import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { addDecorator } from "@storybook/react";
import React from "react";
import { withThemes } from "@react-theming/storybook-addon";
import CssBaseline from "@material-ui/core/CssBaseline";

import { lightTheme, darkTheme } from "../src/theme";

const providerFn = ({ theme, children }) => {
  const serialTheme = JSON.parse(JSON.stringify(theme));
  const muTheme = createMuiTheme(serialTheme);
  return (
    <ThemeProvider theme={muTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

addDecorator(
  withThemes(
    null,
    [
      { ...lightTheme, name: "light" },
      { ...darkTheme, name: "dark" },
    ],
    { providerFn }
  )
);
