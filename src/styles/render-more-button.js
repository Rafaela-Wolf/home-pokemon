import styled from "styled-components";
import RenderMoreButton from "../components/render-more-button";

export const StyleRenderMoreBtn = styled(RenderMoreButton)`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap');

    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-radius: 5px;
    border: 2px solid transparent;
    padding: 10px;
    margin: 5px;
    background-color: #FF5733;
    color: #FFFFFF;

    &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    font-weight: 700;
    background-color: #FF6F40;
`