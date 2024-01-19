import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";
import { TagFilter } from "..";
import {
  type CompetitiveProgrammingResource,
  type OsuResource,
  type WebDevelopmentResource,
} from "../../../types";
import type { ResourcesProps } from "../types.ts";

export const OsuEecsResources = ({
  resources,
  handleCardClick,
}: ResourcesProps<OsuResource[]>) => {
  const [parent] = useAutoAnimate();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const handleTagClick = (tag: string | null) => {
    setSelectedTag(tag);
  };
  const allTags = Array.from(
    new Set(resources.flatMap((resource) => resource.tags || []))
  );
  const [displayLimit, setDisplayLimit] = useState(3);
  return (
    <div className="resources__inner">
      <h1 className="resources__title">OSU EECS</h1>
      <span className="resources__subtitle">
        Resources for fellow <b>EECS students</b> at OSU.
      </span>
      <div className="divider"></div>
      {/* No tags for the OSU EECS Resources. */}
      <div className="resources__grid" ref={parent}>
        {resources
          .filter(
            (resource) =>
              selectedTag === null ||
              (resource.tags && resource.tags.includes(selectedTag))
          )
          .slice(0, displayLimit)
          .map((resource: OsuResource, index) => (
            <div
              className="resources__card"
              key={index}
              onClick={() => handleCardClick(resource.link)}
            >
              <div className="resources__card__inner">
                <div className="resources__card__text">
                  <h2 className="resource__card__text__title">
                    {resource.title}
                  </h2>
                  <p className="resource__card__text__description">
                    {resource.text}
                  </p>
                  {/* 
                    We can possibly add these tags back in the future.
                  <div className="resource__card__text__tags">
                    {resource?.tags?.map((tag, index) => (
                      <span className="resource__card__text__tag" key={index}>
                        {tag}
                      </span>
                    ))}
                  </div> */}
                </div>
              </div>
            </div>
          ))}
      </div>
      {resources.length > displayLimit && resources.length > 3 && (
        <div
          className="resources__button"
          onClick={() => setDisplayLimit(displayLimit + 3)}
        >
          <button className="loadmore__button">Load More</button>
        </div>
      )}
    </div>
  );
};

export const CompProResources = ({ resources, handleCardClick }: ResourcesProps<CompetitiveProgrammingResource[]>) => {
  const [parent] = useAutoAnimate();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const handleTagClick = (tag: string | null) => {
    setSelectedTag(tag);
  };
  const allTags = Array.from(
    new Set(resources.flatMap((resource) => resource.tags || []))
  );

  const [displayLimit, setDisplayLimit] = useState(3);

  return (
    <div className="resources__inner">
      <h1 className="resources__title">Competitive Programming</h1>
      <span className="resources__subtitle">
        Go from <b>zero to hero</b> in competitive programming.
      </span>
      <div className="divider"></div>
      <TagFilter
        tags={allTags}
        selectedTag={selectedTag}
        onSelectTag={handleTagClick}
      />
      <div className="resources__grid" ref={parent}>
        {resources
          .filter(
            (resource) =>
              selectedTag === null ||
              (resource.tags && resource.tags.includes(selectedTag))
          )
          .slice(0, displayLimit)
          .map((resource: CompetitiveProgrammingResource, index) => (
            <div
              className="resources__card"
              key={index}
              onClick={() => handleCardClick(resource.link)}
            >
              <div className="resources__card__inner">
                <div className="resources__card__text">
                  <h2 className="resource__card__text__title">
                    {resource.title}
                  </h2>
                  <p className="resource__card__text__description">
                    {resource.text}
                  </p>
                  {/* 
                    We can possibly add these tags back in the future.
                  <div className="resource__card__text__tags">
                    {resource?.tags?.map((tag, index) => (
                      <span className="resource__card__text__tag" key={index}>
                        {tag}
                      </span>
                    ))}
                  </div> */}
                </div>
              </div>
            </div>
          ))}
      </div>
      {resources.length > displayLimit && resources.length > 3 && (
        <div
          className="resources__button"
          onClick={() => setDisplayLimit(displayLimit + 3)}
        >
          <button className="loadmore__button">Load More</button>
        </div>
      )}
    </div>
  );
};

export const WebDevResources = ({
  resources,
  handleCardClick,
}: ResourcesProps<WebDevelopmentResource[]>) => {
  const [parent] = useAutoAnimate();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const handleTagClick = (tag: string | null) => {
    setSelectedTag(tag);
  };
  const allTags = Array.from(
    new Set(resources.flatMap((resource) => resource.tags || []))
  );

  const [displayLimit, setDisplayLimit] = useState(3);

  return (
    <div className="resources__inner">
      <h1 className="resources__title">Web Development</h1>
      <span className="resources__subtitle">
        Level up your<b> website building</b> skills.
      </span>
      <div className="divider"></div>
      <TagFilter
        tags={allTags}
        selectedTag={selectedTag}
        onSelectTag={handleTagClick}
      />
      <div className="resources__grid" ref={parent}>
        {resources
          .filter(
            (resource) =>
              selectedTag === null ||
              (resource.tags && resource.tags.includes(selectedTag))
          )
          .slice(0, displayLimit)
          .map((resource: WebDevelopmentResource, index) => (
            <div
              className="resources__card"
              key={index}
              onClick={() => handleCardClick(resource.link)}
            >
              <div className="resources__card__inner">
                <div className="resources__card__text">
                  <h2 className="resource__card__text__title">
                    {resource.title}
                  </h2>
                  <p className="resource__card__text__description">
                    {resource.text}
                  </p>
                  {/* 
                    We can possibly add these tags back in the future.
                  <div className="resource__card__text__tags">
                    {resource?.tags?.map((tag, index) => (
                      <span className="resource__card__text__tag" key={index}>
                        {tag}
                      </span>
                    ))}
                  </div> */}
                </div>
              </div>
            </div>
          ))}
      </div>
      {resources.length > displayLimit && resources.length > 3 && (
        <div
          className="resources__button"
          onClick={() => setDisplayLimit(displayLimit + 3)}
        >
          <button className="loadmore__button">Load More</button>
        </div>
      )}
    </div>
  );
};
