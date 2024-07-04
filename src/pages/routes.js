import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokemonList from '../components/pokemon-list'
import PokemonDetails from '../components/pokemon'

function AppRoutes() {
    return (
        // <BrowserRouter>
        //     <Routes>
        //         <Route exact path="/" component={PokemonList} />
        //         <Route path="/pokemon/:name" component={PokemonDetails} />
        //     </Routes>
        // </BrowserRouter>
        <Router>
            <Routes>
                <Route path="/" element={<PokemonList/>} />
                <Route path="/pokemon/:name" element={<PokemonDetails/>} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;