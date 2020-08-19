import React from "react";
import Notice from "./Notice";
import Nav from "react-bootstrap/Nav";
import { Navbar } from "react-bootstrap";

class Nav2 extends React.Component {
  render() {
    return (
      <div>
        <div className="" id="myTopnav">
          <div style={{ background: "white" }}>
            <Notice />
          </div>
          <div >
          <Navbar class="navbar" collapseOnSelect expand="lg" bg="" variant="dark">
            <Navbar.Brand href="#home"><i class="fab fa-pagelines"></i> TeaHaven</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#products">Products</Nav.Link>
               <Nav.Link href="#home">Contact</Nav.Link>
                <Nav.Link href="#cart"><i class="fas fa-shopping-cart"></i></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          </div>
        </div>
      </div>
    );
  }
}

// export default Nav2;
