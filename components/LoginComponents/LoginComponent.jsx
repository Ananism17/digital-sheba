import React, { useState } from "react";
import Link from "next/link";

//react-bootstrap
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";

//icons
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const LoginComponents = () => {
  //login-variables
  const [mobile, setMobile] = useState(null);
  const [password, setPassword] = useState(null);

  //boolean
  const [passwordVisible, setPasswordVisible] = useState(false);

  //password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
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
                  {/* <h2 className="text-center mt-4">Login</h2> */}
                  <Form className="mt-5">
                    <Form.Group>
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

                    <Button
                      variant="primary"
                      type="submit"
                      className="custom-button-contained mt-4"
                      // onClick={login}
                    >
                      লগইন করুন
                    </Button>
                  </Form>
                  <div className="signUpLink">
                    <p className="mt-5 text-center">
                      একাউন্ট নেই?{" "}
                      <span
                        style={{ color: "darkcyan", cursor: "pointer" }}
                        // onClick={signUp}
                      >
                        <Link href="/register" className="custom-anchor">রেজিস্টার করুন!</Link>
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

export default LoginComponents;
