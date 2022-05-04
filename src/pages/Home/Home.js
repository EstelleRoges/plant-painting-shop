import "./Home.scss";
import Banner from "../../Other/Banner/Banner"
import ContactForm from "../../Components/ContactForm/ContactForm";
const Home = () => {
  return <>
  <Banner /> 
  <h2>Welcome to the Succi Place!</h2>
  <p>Presentation text</p>
  <p>What is the website offering</p>
  <p>Popular products</p>
  <p>Other stuff like testimonies or art gallery opening</p>
  <ContactForm />
  </>;
};

export default Home;
