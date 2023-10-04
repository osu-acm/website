// Styles
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./style.css";

const Stats = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const leftInView = useInView(leftRef, { once: true });
  const rightInView = useInView(rightRef, { once: true });

  return (
    <section className="stats" id="by-the-numbers">
      <div className="container">
        <h1 className="text-header">About The Club</h1>
        <div className="divider"></div>
        <div className="section-content">
          <div className="info-cards">
            <motion.div
              className="info-card"
              ref={leftRef}
              animate={leftInView ? { opacity: 1, x: 0 } : {}}
              initial={{ opacity: 0, x: -300 }}
              transition={{ duration: 1 }}
            >
              <span className="info-number">500+</span>
              <span className="info-label">Members</span>
            </motion.div>
            <motion.div
              className="info-card"
              ref={rightRef}
              animate={rightInView ? { opacity: 1, x: 0 } : {}}
              initial={{ opacity: 0, x: 300 }}
              transition={{ duration: 1 }}
            >
              <span className="info-number">20+</span>
              <span className="info-label">Top 10 ICPC Placements</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
