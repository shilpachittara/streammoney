/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
//import timeexpiry from "../../../assets/images/logos/time-expiry.png";
//import useexpiry from "../../../assets/images/logos/use-expiry.png";

const Briefcomponent = () => {
  return (
    <div>
      <div className="bg-dark">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold h2-background">CONDITIONAL OWNERSHIP</h1>
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
                    With StreamMoney protocol, existing token can be wrapped with a utility contract where termination and transferability conditions can be customized. 
                    Further, The owner can transfer ownership to program derived address (PDA) and transfer utility to borrower of NFTs. Developer can invoke smart contract to get current owner details.
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
                    Time Expiry - Token access will be revoked after specified duration that is defined at initialization of contract. <br /> 
                  </p>
                  <p className="m-t-20 text-color">
                    Use Based Expiry - Power ticketing and subscription usecases where token access is revoked after a certain number of usages. <br />
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
