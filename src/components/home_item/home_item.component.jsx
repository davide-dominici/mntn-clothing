import { useNavigate } from 'react-router-dom';

import {
  HomeItemContainerStyled,
  BackgroundImageStyled,
  BodyStyled
} from './home_item.styles';

const HomeItem = ({ category }) => {

  const { imageUrl, title, route } = category;
  const navLink = useNavigate();

  const navLinkHandler = () => navLink(route);

  return (
    <HomeItemContainerStyled onClick={navLinkHandler}>
      <BackgroundImageStyled imageUrl={imageUrl} />
          {/*<img /> */}
      <BodyStyled>
          <h2>{title}</h2>
          <p>Shop Now</p>
      </BodyStyled>
    </HomeItemContainerStyled>
  )
}

export default HomeItem;