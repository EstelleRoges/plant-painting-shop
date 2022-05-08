import "./Home.scss";
import Banner from "../../Other/Banner/Banner";
import Features from "../../Components/Features/Features";
import ContactForm from "../../Components/ContactForm/ContactForm";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Home = () => {
  return <>
  <Banner /> 
  <h2 className="welcomeTitle">Welcome to the Succi Place!</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nemo cumque iusto ducimus nulla ab vitae ullam dolorum veniam maxime, in error aspernatur voluptatem labore unde repellat dolores accusantium tempora mollitia quia et suscipit autem sunt! Illum expedita aperiam impedit debitis quos officia nemo. Sequi velit minus nisi doloribus repellendus.</p>
  <Features />
  <p>Popular products - fill the sold data in productList and set an array filtered according to the data</p>
  <p>Latest news</p>
  <ContactForm />
  </>;
};

export default Home;
