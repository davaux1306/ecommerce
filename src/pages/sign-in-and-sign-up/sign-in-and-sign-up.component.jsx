import "./sign-in-and-sign-up.styles.scss";
// Import React and other libraries
import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

// Import other react components

// Create a react component
const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

// Export the react component
export default SignInAndSignUpPage;
