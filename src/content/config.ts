import { defineCollection, z } from "astro:content";
// We define a `type` and `schema` for each collection we want to use
const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});
// We export a single `collections` object to register our collection(s)
export const collections = {
  posts: postsCollection,
};
