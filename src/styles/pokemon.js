import styled from "styled-components"
import { Link } from 'react-router-dom';

export const Main = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh; 
  width: 100vw;
`

export const Details = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    height: 70vh;
    width: 30%;
    background-color: #3D7DCA;
    border-radius: 5px;
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.4), 
                0px 5px 15px rgba(0, 0, 0, 0.2);
`

export const StyledLink = styled(Link)`
    color: #3D7DCA;
    font-weight: 700;
    font-size: 16px;
    text-decoration: none;
    margin: 30px;
    padding: 5px;
    border: 4px solid #3D7DCA;
    border-radius: 5px; 
    transition: background-color 0.3s, color 0.3s;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;

    &:hover {
        background-color: #3D7DCA;
        color: #FFFFFF;
    }
`

export const PokemonImgDet = styled.img`
    width: auto;
    height: auto;
    margin: 5px auto 5px;
`

export const PokemonNameDet = styled.h1`
    font-size: 35px;
    font-weight: 600;
    color: #FFFFFF;
    margin: 0;
    padding-bottom: 20px;

    &:first-letter {
        text-transform: uppercase;
    }
`
export const PokemonProfile = styled.div`
    display: flex;
    gap: 50px;
    text-align: center;
`

export const MovesList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`

export const TitleAndDescription = styled.li`
    &:first-child {
        font-weight: 500;
        font-size: 22px;
        padding-bottom: 5px;
        color: #FFD700;
    }

    font-weight: 400;
    font-size: 18px;
    color: #FFFFFF;

    &:first-letter {
        text-transform: uppercase;
    }
`

export const TypesList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`

export const AbilitiesList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.4);;
    width: 20%;
    border-radius: 5px;
    box-shadow: 0px 10px 20px #3D7DCA,
                0px 4px 10px #3D7DCA;
`

export const AbilitiesTitle = styled.h3`
    color: #FFD700;
    font-size: 22px;
    font-weight: 500;
    text-align: center;
    margin: 0;
    padding: 10px;
`

export const AbilitiesDescription = styled.li`
    &:first-letter {
        text-transform: uppercase;
    }

    color: #ffffff;
    padding: 10px;
    font-size: 16px;
    font-weight: 400;
    margin: 0px 15px;
`