import { motion } from "framer-motion";

// Styles
import "./style.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0" }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
            className="hero__text"
          >
            <h1>Association for Computing Machinery @ OSU</h1>
            <p className="paragraph paragraph--big">
              Oregon State University's
              <span className="highlight"> premier </span>
              computer science community.
            </p>
            <a href="https://apps.ideal-logic.com/osusli" target="_blank" rel="noreferrer" className="btn btn--primary btn--big">
              Join ACM
            </a>
          </motion.div>
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "-40%" }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
            className="hero__image"
          />
        </div>
      </div>
      <span className="hero__border" />
    </section>
  );
};

export const ResuableHero = ({
  title,
  text,
}: {
  title: string;
  text: string;
}) => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0" }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
            className="hero__text"
          >
            <h1>{title}</h1>
            <p className="paragraph paragraph--big">{text}</p>
          </motion.div>
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "-40%" }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
            className="resources__image"
          />
        </div>
      </div>
      <span className="hero__border" />
    </section>
  );
};

export default Hero;
