import React from "react";
import { configure, addDecorator } from "@storybook/react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

addDecorator(story => (
  <div style={{ textAlign: "center" }}>
    <MuiThemeProvider>{story()}</MuiThemeProvider>
  </div>
));

const req = require.context("../src/component", true, /\.story\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
