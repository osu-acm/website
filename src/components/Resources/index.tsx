import type {
  CompetitveProgrammingResource,
  OsuResource,
  WebDevelopmentResource,
} from "../../types";
import "./style.css";

const compProResources: CompetitveProgrammingResource[] = [
  {
    title: "Leetcode",
    text: "Platform for practicing technical interview questions.",
    link: "https://leetcode.com/",
  },
  {
    title: "Leetcode Patterns",
    text: "Problems grouped by common patterns and topics.",
    link: "https://seanprashad.com/leetcode-patterns/",
  },
  {
    title: "CP Algorithms",
    text: "A collection of algorithms and data structures for competitive programming.",
    link: "https://cp-algorithms.com/",
  },
  {
    title: "Errichto",
    text: "Errichto is a competitive programmer who uploads commentary of problems and competitions to his channel.",
    link: "https://www.youtube.com/channel/UCBr_Fu6q9iHYQCh13jmpbrg",
  },
  {
    title: "Jeff Erickson's Algorithms",
    text: "Jeff Erickson is a professor at UIUC and wrote this amazing and free algorithms textbook.",
    link: "http://jeffe.cs.illinois.edu/teaching/algorithms/",
  },
];

const webDevResources: WebDevelopmentResource[] = [
  {
    title: "Headless UI",
    text: "Unstyled and fully accessible component library for TailwindCSS.",
    link: "https://headlessui.com/",
    tags: ["Component Library", "TailwindCSS"],
  },
  {
    title: "SVG Backgrounds",
    text: "Customizable SVG background generator in under 5KB.",
    link: "https://www.svgbackgrounds.com/",
    tags: ["Assets"],
  },
  {
    title: "404 Illustrations",
    text: "Ready to use 404 illustrations for your website.",
    link: "https://www.kapwing.com/404-illustrations",
    tags: ["Assets"],
  },
  {
    title: "Figma",
    text: "Free UI design tool for teams; offering real-time collaboration.",
    link: "https://www.figma.com/",
    tags: ["Design", "Assets"],
  },
  {
    title: "TailwindCSS",
    text: "Utility-first CSS framework for rapidly building custom designs.",
    link: "https://tailwindcss.com/",
    tags: ["CSS"],
  },
  {
    title: "Svelte",
    text: "A radical new approach to building user interfaces.",
    link: "https://svelte.dev/",
    tags: ["Framework"],
  },
  {
    title: "React",
    text: "A library which allows you to create user interfaces using components.",
    link: "https://react.dev/",
    tags: ["Framework"],
  },
];

const eecsOsuResources: OsuResource[] = [
  {
    title: "Rate My Professor Extension",
    text: "Chrome extension to view professor ratings on OSU's course catalog.",
    link: "https://chrome.google.com/webstore/detail/rate-my-professor-extensi/hgfogfefocfabnfjmjijfcjogeghmocn",
  },
  {
    title: "OSU Class Data Explorer",
    text: "Exploration of data about courses, subjects, and classes at OSU.",
    link: "https://osuclassdata.ethohampton.com/",
  },
  {
    title: "EECS Class Forecasting",
    text: "Forecasting of EECS classes for the next academic year for both ecampus and on-campus.",
    link: "https://docs.google.com/spreadsheets/u/2/d/1s2tfkbiQQuEVG4jTj1lN6zF6McxphtIiCBrXO_WKl_4/htmlview#",
  },
];

const ResourcesGrid = () => {
  return (
    <section className="resources">
      <div className="container">
        {/* Competitve Programming */}
        <div className="resources__inner">
          <h1 className="resources__title">Competitve Programming</h1>
          <span className="resources__subtitle">
            Go from <b>zero to hero</b> in competitive programming.
          </span>
          <div className="divider"></div>
          <div className="resources__grid">
            {compProResources.map(
              (resource: CompetitveProgrammingResource, index) => (
                <div className="resources__card" key={index}>
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noreferrer"
                    className="resources__card__link"
                  >
                    <div className="resources__card__inner">
                      <div className="resources__card__text">
                        <h2 className="resource__card__text__title">
                          {resource.title}
                        </h2>
                        <p className="resource__card__text__description">
                          {resource.text}
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              )
            )}
          </div>
        </div>
        {/* Web Development */}
        <div className="resources__inner">
          <h1 className="resources__title">Web Development</h1>
          <span className="resources__subtitle">
            Level up your<b> website building</b> skills.
          </span>
          <div className="divider"></div>
          <div className="resources__grid">
            {webDevResources.map((resource: WebDevelopmentResource, index) => (
              <div className="resources__card" key={index}>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noreferrer"
                  className="resources__card__link"
                >
                  <div className="resources__card__inner">
                    <div className="resources__card__text">
                      <h2 className="resource__card__text__title">
                        {resource.title}
                      </h2>
                      <p className="resource__card__text__description">
                        {resource.text}
                      </p>
                      <div className="resource__card__text__tags">
                        {resource?.tags?.map((tag, index) => (
                          <span
                            className="resource__card__text__tag"
                            key={index}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
        {/* OSU EECS */}
        <div className="resources__inner">
          <h1 className="resources__title">OSU EECS</h1>
          <span className="resources__subtitle">
            Resources for <b>EECS students</b> at OSU.
          </span>
          <div className="divider"></div>
          <div className="resources__grid">
            {eecsOsuResources.map((resource: OsuResource, index) => (
              <div className="resources__card" key={index}>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noreferrer"
                  className="resources__card__link"
                >
                  <div className="resources__card__inner">
                    <div className="resources__card__text">
                      <h2 className="resource__card__text__title">
                        {resource.title}
                      </h2>
                      <p className="resource__card__text__description">
                        {resource.text}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
        {/* Backend Development */}
        <div className="resources__inner"></div>
      </div>
    </section>
  );
};

export default ResourcesGrid;
