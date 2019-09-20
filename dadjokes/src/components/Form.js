import React, { useState } from "react";
import axios from "axios";

const Form = ({ props, formType, buttonText }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const login = e => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("http://localhost:3300/api/auth/login", credentials)
      .then(res => {
        console.log(res);
        props.history.push("/jokes");
        setLoading(false);
      })
      .catch(err => {
        console.log(err.response);
        setLoading(false);
      });
  };

  const register = e => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("http://localhost:3300/api/auth/register", credentials)
      .then(res => {
        console.log(res);
        setLoading(false);
        props.history.push("/");
      })
      .catch(err => {
        console.log(err.response);
        setLoading(false);
      });
  };

  let submitHandler;

  formType === "register" && (submitHandler = register);
  formType === "login" && (submitHandler = login);

  return (
    <div className="login">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button>{buttonText}</button>
      </form>
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default Form;
