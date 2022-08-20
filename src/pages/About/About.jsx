import { styled } from "@mui/material";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div style={{marginTop: "4em"}}>
      <h1>Qui suis-je?</h1>
      <motion.div
        animate={{ scaleX: 1 }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AboutSection>
          <div className="aboutImg">
            <img src="imgs/pexels-pixabay-531844.jpg" alt="aboutImage_1" />
          </div>
          <div className="aboutText">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio deserunt, ea, impedit eveniet minima consequatur culpa,
              amet nobis rerum dicta quis quos delectus sint exercitationem ex
              vitae error recusandae rem?
            </p>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis veniam vitae, odit quo error rem soluta magnam
              nostrum incidunt natus pariatur! Dolorum id optio sed perferendis
              amet aperiam hic magnam sint ipsa facere. Recusandae, doloribus
              ea.
            </p>
          </div>
        </AboutSection>
      </motion.div>
      <motion.div
        animate={{ scaleX: 1 }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AboutSection>
          <div className="aboutText">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Cupiditate explicabo iste aspernatur amet et eligendi similique
              voluptatibus maiores ipsum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cum
              deleniti expedita eos laudantium quia ipsa enim vero. Culpa
              laboriosam necessitatibus debitis dolorem nesciunt deserunt,
              minus, cupiditate alias, facere nulla hic voluptatibus delectus
              itaque? Nulla eum ab magnam pariatur, aliquam esse dolore dolorem
              vel animi ex!
            </p>
          </div>
          <div className="aboutImg">
            <img src="imgs/pexels-pixabay-442404.jpg" alt="aboutImage_2" />
          </div>
        </AboutSection>
      </motion.div>
    </div>
  );
};
const AboutSection = styled("section")`
  margin: 5em 0.5em;
  display: flex;
  justify-content: space-between;
  justify-items: center;
  box-sizing: border-box;

  div {
    width: 50%;
  }

  .aboutImg {
    display: flex;
    justify-content: center;

    img {
      margin: auto;
      width: 400px;
      height: 400px;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  p {
    margin: auto;
    padding: 1.5em;
    text-align: justify;
  }

  @media screen and (max-width: 992px) {
    .aboutText {
      width: 55%;
    }
    .aboutImg {
      width: 40%;

      img {
        padding: 1em;
        width: 300px;
        height: 300px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    .aboutText,
    .aboutImg {
      width: fit-content;
    }
  }

  @media screen and (max-width: 576px) {
    margin-top: 4em;
    p {
      padding: 1.5em 0;
    }

    .aboutImg img {
      width: 250px;
      height: 250px;
    }
  }
`;

export default About;
