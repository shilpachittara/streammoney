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
                Unlock utilities of NFTs by integrating with Robust API/SDK of StreamMoney Protocol. Wrap existing NFTs and define contraints to power time-locked rentals, subscriptions, or tickets. 
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
                  <h1 className="title font-bold text-color text-center">GameFi</h1>
                  <p className="text-color text-center m-t-40">
                  Issue assets that expire after usage or time, enable rentals and loans between players, create in-game economies and robust ecosystems.
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="12" className="wrap-bounty">
              <Card className="bg-dark">
                <CardBody>
                <h1 className="title font-bold text-color text-center">Ticketing/Subscriptions</h1>
                  <p className="text-color text-center m-t-40">
                  Create usage-based NFT tickets that expire after being "used", passes that either get revoked from a user's wallet or non-transferrable proof-of-attendance mementos.
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

export default FeatureComponent;
