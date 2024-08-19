import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const List = styled.ul`
    list-style-type: none;
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 15px;
`
export const ListItem = styled.li`
    padding: 10px;
    margin: 25px;
    width: 120px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
    background-color: #3D7DCA;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
        background-color: #1F6F9F;
    }
`

export const PokemonImg = styled.img`
    width: 100%;
    height: 100%;
`

export const PokemonName = styled.h1`
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 600;
    text-align: center;

    &:first-letter {
        text-transform: uppercase;
  }

`;