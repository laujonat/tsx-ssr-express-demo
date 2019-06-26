import React from "react";
import { IDesktopProps } from "../types";
import styled, { ThemeProvider } from "../theme";
import { TaskBar } from "./TaskBar";
import { themes } from "react95";


const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  background: teal;
`;

export const Desktop: React.FC<IDesktopProps> = ({ data }) => {
  const stringed = data ? data : undefined;
  return (
  <AppContainer>
      <ThemeProvider theme={themes.default}>
      <React.Fragment>
        <TaskBar />
          {stringed}
        </React.Fragment>
    </ThemeProvider>
  </AppContainer>
  );
};

        // <List>
        //   <ListItem>🎤 Sing</ListItem>
        // </List>
