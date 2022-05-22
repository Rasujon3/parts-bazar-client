import React from "react";
import Banner from "./Banner";
import Contact from "./Contact";
import Footer from "../Shared/Footer";
import Info from "./Info";
import FounderInfo from "./FounderInfo";
import Services from "./Services";
import Reviews from "./Reviews";
import Carousel from "./Carousel";
import BusinessSummary from "./BusinessSummary";

const Home = () => {
  return (
    <div>
      {/* <Carousel /> */}
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <FounderInfo></FounderInfo>
      <BusinessSummary />
      <Reviews></Reviews>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
