import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { ReactComponent as ShopLogo } from '../../assets/mountain.svg';


export const NavigationContainerStyled = styled.div

  `
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 55px;
  `;
  
export const LogoContainerStyled = styled(Link)

  `
    height: 100%;
    width: 70px;
    padding: 15px;
  `;

export const ShopLogoStyled = styled(ShopLogo)

  `
    height: 100px;
    width: 100px;
  `;

export const NavLinksContainerStyled = styled.div

  ` 
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `;

export const NavLinkStyled = styled(Link)

  `
    padding: 10px 15px;
    font-size: 1.5em;
    font-weight: 700;
    cursor: pointer;
  `;