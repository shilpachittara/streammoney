/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";

const Roadmapcomponent = () => {
  return (
    <div>
      <div className="spacer bg-dark">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold h2-background">RoadMap</h1>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="feature4 ">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h2 className="title text-color">Planning and Vision</h2>
              <h6 className="text-color">
              Digital Assets Rental by seconds, Live events tickets by time, and Billboard advertising by seconds are a few use cases where StreamMoney protocol can be utilized for value transfer.
              </h6>
            </Col>
          </Row>
          <Row className="m-t-40 bounty-program">
            <Col md="12" className="wrap-bounty">
              <Card className="bg-dark">
                <CardBody>
                  <h5 className="font-medium text-color">Instant Solutions</h5>
                  <p className="m-t-20 text-color">
                    You can relay on our amazing features list and also our
                    customer services will be great experience. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Praesent
                    tristique pellentesque ipsum.
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="12" className="wrap-bounty">
              <Card className="bg-dark">
                <CardBody>
                  <h5 className="font-medium text-color">Powerful Techniques </h5>
                  <p className="m-t-20 text-color">
                    You can relay on our amazing features list and also our
                    customer services will be great experience. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Praesent
                    tristique pellentesque ipsum.{" "}
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

export default Roadmapcomponent;
