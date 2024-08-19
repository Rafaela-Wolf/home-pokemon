import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AbilitiesList, AbilitiesDescription, AbilitiesTitle, Details, Main, MovesList, PokemonImgDet, PokemonNameDet, PokemonProfile, StyledLink, TitleAndDescription, TypesList } from '../styles/pokemon';

async function fetchPokemonDetails(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!response.ok) {
        throw new Error('ERROR');
    }
    const pokemonData = await response.json();

    const abilitiesPromises = pokemonData.abilities.map(async (ability) => {
        const response = await fetch(ability.ability.url);
        if (!response.ok) {
            throw new Error('ERROR');
        }
        return response.json();
    });

    const abilitiesData = await Promise.all(abilitiesPromises);

    return {
        ...pokemonData,
        abilitiesDetails: abilitiesData
    };
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
        <Main>
            <StyledLink to="/">BACK</StyledLink>
            <Details>
                {pokemon.sprites && (
                    <PokemonImgDet src={pokemon.sprites.front_default} alt={pokemon.name} />
                )}
                <PokemonNameDet>{pokemon.name}</PokemonNameDet>

                <PokemonProfile>
                    <MovesList>
                        <TitleAndDescription>Moves</TitleAndDescription>
                        {pokemon.moves && pokemon.moves.slice(0, 5).map((move, index) => (
                            <TitleAndDescription key={index}>{move.move.name}</TitleAndDescription>
                        ))}
                    </MovesList>

                    <TypesList>
                        <TitleAndDescription>Types</TitleAndDescription>
                        {pokemon.types && pokemon.types.map((type, index) => (
                            <TitleAndDescription key={index}>{type.type.name}</TitleAndDescription>
                        ))}
                    </TypesList>
                </PokemonProfile>
            </Details>

            <AbilitiesList>
                <AbilitiesTitle>Abilities</AbilitiesTitle>
                {pokemon.abilities && pokemon.abilities.map((ability, index) => {
                    const englishEntries = pokemon.abilitiesDetails[index].flavor_text_entries.filter(
                        (entry) => entry.language.name === 'en'
                    );

                    const flavorText = englishEntries.length > 0 ? englishEntries[0].flavor_text : 'No description available';

                    return (
                        <AbilitiesDescription key={index}>
                          <strong>{ability.ability.name}: </strong>{flavorText}
                        </AbilitiesDescription>
                    );
                })}
            </AbilitiesList>

        </Main>
    );
};

export default PokemonDetails;