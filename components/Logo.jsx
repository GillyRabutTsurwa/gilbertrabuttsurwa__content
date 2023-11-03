import React from 'react';
import myLogo from "../images/my-logo-alternate.svg";

const imgStyles = {
  width: "70px",
}

const Logo = () => {
  return (
    <img style={imgStyles} src={myLogo} alt="My Logo" />
  )
}

export default Logo
