import resourceMap from "./data.ts";

export type ResourceMap = typeof resourceMap;

type ResourcesCategory = ResourceMap[keyof ResourceMap]

export type ResourcesProps<T extends ResourcesCategory> = {
  resources: T;
  handleCardClick: (link: string) => void;
}
