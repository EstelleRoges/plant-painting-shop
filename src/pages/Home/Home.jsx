import Banner from "../../Other/Banner/Banner";
import WelcomeContent from "../../Components/WelcomeContent/WelcomeContent";
import Features from "../../Components/Features/Features";
import ContactContent from "../../Components/ContactArea/ContactContent";
import PopularProducts from "../../Components/PopularProducts/PopularProducts";

const Home = () => {
  return (
    <>
    <Banner />
      <WelcomeContent />
      <Features />
      <PopularProducts/>
      <p>Les dernières news!</p>
      <ContactContent />
    </>
  );
};

export default Home;
