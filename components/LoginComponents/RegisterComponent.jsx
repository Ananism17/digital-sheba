import React, { useState } from "react";
import Link from "next/link";
import Router from "next/router";

//axios
import axios from "axios";
import { BASE_URL } from "@/base";

//react-bootstrap
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

//icons
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

//react-toast
import { toast } from "react-toastify";

const RegisterComponents = () => {
  //register-variables
  const [mobile, setMobile] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  //boolean
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordConfirmVisible, setPasswordConfirmVisible] = useState(false);

  //password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const togglePasswordConfirmVisibility = () => {
    setPasswordConfirmVisible(!passwordConfirmVisible);
  };

  const register = () => {
    if (password != passwordConfirmation) {
      toast.error("দয়া করে আপনার পাসওয়ার্ড পুনরায় চেক করুন!", {
        position: "top-right",
        theme: "colored",
      });
    } else {
      const apiUrl = BASE_URL + "nagorik/v1/user/sign-up";

      let formData = new FormData();
      formData.append("name", name);
      formData.append("mobile", mobile);
      formData.append("email", email);
      formData.append("password_confirmation", passwordConfirmation);
      formData.append("password", password);
      axios
        .post(apiUrl, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          if (response.data.status) {
            toast.success(
              "আপনি সফলভাবে নিবন্ধন করেছেন! দয়া করে লগইন করুন।",
              {
                position: "top-right",
                theme: "colored",
              }
            );
            Router.push({
              pathname: "/",
            });
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
    }
  };

  return (
    <>
      <div className="login-container">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <Card className="login-card">
                <div className="text-center">
                  <img
                    src="/images/logo.png"
                    width="250"
                    height="60"
                    alt="habitat_logo"
                    className="ms-1"
                  />
                </div>
                <Card.Body>
                  <Form.Group className="mt-5">
                    <Form.Label>নাম</Form.Label>
                    <Form.Control
                      type="text"
                      className="custom-input"
                      size="lg"
                      value={name || ""}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mt-4">
                    <Form.Label>ইমেইল এড্রেস</Form.Label>
                    <Form.Control
                      type="email"
                      className="custom-input"
                      size="lg"
                      value={email || ""}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mt-4">
                    <Form.Label>মোবাইল</Form.Label>
                    <Form.Control
                      type="text"
                      value={mobile || ""}
                      onChange={(e) => {
                        setMobile(e.target.value);
                      }}
                      className="custom-input"
                      size="lg"
                    />
                  </Form.Group>

                  <Form.Group className="mt-4">
                    <Form.Label>পাসওয়ার্ড</Form.Label>
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
                    onClick={register}
                  >
                    রেজিস্টার করুন
                  </Button>
                  <div className="signUpLink">
                    <p className="mt-5 text-center">
                      ইতোমধ্যেই আপনার একাউন্ট রয়েছে?{" "}
                      <span
                        style={{ color: "darkcyan", cursor: "pointer" }}
                        // onClick={signUp}
                      >
                        <Link href="/" className="custom-anchor">
                          লগইন করুন!
                        </Link>
                      </span>
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default RegisterComponents;
