import React from "react";
import Router from "next/router";

//redux imports
import { connect } from "react-redux";

import RegisterComponent from "@/components/LoginComponents/RegisterComponent";

const Register = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    Router.push({
      pathname: "/",
    });
  } else {
    return (
      <>
        <RegisterComponent />
      </>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.token,
  };
};

export default connect(mapStateToProps)(Register);
