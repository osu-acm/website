// Styles
import "./style.css";

const CTA = () => {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta__inner">
          <h2 className="text--white">Take the first step.</h2>
          <a href="https://apps.ideal-logic.com/osusli">
            <button className="btn btn--primary btn--big" type="button">
              Join ACM
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
