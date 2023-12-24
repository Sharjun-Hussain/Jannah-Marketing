import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import { useState } from 'react';

import { FaHome } from "react-icons/fa";
import SunstarJannahMarketingLogo from "../assets/Sunstar-Beverages-Jannah-Marketing-Logo.png";

import { BiSolidNavigation } from "react-icons/bi";
import { BiSolidUserDetail } from "react-icons/bi";

const Header = () => {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="dark" style={{backgroundColor:" #001f3f"}}>
        <Container fluid>
          <Navbar.Brand className="d-flex align-items-center ">
            <img
              alt="Sunstar Beverages Jannah Marketing Logo"
              src={SunstarJannahMarketingLogo}
              width="70"
              height="70"
              className="d-inline-block align-center"
            />
            <Nav.Link as={NavLink} style={{fontSize:"16px"}} to="/">
              Jannah Marketing{" "}
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto Nav-Responsive">
              <Nav.Link as={NavLink} className="Header-Nav" to="/Home">
                <FaHome
                  className="mx-2 Header-Icon"
                  style={{ marginTop: "-2px" }}
                />
                Home
              </Nav.Link>

             
              <Nav.Link as={NavLink} className="Header-Nav" to="/about">
                <BiSolidUserDetail
                  className="mx-2"
                  style={{ marginTop: "-2px" }}
                />
                About us
              </Nav.Link>

              <Nav.Link as={NavLink} className="Header-Nav" to="/contact">
                <BiSolidNavigation
                  className="mx-2"
                  style={{ marginTop: "-2px" }}
                />
                Contact us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


 {/* <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas> */}
 
      {/* <SubNav /> */}
    </div>
  );
};

export default Header;
