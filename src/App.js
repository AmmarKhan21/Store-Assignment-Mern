import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/login/Login";
import SignUp from "./Components/SignUp/SignUp";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeLandingPage from "./Components/HomePage/HomeLandingPage";
import Cart from "./Components/HomePage/Cart";
import store from "./store/configureStore";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/sign-in" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route exact path="/homePage" component={HomeLandingPage} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </div>
  );
}

export default App;
