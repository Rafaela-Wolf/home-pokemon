import './App.css';
import Button from './components/button-render-more';
import PokemonList from './components/pokemon-list';
import AppRoutes from './pages/routes';


function App() {
  return (
    <>
      <AppRoutes />
      <PokemonList />
      <Button />
    </>
  );
};

export default App;
