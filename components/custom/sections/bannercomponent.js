/* eslint-disable */
import React from "react";
import { Row, Col, Container, Form } from "reactstrap";
import Image from "next/image";
import herobanner from "../../../assets/images/staticslider/slider/hero-banner.jpg";
import solana from "../../../assets/images/logos/solanaLogo.png";
import FormBannerComponent from "./formbannercomponent";

const BannerComponent = () => {
  return (
    <div>
      <div className="spacer">
        <Container>
          <h6 className="solana">
            POWERED BY <Image src={solana} alt="solana logo" />
          </h6>
          <div className="heading m-top-20">Utility Transfer Protocol for</div>
          <div className="heading h-background">Digital Assets</div>
          <div className="text">
            Transfer conditional ownership of NFTs without collateral. Enable NFT rentals, subscriptions, ticketing, etc. usecases
          </div>
          {/* <div className="form">
          <div id="banner1" >
            <Form className="m-t-40 align">
              <input
                type="text"
                name="email"
                placeholder="Enter Email Address"
                className="font-16"
              />
              <input
                type="submit"
                value="Get Early Access"
                className="bg-info font-semibold font-16 btn-rounded text-uppercase text-white text-center"
              />
            </Form>
          </div>
          </div> */}
        </Container>
      </div>
    </div>
  );
};

export default BannerComponent;
