import React, { useState } from "react";
import Router from "next/router";

//axios
import axios from "axios";
import { BASE_URL } from "@/base";

//redux imports
import { connect } from "react-redux";

//react-bootstrap
import { Row, Col, Form, Button } from "react-bootstrap";

//loader
import { LineWave } from "react-loader-spinner";
//icons
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

//react-toast
import { toast } from "react-toastify";

const ChnagePasswordComponent = ({ token }) => {
  //form-data
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  //boolean
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordConfirmVisible, setPasswordConfirmVisible] = useState(false);
  const [loader, setLoader] = useState(false);

  //password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const togglePasswordConfirmVisibility = () => {
    setPasswordConfirmVisible(!passwordConfirmVisible);
  };

  //change-password
  const submit = () => {
    if (password != passwordConfirmation) {
      toast.error("দয়া করে আপনার পাসওয়ার্ড পুনরায় চেক করুন!", {
        position: "top-right",
        theme: "colored",
      });
    } else {
      setLoader(true);
      const apiUrl = BASE_URL + "nagorik/v1/user/change-password";
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      let formData = new FormData();
      formData.append("password", password);
      formData.append("password_confirmation", passwordConfirmation);
      axios
        .post(apiUrl, formData, config)
        .then((response) => {
          if (response.data.status) {
            toast.success("আপনি সফলভাবে পাসওয়ার্ড পরিবর্তন করেছেন!", {
              position: "top-right",
              theme: "colored",
            });
            Router.push({
              pathname: "/",
            });
          } else {
            setLoader(false);
            console.log(response.data);
            toast.error(response.data.message, {
              position: "top-right",
              theme: "colored",
            });
          }
        })
        .catch((err) => {
          setLoader(false);
          console.log(err);
        });
    }
  };

  return (
    <>
      {loader ? (
        <div className="loader-container">
          <LineWave visible={true} height="400" width="400" color="darkcyan" />
        </div>
      ) : (
        <>
          <Row style={{ width: "100%" }} className="px-3 mt-1">
            <span className="custom-header">পাসওয়ার্ড পরিবর্তন করুন</span>
          </Row>
          <Row style={{ width: "100%" }} className="px-3">
            <Col md lg={6} className="mt-4">
              <Form.Group className="mt-4">
                <Form.Label>নতুন পাসওয়ার্ড</Form.Label>
                <div className="password-input">
                  <Form.Control
                    type={passwordVisible ? "text" : "password"}
                    value={password || ""}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    className="custom-input"
                    size="lg"
                  />
                  <span
                    className="password-icon"
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? (
                      <AiOutlineEyeInvisible />
                    ) : (
                      <AiOutlineEye />
                    )}
                  </span>
                </div>
              </Form.Group>

              <Form.Group className="mt-4">
                <Form.Label>
                  পাসওয়ার্ড নিশ্চিত করুন
                  {passwordConfirmation != "" &&
                    passwordConfirmation != password && (
                      <span style={{ color: "red" }}>
                        {" "}
                        (পাসওয়ার্ড মিলছে না!)
                      </span>
                    )}
                </Form.Label>
                <div className="password-input">
                  <Form.Control
                    type={passwordConfirmVisible ? "text" : "password"}
                    value={passwordConfirmation || ""}
                    onChange={(e) => {
                      setPasswordConfirmation(e.target.value);
                    }}
                    className="custom-input"
                    size="lg"
                  />
                  <span
                    className="password-icon"
                    onClick={togglePasswordConfirmVisibility}
                  >
                    {passwordConfirmVisible ? (
                      <AiOutlineEyeInvisible />
                    ) : (
                      <AiOutlineEye />
                    )}
                  </span>
                </div>
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="custom-button-contained mt-4"
                onClick={submit}
              >
                পাসওয়ার্ড পরিবর্তন করুন
              </Button>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

export default connect(mapStateToProps)(ChnagePasswordComponent);
