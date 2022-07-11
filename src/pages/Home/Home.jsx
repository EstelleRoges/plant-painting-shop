import Banner from "../../Other/Banner/Banner";
import WelcomeContent from "../../Components/WelcomeContent/WelcomeContent";
import Features from "../../Components/Features/Features";
import ContactContent from "../../Components/ContactArea/ContactContent";
import PopularProducts from "../../Components/ProductsSliders/PopularProducts";

const Home = () => {
  return (
    <>
      <Banner />
      <WelcomeContent />
      <Features />
      <h1>Top 5 des tableaux à succès</h1>
      <PopularProducts />
      <ContactContent />
    </>
  );
};

export default Home;