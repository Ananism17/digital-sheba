import React from "react";

//react-bootstrap
import { Navbar, Nav, NavDropdown } from "react-bootstrap";


//react-icons
import { FaBars } from "react-icons/fa";

const TopbarComponent = ({ handleToggleSidebar }) => {
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
        <NavDropdown title="ইবতিয়াজ মাহমুদ দিলজার" style={{ marginRight: "70px" }}>
          <NavDropdown.Item href="#">প্রোফাইল</NavDropdown.Item>
          {/* <NavDropdown.Divider /> */}
          <NavDropdown.Item>লগ আউট</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
};

export default TopbarComponent;
