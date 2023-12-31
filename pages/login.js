import React from "react";
import Router from "next/router";

//redux imports
import { connect } from "react-redux";

import LoginComponent from "@/components/LoginComponents/LoginComponent";

const Login = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    Router.push({
      pathname: "/",
    });
  } else {
    return (
      <>
        <LoginComponent />
      </>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.token,
  };
};

export default connect(mapStateToProps)(Login);
