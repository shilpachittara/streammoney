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
              <h1 className="title font-bold h2-background">
                PAYMENT EVERY SECOND
              </h1>
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
                  <p className="m-t-20 text-color">
                    An implicit debt obligation is established between payer and
                    beneficiary when payment is exchanged for their time &
                    efforts. Such obligation carries 0 % interest and
                    financially favors the payer. StreamMoney provides the
                    ability to pay digitally for bits of data or services in
                    small increments continuously over time. After one-time
                    deposit, smart contracts starts "streaming" the money
                    towards the payees and payees can withdraw vested money at
                    their convenience.
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
                  <p className="m-t-20 text-color">
                  <b className="font-size-18"> LOW TRANSACTION FEES : </b> Transaction gets confirmed in less
                    than a second and costs as low as US$ 0.01.{" "}
                  </p>
                  <p className="m-t-20 text-color">
                  <b className="font-size-18">ON-CHAIN : </b> Transaction is updated on-chain at the time of
                    withdraw request, avoiding transaction fess for each micro
                    streams.
                  </p>
                  <p className="m-t-20 text-color">
                    <b className="font-size-18">50+ DIGITAL ASSETS TO TRANSACT WITH : </b> Streams can easily be
                    created with either stablecoins or digital currencies like
                    USDC, SOL, etc.{" "}
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
