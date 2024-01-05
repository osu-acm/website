<h1 align="center">ACM @ OSU's Official Website</h1>
<div align="center">
  <h3>
    Made by
    <a href="https://github.com/nyumat">
      @Nyumat
    </a>
    <span> | </span>
     <a href="https://astro.build"><img src="https://astro.badg.es/v2/built-with-astro/small.svg" alt="Built with Astro" width="192" height="32" align="center"></a>
  </h3>
</div>

<div align="center"><img src="https://res.cloudinary.com/dkosoobf7/image/upload/v1696379199/pf/acm_site.png"></img></div>

<br/>
<br/>

<div align="center">
  <img width="100" height="30" src="https://badges.aleen42.com/src/node.svg">
  <img width="100" height="30" src="https://badges.aleen42.com/src/react.svg">
  <img width="130" height="30" src="https://badges.aleen42.com/src/typescript.svg">
	<img width="100" height="30" src="https://badges.aleen42.com/src/vitejs.svg">
	<img width="100" height="30" src="https://badges.aleen42.com/src/npm.svg">
</div>

## Contributing

### Blog

To add a blog post, read the [blogging guide](https://gist.github.com/Nyumat/8f07bd3ba1fb482c71c2a729134d5487) and then fork the repo.

Once you have forked the repo, follow the steps under the [website](#website) section to get the website running locally.

Once you have finished your blog post, create a pull request and wait for it to be reviewed by our team. 🙂

### Website

1. Fork the repo [here](https://github.com/osu-acm/website/fork)

2. Clone your forked repo

```bash
git clone https://github.com/[placeholder].git
```

3. Create and checkout a new branch

```bash
git checkout -b [feature-name]
```

4. Install dependencies

```bash
npm install
```

5. Generate the astro types

```bash
npx astro sync
```

6. Run the development server

```bash
npm run dev
```

7. Finally, open [http://localhost:4321](http://localhost:4321) within your browser to see the result.

🚀 **Happy Contributing!** 🚀

## Contributors

<a href="https://github.com/osu-acm/website/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=osu-acm/website" />
</a>


## FAQ

>  Why did you change the old website?

Our team enjoyed our old site, however, we knew that it was time for change. Not only did we want to create a site that was more modern and easier to maintain, we also wanted to create a site that was more accessible to our members and the public. We hope that you enjoy our new site!
<br/>

>  Why did you choose Astro.js?

With Astro.js, it brings the best parts of static site generation and combines it reactivity and the astro.js islands architecture.

This allows us to utilize tools such as TypeScript, React, and Framer-motion to craft wonderful animations, have drop-in content generation, and an intuitive overall user interface.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
