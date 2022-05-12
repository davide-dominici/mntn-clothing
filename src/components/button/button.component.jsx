import './button.styles.scss';

const BUTTON_TYPES = {
  google: 'google-auth',
  inverted: 'inverted'
}

const Button = ({ btnText, btnClass, btnProps }) => {
  return (
    <button className={`btn-container ${BUTTON_TYPES[btnClass]}`} {...btnProps} >
      {btnText}
    </button>
  );
};

export default Button;