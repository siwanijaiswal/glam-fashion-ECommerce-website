import React from 'react'
import './button.scss'

//we have 3 types of button: 1)default, 2)Inverted, 3)google sign-in

const BUTTON_TYPE_CLASSES = {
    google:'google-sign-in',
    inverted:'inverted'
}

const Button = ({children, buttonType,...otherProps}) => {
  return (
   <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>{children}</button>
  )
};

export default Button;