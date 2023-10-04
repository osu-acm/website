// Styles
import { motion } from "framer-motion";
import "./style.css";

const WeAre = () => {
  return (
    <section className="we-are" id="we-are">
      <div className="container">
        <div className="row">
          <div className="column">
            <h1 className="header-who">Who We Are</h1>
            <div className="divider" />
            <motion.p
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
              className="text-who"
            >
              Founded in 2015, the Oregon State University chapter of the
              Association for Computing Machinery (ACM) is a student
              organization that aims to foster a community of students
              interested in computer science and related fields. <br />
              <br />
              We provide opportunities for students to learn about the tech
              industry, network with professionals, and develop their skills
              through workshops and programming competitions.
            </motion.p>
          </div>
          <div className="column">
            <motion.img
              initial={{ opacity: 0, x: 72 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  delay: 0.5,
                  duration: 1,
                },
              }}
              viewport={{ once: true }}
              className="image-who"
              src="https://res.cloudinary.com/dkosoobf7/image/upload/v1686308787/pf/acm_a8wct3_qtcjjy.webp"
              width={500}
              height={200}
              alt="acm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeAre;
