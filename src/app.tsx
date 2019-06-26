import React, { Fragment, SFC } from "react";
import { Desktop } from "./components/Desktop";
import reset from "styled-reset";
import { createGlobalStyle, ThemeProvider } from "./theme";
import { themes } from "react95";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

type AppProps = {
  data: Object;
};

const App: SFC<AppProps> = ({ data }) => {
  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={themes.default}>
        <Desktop data={data} />
      </ThemeProvider>
    </Fragment>
  );
};


export default App;
