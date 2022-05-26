import styled from 'styled-components';

export const StandardButtonStyled = styled.button

  `
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 700;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;

    &:hover {
      background-color: rgb(20, 20, 20);
      color: white;
    }
  `;

export const GoogleButtonStyled = styled(StandardButtonStyled)

    `
    background-color: #357ae8;
    color: white;

    &:hover {
      background-color: #4285f4;
      border: none;
    }
  `;

  
export const InvertedButtonStyled = styled(StandardButtonStyled)

  `
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
  `;
