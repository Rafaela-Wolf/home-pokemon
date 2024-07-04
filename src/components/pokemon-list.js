import React, { Component } from 'react'
import { Link } from 'react-router-dom'

async function fetchPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    return await response.json();
}

async function fetchPokemonDetails(url) {
    const response = await fetch(url);
    return await response.json();
}

class PokemonList extends Component {
    constructor() {
        super();
        this.state = {
            list: []
        };
    }

    async componentDidMount() {
        try {
            const data = await fetchPokemon();
            const detailedList = await Promise.all(
                data.results.map(async (pokemon) => {
                    const details = await fetchPokemonDetails(pokemon.url);
                    return {
                        name: pokemon.name,
                        imageUrl: details.sprites.front_default
                    };
                })
            );
            console.log("Detailed list:", detailedList); // Log para verificar os detalhes
            this.setState({ list: detailedList });
        } catch (error) {
            console.error("Error fetching Pokémon data:", error);
        }
    }

    render() {
        return (
            <section>
                <ul>
                    {this.state.list.map((pokemon, index) => (
                        <li key={index}>
                            <Link to={`/pokemon/${pokemon.name}`}>
                                <img src={pokemon.imageUrl} alt={pokemon.name} />
                                <h1>{pokemon.name}</h1>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        );
    }
}

export default PokemonList;