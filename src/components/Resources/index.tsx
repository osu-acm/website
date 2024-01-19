import ResourcesContainer from "./container";
import resourceMap from "./data";
import "./style.css";

const ResourcesGrid = () => {
  return (
    <section className="resources">
      <ResourcesContainer resources={resourceMap} />
    </section>
  );
};

interface TagFilterProps {
  tags: string[];
  selectedTag: string | null;
  onSelectTag: (tag: string | null) => void;
}

export const TagFilter: React.FC<TagFilterProps> = ({
  tags,
  selectedTag,
  onSelectTag,
}) => {
  return (
    <div className="tag-filter">
      <span
        className={`tag ${selectedTag === null ? "selected" : ""}`}
        onClick={() => onSelectTag(null)}
      >
        All
      </span>
      {tags.map((tag, index) => (
        <span
          key={index}
          className={`tag ${selectedTag === tag ? "selected" : ""}`}
          onClick={() => onSelectTag(tag)}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default ResourcesGrid;