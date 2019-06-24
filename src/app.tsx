import React, { Fragment, SFC } from "react";
import { HelloWorld } from './components/HelloWorld';
import reset from "styled-reset";
import { createGlobalStyle, ThemeProvider, theme } from "./theme/";

const GlobalStyle = createGlobalStyle`
  ${reset}
`
type AppProps = Required<{
  data: Object;
}>;

const App: SFC<AppProps> = ({ data }) => {
  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <HelloWorld data={data} />
      </ThemeProvider>
    </Fragment>
  )
}


export default App;
