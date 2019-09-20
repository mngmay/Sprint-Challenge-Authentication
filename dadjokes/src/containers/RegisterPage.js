import React from "react";
import Form from "../components/Form";

const RegisterPage = props => {
  return (
    <div className="registerPage">
      <h1>Sign Up</h1>
      <Form props={props} formType="register" buttonText="Sign Up" />
    </div>
  );
};

export default RegisterPage;
