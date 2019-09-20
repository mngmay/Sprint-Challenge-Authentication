import React from "react";
import { Route } from "react-router-dom";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import JokesList from "./containers/JokesList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/jokes" component={JokesList} />
    </div>
  );
}

export default App;
