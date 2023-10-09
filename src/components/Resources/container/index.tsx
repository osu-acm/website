import { useCallback, useState } from "react";
import type {
  CompetitveProgrammingResource,
  OsuResource,
  WebDevelopmentResource,
} from "../../../types";
import { CompProResources, OsuEecsResources, WebDevResources } from "../render";

interface ResourcesProps {
  resources: {
    compPro: CompetitveProgrammingResource[];
    webDev: WebDevelopmentResource[];
    eecsOsu: OsuResource[];
  };
}

export default function ResourcesContainer({ resources }: ResourcesProps) {
  const handleCardClick = useCallback((link: string) => {
    window.open(link, "_blank");
  }, []);

  return (
    <div className="container">
      {/* OSU EECS Resources*/}
      <OsuEecsResources
        resources={resources.eecsOsu}
        handleCardClick={handleCardClick}
      />
      {/* Competitve Programming Resources */}
      <CompProResources
        resources={resources.compPro}
        handleCardClick={handleCardClick}
      />
      {/* Web Development Resources */}
      <WebDevResources
        resources={resources.webDev}
        handleCardClick={handleCardClick}
      />
    </div>
  );
}
