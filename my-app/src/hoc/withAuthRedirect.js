import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Navigate, redirect, useLocation } from "react-router-dom";
import AuthContainer from "../components/auth/AuthContainer";
import { useState } from "react";
// import ContentContainer from "../components/content/ContentContainer";
let mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth,
});

export const withAuthRedirect = (Component) => {
  // debugger

  let RedirectComponent = (props) => {
    const location = useLocation;

    let sad = () => {
      if (!props.isAuth) {
        // debugger;
        debugger;
        return <Navigate to="login" state={{ from: location }} />;
        // return <AuthContainer {...props} />;
      } else {
        // debugger;

        return <Component {...props} />;
      }
    };

    return sad();
  };

  let ConnectedAuthRedirectComponenta = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  );
  return ConnectedAuthRedirectComponenta;
};
