import {
  StandardButtonStyled,
  GoogleButtonStyled,
  InvertedButtonStyled
} from './button.styles';

export const BUTTON_TYPES = {
  standard: 'standard',
  google: 'google-auth',
  inverted: 'inverted'
};

const getButton = (buttonType = BUTTON_TYPES.standard) => (
  {
    [BUTTON_TYPES.standard]: StandardButtonStyled,
    [BUTTON_TYPES.google]: GoogleButtonStyled,
    [BUTTON_TYPES.inverted]: InvertedButtonStyled
  } [buttonType]
);

const Button = ({ btnText, btnType, btnProps }) => {
  
  const StyledButton = getButton(btnType);

  return <StyledButton {...btnProps} >{btnText}</StyledButton>;
};

export default Button;