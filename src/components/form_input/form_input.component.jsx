import {
  LabelStyled,
  InputStyled,
  GroupStyled
} from './form_input.styles';

const FormInput = ({ label, inputProps }) => {
  return (
    <GroupStyled>
        <InputStyled {...inputProps} />
        <LabelStyled shrink={inputProps.value.length}>{label}</LabelStyled>
    </GroupStyled>
  );
}

export default FormInput;