import React from "react";
import { AboutContainer, AboutSection } from "./AboutStyle";
import { motion } from "framer-motion";

const About = () => {
  return (
    <AboutContainer style={{ marginTop: "4em" }}>
      <h2>Qui suis-je?</h2>
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
    </AboutContainer>
  );
};

export default About;
