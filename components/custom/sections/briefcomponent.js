/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";

const Briefcomponent = () => {
  return (
    <div>
      <div className="bg-dark">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold text-color">BRIEF ABOUT PROTOCOL</h1>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="feature4">
        <Container>
          <Row className="m-t-40">
            <Col md="6" className="wrap-feature4-box">
              <Card className="bg-dark">
                <CardBody>
                  {/*<div className="icon-round bg-light-info">
                    <i className="fa fa-star"></i>
  </div>*/}
                  <h5 className="font-medium text-color">Digital Asset Rental</h5>
                  <p className="m-t-20 text-color">
                    It enables digital asset owners such as 3D artists, digital real estate, live events, exhibition owners to rent digital assets for their utility without locking up capital or exposing themselves to volatility by just paying small fees.
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="6" className="wrap-feature4-box">
              <Card className="bg-dark">
                <CardBody>
                  {/*<div className="icon-round bg-light-info">
                  <i className="fa fa-star"></i>
                  </div>*/}
                  <h5 className="font-medium text-color">PayAsUse </h5>
                  <p className="m-t-20 text-color">
                    It enables merchant to offer pay-per-use online services for Digital newsletters, podcasts, online classes, and music streaming, etc. Businesses can reinvent themselves by leveraging low customer acquisition costs and convert into subscriptions.{" "}
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Briefcomponent;
