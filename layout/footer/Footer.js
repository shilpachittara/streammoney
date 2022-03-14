/* eslint-disable */
import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/images/logos/logo.png";

import discord from "../../assets/images/logos/discord-icon.png";

const Footer = () => {
  return (
    <div className="footer4 spacer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="m-b-10">
            <Image src={logo} alt="logo" />
            <span class="ml-auto h2-footer">Stream Money</span>
          </Col>
          <Col lg="3" md="6"></Col>
          <Col lg="3" md="6"></Col>
          <Col lg="3" md="6">
            <div className="round-social light">
              <Link href="https://discord.com/invite/emxMDBSMyc">
                <a className="link">
                  <div className="discord-footer">
                    <Image src={discord} alt="discord" />
                  </div>
                </a>
              </Link>
              <Link href="https://twitter.com/StreamMoneyofcl">
                <a className="link">
                  <i className="fa fa-twitter"></i>
                </a>
              </Link>
            </div>
          </Col>
        </Row>
        <div className="f4-bottom-bar">
          <div className="copyright">
            © {new Date().getFullYear()}{" "}
            <Link href="#">
              <a className="link">Stream Money</a>
            </Link>
            <span className="link">. All Rights Reserved.</span>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Footer;
