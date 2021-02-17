import "./header.styles.scss";
// Import React and other libraries
import React from "react";
import { Link } from "react-router-dom";

// Import other react components
import { ReactComponent as Logo } from "../../assets/ecommerce.svg";

// Create the react component
const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

// Export the react component
export default Header;
