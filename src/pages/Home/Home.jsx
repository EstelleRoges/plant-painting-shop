import React from "react";
import Banner from "../../Other/Banner/Banner";
import WelcomeContent from "../../Components/WelcomeContent/WelcomeContent";
import Features from "../../Components/Features/Features";
import ContactContent from "../../Components/ContactArea/ContactContent";
import PopularProducts from "../../Components/ProductsSliders/PopularProducts";
import NewsSection from "../../Components/NewsSection/NewsSection";

const Home = () => {
  return (
    <>
      <Banner />
      <WelcomeContent />
      <Features />
      <PopularProducts />
      <NewsSection />
      <ContactContent />
    </>
  );
};

export default Home;