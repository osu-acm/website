import { motion } from "framer-motion";

// Styles
import "./style.css";

// Icons
import {
  BrandIcon,
  CustomizableIcon,
  RecordsIcon,
} from "../../assets/icons/icons";

// Features
const features = [
  {
    icon: <BrandIcon />,
    title: "Competitve Programming",
    text: "Each week, we have meetings to practice for competitive programming competitions such as ICPC and Codesprint LA.",
  },
  {
    icon: <RecordsIcon />,
    title: "Networking and Outreach",
    text: "We host events to connect students with OSU alumni, current industry professionals, and, provide opportunities for students to network with each other.",
  },
  {
    icon: <CustomizableIcon />,
    title: "Workshops and Career Development",
    text: "We host workshops to teach students about various topics in computer science and provide opportunities for students to work on career development through  mock interviews and resume reviews.",
  },
];

const Features = () => {
  return (
    <>
      <section className="features">
        <motion.div
          initial={{ opacity: 0, y: 72 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.5,
              duration: 1,
            },
          }}
          viewport={{ once: true }}
          className="container"
        >
          <div className="title">
            <h2>Our Mission</h2>
            <p className="paragraph paragraph--medium">
              At our ACM chapter, we strive to promote and foster the
              development of a strong computer science community within the
              university.
            </p>
          </div>
          <ul className="features-list">
            {features.map((feature, index) => (
              <li key={index} className="feature-list__item">
                <div>{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p className="paragraph paragraph--small">{feature.text}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>
      <span className="hero__border" />
    </>
  );
};

export default Features;
