import styled from "styled-components";
import ThemeColorButton from "../components/theme-color-button";

export const StyleThemeColorBtn = styled(ThemeColorButton)`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap');

    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 600;
    color: #fff;
    background-color: #1f1f1f;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
    transition: transform 0.3s ease;
    border-radius: 5px;
    border-color: none;
    padding: 5px;
    margin: 10px;
    width: fit-content;
    position: absolute;
    top: 10px;
    right: 10px;
    
    &:hover {
    transform: scale(1.1);
    font-weight: 700;
  }
`