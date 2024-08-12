import './App.css';
import ThemeColorButton from './components/theme-color-button';
import AppRoutes from './pages/routes';
import { DarkTheme, LightTheme } from './styles/themes';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useState } from 'react';

const Container = styled.body`
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.color};
`;

function App() {
  const [theme, setTheme] = useState(LightTheme);

  const toggleTheme = () => {
    setTheme(theme === LightTheme ? DarkTheme : LightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ThemeColorButton onClick={toggleTheme} />
        <AppRoutes />
      </Container>
    </ThemeProvider>
  );
}

export default App;
