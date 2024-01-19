import type { CompetitiveProgrammingResource, OsuResource, WebDevelopmentResource } from "../../types";

const compProResources: CompetitiveProgrammingResource[] = [
      {
            title: "Leetcode",
            text: "Platform for practicing technical interview questions.",
            link: "https://leetcode.com/",
            tags: ["Problems", "Interview Prep"],
      },
      {
            title: "Leetcode Patterns",
            text: "Problems grouped by common patterns and topics.",
            link: "https://seanprashad.com/leetcode-patterns/",
            tags: ["Problems", "Interview Prep"],
      },
      {
            title: "CP Algorithms",
            text: "A collection of algorithms and data structures for competitive programming.",
            link: "https://cp-algorithms.com/",
            tags: ["Intuition", "Algorithms"],
      },
      {
            title: "Errichto",
            text: "Errichto is a competitive programmer who uploads commentary of problems and competitions to his channel.",
            link: "https://www.youtube.com/channel/UCBr_Fu6q9iHYQCh13jmpbrg",
            tags: ["YouTube", "Intuition"],
      },
      {
            title: "Jeff Erickson's Algorithms",
            text: "Jeff Erickson is a professor at UIUC and wrote this amazing and free algorithms textbook.",
            link: "http://jeffe.cs.illinois.edu/teaching/algorithms/",
            tags: ["Textbook", "Algorithms"],
      },
      {
            title: "Codeforces",
            text: "Codeforces is a website that hosts competitive programming contests.",
            link: "https://codeforces.com/",
            tags: ["Problems"],
      },
      {
            title: "USACO Guide",
            text: "A free collection of curated, high-quality resources/problems to take you from Bronze to Platinum and beyond.",
            link: "https://usaco.guide/",
            tags: ["Intuition", "Problems"],
      },
      {
            title: "Visualgo",
            text: "Visualize data structures and algorithms through animation.",
            link: "https://visualgo.net/en",
            tags: ["Algorithms", "Intuition"],
      },
      {
            title: "Competitive Programmer's Handbook",
            text: "A handbook of data structures and algorithms for competitive programmers.",
            link: "https://cses.fi/book/book.pdf",
            tags: ["Textbook", "Algorithms", "Intuition"],
      }
];

const webDevResources: WebDevelopmentResource[] = [
      {
            title: "Headless UI",
            text: "Unstyled and fully accessible component library for TailwindCSS.",
            link: "https://headlessui.com/",
            tags: ["Components", "Tailwind"],
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
      {
            title: "Next.js",
            text: "A way to build static and server-side rendered React applications.",
            link: "https://nextjs.org/",
            tags: ["Framework", "React"],
      },
      {
            title: "shadcn/ui",
            text: "Beautifully designed components built with Radix UI and Tailwind CSS.",
            link: "https://ui.shadcn.com/",
            tags: ["Components", "Tailwind"],
      },
      {
            title: "Bulma",
            text: "A free, open source CSS framework based on Flexbox.",
            link: "https://bulma.io/",
            tags: ["CSS"],
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
            text: "Exploration of data about courses, grades, and classes at OSU.",
            link: "https://osuclassdata.ethohampton.com/",
      },
      {
            title: "EECS Class Forecasting",
            text: "Forecasting of EECS classes for the next academic year for both ecampus and on-campus.",
            link: "https://docs.google.com/spreadsheets/u/2/d/1s2tfkbiQQuEVG4jTj1lN6zF6McxphtIiCBrXO_WKl_4/htmlview#",
      },
      {
            title: "Church of Evan",
            text: "Unofficial OSU EECS Discord server.",
            link: "https://discord.gg/AFgEcT8eeD",
      },
      {
            title: "OSU Ecampus Discord",
            text: "A discord server for OSU Ecampus students.",
            link: "https://discord.gg/hMeN4BXs6P",
      },
      {
            title: "MyEECS",
            text: "Tools, services, and resources specific to the School of Electrical Engineering and Computer Science",
            link: "https://engineering.oregonstate.edu/EECS/MyEECS"
      },
      {
            title: "ENGR+ Course Load Guide",
            text: "Course load guidance for incoming OSU first-year CS majors.",
            link: "https://chrisho.dev/blog/engr-plus.html"
      }
];

const resourceMap = {
      compPro: compProResources,
      webDev: webDevResources,
      eecsOsu: eecsOsuResources,
};

export default resourceMap;
