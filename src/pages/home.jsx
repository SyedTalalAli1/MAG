import React from "react";
import NavBar from "../components/navbar";
import Slider from "../components/slider";
import Cards from "../components/cards";
import Jeep from "../components/jeep";
import SlideShow from "../components/slideshow";
import Testimonials from "../components/testimonials";
import Footer from "../components/footer";
const Home = () => {
  return (
    <>
      <NavBar />
      <Slider />
      <Cards />
      <SlideShow />
      <Jeep />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
