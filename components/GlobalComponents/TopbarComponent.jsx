import React, { useEffect } from "react";

//react-bootstrap
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

//react-icons
import { FaBars } from "react-icons/fa";

//axios
import axios from "axios";
import { BASE_URL } from "../../base";

//redux imports
import { useDispatch } from "react-redux";
import { logout } from "../../store/actions/auth";
import { connect } from "react-redux";

const TopbarComponent = ({ handleToggleSidebar, token, name }) => {
  //redux
  const dispatch = useDispatch();

  const submitHandler = () => {
    const apiUrl = BASE_URL + "nagorik/v1/user/sign-out";
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .post(apiUrl, "", config)
      .then(() => {
        Router.push({
          pathname: "/",
        });
        dispatch(logout());
      })
      .catch((error) => {
        if (error.response?.status == 401) {
          dispatch(logout());
          Router.push({
            pathname: "/",
          });
        }
        console.log(error);
      });
  };

  return (
    <Navbar style={{ backgroundColor: "#cce6df" }}>
      {/* <Navbar.Brand href="#home">DIGITAL SHEBA</Navbar.Brand> */}
      <Nav className="me-auto">
        <FaBars
          style={{ marginLeft: "50px" }}
          className="d-lg-none"
          onClick={() => handleToggleSidebar(true)}
        />
      </Nav>
      <Nav>
        <NavDropdown title={name} style={{ marginRight: "70px" }}>
          <NavDropdown.Item href="#">প্রোফাইল</NavDropdown.Item>
          {/* <NavDropdown.Divider /> */}
          <NavDropdown.Item onClick={submitHandler}>লগ আউট</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    name: state.auth.user.name,
  };
};

export default connect(mapStateToProps)(TopbarComponent);
