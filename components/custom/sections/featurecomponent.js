/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";

const FeatureComponent = () => {
  return (
    <div>
      <div className="spacer bg-dark">
        <Container>
          <Row className="justify-content-center">
            <Col md="10" className="text-center">
              <h1 className="title font-bold h2-background">USE CASES</h1>
              <h6 className="text-color">
                With remote work culture gaining momentum, workers are inclined to get paid by hours. 
                Rising trends towards personalization can shift user behavior to pay as they use services. 
                With streaming protocol, consumers can pay a dollar on sneaker rental to attend event in metaverse, five cents for an article, a dollar for online classes, or ten bucks to rent Software tool.
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
                  <h1 className="title font-bold text-color text-center">Rent-to-Own</h1>
                  <p className="text-color text-center m-t-40">
                  It enables digital asset owners such as 3D artists, digital real estate, live events, exhibition owners to rent digital assets for their utility without locking up capital or exposing themselves to volatility by just paying small fees.
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="12" className="wrap-bounty">
              <Card className="bg-dark">
                <CardBody>
                <h1 className="title font-bold text-color text-center">Real-time Payouts</h1>
                  <p className="text-color text-center m-t-40">
It enables employment contracts to pay salaries per second, businesses to send recurring payments, and repayment of loans. It represents the idea of continuous payments over time. Interest can be earned by staking the streamed amount which is shared with both parties.</p>
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