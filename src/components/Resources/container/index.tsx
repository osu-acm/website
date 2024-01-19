import { useCallback } from "react";
import { CompProResources, OsuEecsResources, WebDevResources } from "../render";
import type { ResourceMap } from "../types.ts";

export default function ResourcesContainer({ resources }: { resources: ResourceMap }) {
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
