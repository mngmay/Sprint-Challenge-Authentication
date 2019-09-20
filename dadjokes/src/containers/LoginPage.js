import React from "react";
import Form from "../components/Form";

const LoginPage = props => {
  const buttonText = "Login";
  const formType = "login";
  return (
    <div className="loginpage">
      <h1>Login</h1>
      <Form props={props} formType={formType} buttonText={buttonText} />

      <button
        onClick={() => props.history.push("/register")}
        className="signUpBtn"
      >
        Sign Up
      </button>
    </div>
  );
};

export default LoginPage;
