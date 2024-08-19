import './App.css';
import AppRoutes from './pages/routes';
import { DarkTheme, LightTheme } from './styles/themes';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { StyleThemeColorBtn } from './styles/theme-color-button';

const Container = styled.body`
    background-color: ${(props) => props.theme.body};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

function App() {
  const [theme, setTheme] = useState(LightTheme);

  const toggleTheme = () => {
    setTheme(theme === LightTheme ? DarkTheme : LightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <StyleThemeColorBtn onClick={toggleTheme} />
        <AppRoutes />
      </Container>
    </ThemeProvider>
  );
}

const GlobalStyles = createGlobalStyle`
 @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins-Regular.woff2') format('woff2'),
         url('/fonts/Poppins-Regular.woff') format('woff');
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.color};
  }
`;

export default App;
