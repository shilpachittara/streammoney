/* eslint-disable */
import React, { useState } from "react";
import {
  Container,
  NavbarBrand,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  UncontrolledTooltip,
} from "reactstrap";
import Image from "next/image";
import logo from "../../../assets/images/logos/logo.png";
import discord from "../../../assets/images/logos/discord-icon.png";
import twitter from "../../../assets/images/logos/twitter-icon.png";

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div id="section">
      <div className="header1 po-relative bg-dark">
        <Container>
          <Navbar className="navbar-expand-lg h2-nav">
            <NavbarBrand href="#">
              <Image src={logo} alt="logo" />
              <span class="ml-auto h2-heading">Stream Money</span>
            </NavbarBrand>
            <NavbarToggler onClick={toggle}>
              <span className="ti-menu text-white"></span>
            </NavbarToggler>
            <Collapse isOpen={isOpen} navbar id="header1">
              <Nav navbar className="ml-auto mt-2 mt-lg-0">
                <NavItem className="active">
                  <NavLink
                    className="nav-link-icon"
                    href="https://discord.com/invite/emxMDBSMyc"
                    id="tooltip356693867"
                    target="_blank"
                  >
                    <Image src={discord} alt="discord" />
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip356693867">
                    Follow us on Discord
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="https://twitter.com/StreamMoneyofcl"
                    id="tooltip184698705"
                    target="_blank"
                  >
                    <Image src={twitter} alt="twitter" />
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip184698705">
                    Follow us on twitter
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="https://docs.streammoney.finance/"
                    id="tooltip333589074"
                    target="_blank"
                  >
                    <span className="nav-link-inner--text ml-1">Docs</span>
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Documents
                    </span>
                    <UncontrolledTooltip delay={0} target="tooltip333589074">
                      Documents
                    </UncontrolledTooltip>
                  </NavLink>
                </NavItem>
                {/*<NavItem>
                  <a className="btn btn-info" href="#">
                    Go To App
                  </a>
  </NavItem>*/}
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    </div>
  );
};

export default HeaderComponent;
