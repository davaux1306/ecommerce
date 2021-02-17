import "./custom-button.styles.scss";
// Import React and other libraries
import React from "react";

// Import other react components

// Create a react component
const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

// Export the react component
export default CustomButton;
