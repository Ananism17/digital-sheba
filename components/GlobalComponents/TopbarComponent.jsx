import React, { useEffect } from "react";
import Link from "next/link";
import Router from "next/router";

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

//react-icons
import { CgProfile } from "react-icons/cg";
import { FaKey } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";

const TopbarComponent = ({ handleToggleSidebar, token, name }) => {
  //redux
  const dispatch = useDispatch();

  //profile
  const profileRoute = () => {
    Router.push({
      pathname: "/profile",
    });
  }

  //logout
  const submitHandler = () => {
    const apiUrl = BASE_URL + "nagorik/v1/user/sign-out";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
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
        <NavDropdown
          title={name}
          style={{ marginRight: "80px", color: "darkcyan" }}
        >
            <NavDropdown.Item onClick={profileRoute}>
              <CgProfile className="mb-1" /> প্রোফাইল
            </NavDropdown.Item>
          <NavDropdown.Item>
            <FaKey className="mb-1" /> পাসওয়ার্ড পরিবর্তন
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={submitHandler}>
            <RiLogoutCircleLine className="mb-1" /> লগ আউট
          </NavDropdown.Item>
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
