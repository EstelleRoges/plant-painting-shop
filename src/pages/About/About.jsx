import { styled } from "@mui/material";
import { motion } from "framer-motion";

const About = () => {

  return (
    <>
      <h1>Qui suis-je?</h1>
    <motion.div
      animate={{scaleX: 1}}
       initial={{ scaleX: 0 }}
      transition={{duration: 0.5}}
      >
      <AboutSection>
        <img
          src="imgs/pexels-pixabay-531844.jpg"
          alt="aboutImage_1"
        />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            deserunt, ea, impedit eveniet minima consequatur culpa, amet nobis
            rerum dicta quis quos delectus sint exercitationem ex vitae error
            recusandae rem?
          </p>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis veniam vitae, odit quo error rem soluta magnam nostrum
            incidunt natus pariatur! Dolorum id optio sed perferendis amet
            aperiam hic magnam sint ipsa facere. Recusandae, doloribus ea.
          </p>
        </div>
      </AboutSection>
      </motion.div>
      <motion.div
      animate={{scaleX: 1}}
       initial={{ scaleX: 0 }}
      transition={{duration: 0.5}}
      
      >
      <AboutSection>
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
            explicabo iste aspernatur amet et eligendi similique voluptatibus
            maiores ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cum
            deleniti expedita eos laudantium quia ipsa enim vero. Culpa
            laboriosam necessitatibus debitis dolorem nesciunt deserunt, minus,
            cupiditate alias, facere nulla hic voluptatibus delectus itaque?
            Nulla eum ab magnam pariatur, aliquam esse dolore dolorem vel animi
            ex!
          </p>
        </div>
        <img
          src="imgs/pexels-pixabay-442404.jpg"
          alt="aboutImage_2"
        />
      </AboutSection>
      </motion.div>
    </>
  );
};
const AboutSection = styled("div")`
  margin: 5em 0.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-items: center;

  img {
    width: 400px;
    height: 400px;
    border-radius: 50%;
    object-fit: cover;
  }

  p {
    width: 80%;
    margin: auto;
    padding: 1.5em;
    text-align: justify;
  }
`;

export default About;
