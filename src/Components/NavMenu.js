import React from "react";
import { Dropdown } from "react-bootstrap";
export function NavMenu() {
  return (
    <>
      <Dropdown className="menu-option">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          About Us
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Our Company</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Our Team</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Careers</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <a href="" className="menu-option">
        Loan Programs
      </a>
      <Dropdown className="menu-option">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Resources
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Realtor Services</Dropdown.Item>
          <Dropdown.Item href="#/action-2">FAQ</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Blog</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <a className="menu-option">Testimonials</a>
      <a className="menu-option">Contact Us</a>
    </>
  );
}
