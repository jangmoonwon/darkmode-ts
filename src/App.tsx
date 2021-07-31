import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./assets/styles/GlobalStyle";
import { useDarkMode } from "./assets/hooks/useDarkMode";
import { dark, light } from "./assets/styles/theme";
import Toggle from "./components/Toggle";

function App() {
  const [themeMode, toggleTheme] = useDarkMode();
  const theme = themeMode === "light" ? { mode: light } : { mode: dark };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <h1>darkMode-ts</h1>
        <Toggle themeMode={themeMode} toggleTheme={toggleTheme} />
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  background-color: ${({ theme }) => theme.mode.mainBackground};
  color: ${({theme}) => theme.mode.text};
`;
