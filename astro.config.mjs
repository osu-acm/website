import { defineConfig } from 'astro/config';

// https://astro.build/config
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    integrations: [react(), mdx()],
    site: "https://acm.oregonstate.edu",
});