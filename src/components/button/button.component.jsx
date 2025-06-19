import './button.style.scss';

const Button_Type_Class = {
  google: 'google-sign-in ',
  inverted: 'inverted'
}

const Button = ({children, ButtonType, ...otherProps}) => {
  return(<button className={`button-container 
    ${Button_Type_Class[ButtonType]}`
    } {...otherProps} >{children}</button>)
}

export default Button;