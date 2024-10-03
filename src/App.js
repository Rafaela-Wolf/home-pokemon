import AppRoutes from './pages/routes';
import { DarkTheme, LightTheme } from './styles/themes';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { StyleThemeColorBtn } from './styles/theme-color-button';

function App() {
  const [theme, setTheme] = useState(LightTheme);

  const toggleTheme = () => {
    setTheme(theme === LightTheme ? DarkTheme : LightTheme);
  };

  const isDarkMode = theme === DarkTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyleThemeColorBtn isDarkMode={isDarkMode} onClick={toggleTheme} />
      <AppRoutes />
    </ThemeProvider>
  );
}

const GlobalStyles = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap');
 
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