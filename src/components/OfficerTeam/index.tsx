// Styles
import { useEffect, useMemo, useState } from "react";
import officerLinks from "../../assets/links/officerLinks";
import ACMLogo from "../SVGs";
import "./style.css";

const OfficerTeam = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [links, setLinks] = useState(officerLinks);

  const sortLinks = () => {
    const president = links.find((officer) => officer.role === "President");
    const otherOfficers = links.filter(
      (officer) => officer.role !== "President"
    );

    if (president) {
      setLinks([president, ...otherOfficers]);
    }
  };

  useMemo(() => {
    if (windowWidth > 768) {
      sortLinks();
    } else {
      setLinks(officerLinks);
    }
  }, [windowWidth, links]);

  return (
    <section className="officer">
      <h1 className="officer_title" id="the-team">
        Officer Team
      </h1>
      <div className="officer_container">
        {/* if mobile sort officer links to put president first */}

        {links.map((officer) => {
          if (officer.name === "image") {
            return (
              // <div className="officer_image_container">
              //   <img
              //     style={{ width: "100%", transform: "translateY(-10rem)" }}
              //     className="officer_image"
              //     src={officer.image}
              //     alt="Center Logo"
              //   />
              // </div>
              <>
                <ACMLogo />
              </>
            );
          }
          return (
            <ProfileCard
              name={officer.name}
              role={officer.role}
              image={officer.image}
              onClick={() => console.log(`Clicked ${officer.name}`)}
            />
          );
        })}
      </div>
    </section>
  );
};

export const ProfileCard = (props: any) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const underlineStyle = {
    display: "inline-block",
    backgroundImage: "linear-gradient(#dc4405, #000, #dc4405)",
    backgroundPosition: isHovered ? "10% 100%" : "0 100%",
    backgroundSize: isHovered ? "100% 4px" : "0% 4px",
    backgroundRepeat: "no-repeat",
    transition: "background 0.3s ease",
    cursor: "pointer",
  };

  return (
    <>
      <div
        className="officer_card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: props.role === "President" ? "translateY(-30px)" : "",
        }}
      >
        <img
          className="officer_image"
          src={props.image}
          alt={`${props.name}'s Headshot`}
        />
        <div className="officer_details">
          <h2 className="officer_name" style={underlineStyle}>
            {props.name}
          </h2>
          <h3 className="officer_position">{props.role}</h3>
        </div>
      </div>
    </>
  );
};

export default OfficerTeam;
