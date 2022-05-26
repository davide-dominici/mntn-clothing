import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CatalogContainerStyled = styled.div

  `
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
  `;

export const TitleStyled = styled(Link)

  `
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
  `;

export const PreviewStyled = styled.div

  `
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
  `;


//  .catalog-preview-container {
//    display: flex;
//    flex-direction: column;
//    margin-bottom: 30px;

//    .title {
//      font-size: 28px;
//      margin-bottom: 25px;
//      cursor: pointer;
//    }

//    .preview {
//      display: grid;
//      grid-template-columns: repeat(4, 1fr);
//      column-gap: 20px;
//    }
//  }
