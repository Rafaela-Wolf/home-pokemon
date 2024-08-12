import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

async function fetchPokemonDetails(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!response.ok) {
        throw new Error('ERROR');
    }
    return await response.json();
}

const PokemonDetails = () => {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getPokemonDetails = async () => {
            try {
                const data = await fetchPokemonDetails(name);
                setPokemon(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        getPokemonDetails();
    }, [name]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <section>
            <Link to="/">RETURN</Link>
            {pokemon.sprites && (
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            )}
            <h1>{pokemon.name}</h1>
            <h2>Moves:</h2>
            <ul>
                {pokemon.moves && pokemon.moves.slice(0, 5).map((move, index) => (
                    <li key={index}>{move.move.name}</li>
                ))}
            </ul>
            <h2>Abilities:</h2>
            <ul>
                {pokemon.abilities && pokemon.abilities.map((ability, index) => (
                    <li key={index}>
                        <strong>{ability.name}</strong>
                    </li>
                ))}
            </ul>
            <h2>Types:</h2>
            <ul>
                {pokemon.types && pokemon.types.map((type, index) => (
                    <li key={index}>{type.type.name}</li>
                ))}
            </ul>
        </section>
    );
};

export default PokemonDetails;