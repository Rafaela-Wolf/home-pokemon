import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const List = styled.ul`
    list-style-type: none;
    width: 70%;
    height: 70%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 20px;
    background-color: #FFFF00;
`
export const ListItem = styled.li`
    padding: 10px;
    margin: 20px;
    background-color: red;
    width: 100px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

&:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9);
  }
`

export const PokemonImg = styled.img`
    width: 100%;
    height: 100%;
`

export const PokemonName = styled.h1`
    text-decoration: none;
    color: #000;
    font-size: 18px;
    text-align: center;

    &:first-letter {
        text-transform: uppercase;
  }

`;