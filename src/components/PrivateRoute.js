import React, { useContext } from "react";
import { AuthContext } from "../context/auth";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const userDetailsChat = JSON.parse(localStorage.getItem("os-user"));
  return (
    <Route
      {...rest}
      exact
      render={(props) =>
        userDetailsChat.name ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
