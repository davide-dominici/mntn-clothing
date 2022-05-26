import styled from 'styled-components';

export const CategoryContainerStyled = styled.div

  `
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 50px;
  `;

export const CategoryTitleStyled = styled.h2

  `
    font-size: 40px;
    text-align: center;
    margin-bottom: 25px;
  `;

export const SeparatorStyled = styled.hr

  `
    width: 95%;
    margin-bottom: 50px;
  `;