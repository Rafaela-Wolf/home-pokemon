import styled from "styled-components";
import ThemeColorButton from "../components/theme-color-button";

export const StyleThemeColorBtn = styled(ThemeColorButton)`
    font-size: 24px;
    text-align: center;
    color: ${(props) => (props.isDarkMode ? '#FFE066' : '#FFFFFF')};
    background-color: ${(props) => (props.isDarkMode ? '#3D7DCA' : '#1f1f1f')};
    cursor: pointer;
    transition: transform 0.3s ease;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    border: none;
    padding: 5px;
    margin: 10px;
    position: absolute;
    top: 10px;
    right: 10px;
    
    &:hover {
      transform: scale(1.2);
      font-weight: 700;
  }

    @media (max-width: 1024px) {
      font-size: 20px;
      padding: 2px;
    }

    @media (max-width: 768px) {
      font-size: 16px;
      width: 30px;
      height: 30px;
    }

    @media (max-width: 533px) {
      font-size: 14px;
      width: 25px;
      height: 25px;
    }

    @media (max-width: 470px) {
      font-size: 12px;
    }
    
    @media (max-width: 425px) {
      top: 70px;
    }
`