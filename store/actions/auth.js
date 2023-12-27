import axios from "axios";
import * as actionTypes from "./actionTypes";
import Router from "next/router";
import { BASE_URL } from "../../base";

//react-toast
import { toast } from "react-toastify";

export const authLogin = (token, user) => {
  Router.push({
    pathname: "/",
  });
  return {
    type: actionTypes.AUTH_LOGIN,
    idToken: token,
    user: user,
  };
};

export const logout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const auth = (mobile, password) => {
  return (dispatch) => {
    const apiUrl = BASE_URL + "nagorik/v1/user/sign-in";

    let formData = new FormData();
    formData.append("mobile", mobile);
    formData.append("password", password);
    axios
      .post(apiUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.data.status) {
          dispatch(authLogin(response.data.access_token, response.data.user));
        } else {
          console.log(response.data);
          toast.error(response.data.message, {
            position: "top-right",
            theme: "colored",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const menuPath = (path) => {
  return {
    type: actionTypes.MENU_PATH,
    path: path,
  };
};
