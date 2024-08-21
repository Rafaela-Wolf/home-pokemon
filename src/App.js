import AppRoutes from './pages/routes';
import { DarkTheme, LightTheme } from './styles/themes';
import  { createGlobalStyle, ThemeProvider } from 'styled-components';
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