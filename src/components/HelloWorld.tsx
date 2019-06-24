import React from "react";
import { IHelloWorldProps } from "../types";
import styled from "../theme";
import * as R from "react95";


const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  font-size: 40px;
  background: linear-gradient(20deg, rgb(219, 112, 147), #daa357);
`;

export const HelloWorld: React.FC<IHelloWorldProps<Object>> = ({ data }) => {
  return (
  <AppContainer>
        <R.List>
          <R.ListItem>🎤 Sing</R.ListItem>
      </R.List>  
    Server Rendered! {data}
  </AppContainer>
  )
};
