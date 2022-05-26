import styled from 'styled-components';
import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping_bag.svg';

export const CartIconContainerStyled = styled.div

  `
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  `;

export const ShoppingBagIconStyled = styled(ShoppingCartIcon) 

  `
    width: 32px;
    height: 32px;
  `;

export const ItemCountStyled = styled.span

  `
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
  `;