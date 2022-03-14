/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import Image from "next/image";
import img1 from "../../../assets/images/features/feature13/img1.jpg";
import img2 from "../../../assets/images/features/feature13/img2.jpg";
import img3 from "../../../assets/images/features/feature13/img3.jpg";
import img4 from "../../../assets/images/features/feature13/img4.jpg";
import img5 from "../../../assets/images/features/feature30/feature-img.jpg";

const FeatureComponent = () => {
  return (
    <div>
      <div className="spacer bg-dark">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold h2-background">USE CASES</h1>
              <h6 className="text-color">
                With remote work culture gaining momentum, workers are inclined
                to get paid by hours. Rising trends towards personalization can
                shift user behavior to pay as they use services. With streaming
                protocol, consumers can pay five cents for an article, a dollar
                for online classes, or ten bucks to rent Software tool.
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="feature4">
        <Container>
          <Row className="m-t-40 bounty-program">
            <Col md="12" className="wrap-bounty">
              <Card className="bg-dark">
                <CardBody>
                  <h1 className="title font-bold text-color text-center">NFT Rental</h1>
                  <p className="text-color text-center m-t-40">
                  It enables digital asset owners such as 3D artists, digital real estate, live events, exhibition owners to rent digital assets for their utility without locking up capital or exposing themselves to volatility by just paying small fees.
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="12" className="wrap-bounty">
              <Card className="bg-dark">
                <CardBody>
                <h1 className="title font-bold text-color text-center">Pay as use</h1>
                  <p className="text-color text-center m-t-40">
                  It enables merchant to offer pay-per-use online services for Digital newsletters, podcasts, online classes, and music streaming, etc. Businesses can reinvent themselves by leveraging low customer acquisition costs and convert into subscriptions.</p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FeatureComponent;
