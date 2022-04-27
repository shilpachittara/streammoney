import React from "react";

// core components
import Banner2 from "../banner/Banner2";

// sections for this page
import BannerComponent from "./sections/bannercomponent";
import FeatureComponent from "./sections/featurecomponent";
import Briefcomponent from "./sections/briefcomponent";

const CustomComponents = () => {
  return (
    <div className="bg-dark">
      <BannerComponent />
      <Briefcomponent />
      <FeatureComponent />
      {/* <Roadmapcomponent /> */}
}
    </div>
  );
};

export default CustomComponents;
