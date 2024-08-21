import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Section, List, ListItem, PokemonImg, PokemonName, HomeTitle } from '../styles/pokemon-list';
import { StyleRenderMoreBtn } from '../styles/render-more-button';

async function fetchPokemon(offset) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`);
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
            list: [],
            offset: 0
        };
    }

    async componentDidMount() {
        await this.loadPokemon();
    }

    loadPokemon = async () => {
        try {
            const { offset, list } = this.state;
            const data = await fetchPokemon(offset);
            const detailedList = await Promise.all(
                data.results.map(async (pokemon) => {
                    const details = await fetchPokemonDetails(pokemon.url);
                    return {
                        name: pokemon.name,
                        imageUrl: details.sprites.front_default,
                        type: details.types.map(typeInfo => typeInfo.type.name).join(', ')
                    };
                })
            );
            this.setState({
                list: [...list, ...detailedList],
                offset: offset + 10
            });
        } catch (error) {
            console.error("Error fetching Pokémon data:", error);
        }
    }

    render() {
        return (
            <Section>
                <HomeTitle>Pokémon World: Your Guide to Every Pokémon</HomeTitle>
                <List>
                    {this.state.list.map((pokemon, index) => (
                        <ListItem key={index}>
                            <Link to={`/pokemon/${pokemon.name}`}>
                                <PokemonImg src={pokemon.imageUrl} alt={pokemon.name} />
                            </Link>
                                <PokemonName>{pokemon.name}</PokemonName>
                        </ListItem>
                    ))}
                </List>
                <StyleRenderMoreBtn onClick={this.loadPokemon}/>
            </Section>
        );
    }
}

export default PokemonList;