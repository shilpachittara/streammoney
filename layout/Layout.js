import Footer from "./footer/Footer";
import HeaderComponent from "../components/custom/sections/headercomponent";

const Layout = ({ children }) => {
  return (
    <div id="main-wrapper">
      <HeaderComponent />
      <div className="page-wrapper">
        <div className="container-fluid">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
