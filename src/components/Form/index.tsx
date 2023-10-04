import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Styles
import "./style.css";

// Types
type LinkListItemType = {
  original: string;
  new: string;
  copied: boolean;
};

const Form = () => {
  const [linksList, setLinksList] = useState([] as LinkListItemType[]);
  const [originalLink, setOriginalLink] = useState("");
  const [error, setError] = useState("");

  // Check if url is valid
  const isValidUrl = (url: string) => {
    return /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi.test(
      url
    );
  };

  // Submit
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      url: { value: string };
    };

    if (!isValidUrl(target.url.value)) {
      setError("Please add a link");
      setOriginalLink("");
    } else {
      fetch(`https://api.shrtco.de/v2/shorten?url=${originalLink}`)
        .then((response) => response.json())
        .then((data) => {
          const newLink = {
            original: originalLink,
            new: data.result.full_short_link,
            copied: false,
          };
          setLinksList([...linksList, newLink]);
          setError("");
          setOriginalLink("");
        });
    }
  };

  // Copy
  const handleCopy = (e: React.SyntheticEvent<EventTarget>) => {
    if (!(e.target instanceof HTMLButtonElement)) {
      return;
    }

    if (e.target.dataset.short) {
      const short = e.target.dataset.short;
      // Copy to clipboard
      navigator.clipboard.writeText(short);

      // Mark as copied
      setLinksList(
        linksList.map((link) => {
          if (link.new === short) {
            console.log("change");

            return { ...link, copied: true };
          }
          return { ...link, copied: false };
        })
      );
    }
  };

  // Get links from local storage
  useEffect(() => {
    if (localStorage.getItem("links")) {
      const linksFromLS = localStorage.getItem("links");
      setLinksList(JSON.parse(linksFromLS || "[]"));
    }
  }, []);

  // Save link to local storage
  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(linksList));
  }, [linksList]);

  return (
    <section className="form-section">
      <div className="container">
        <motion.form
          initial={{ opacity: 0, y: 72 }}
          whileInView={{
            opacity: 1,
            y: -80,
            transition: {
              delay: 0.5,
              duration: 0.8,
            },
          }}
          viewport={{ once: true }}
          className="form"
          onSubmit={handleSubmit}
        >
          <div className="form__input-group">
            <label htmlFor="url">Url</label>
            <input
              type="text"
              id="url"
              name="url"
              placeholder="Shorten a link here..."
              value={originalLink}
              onChange={(e) => setOriginalLink(e.currentTarget.value)}
              required
            />
            {error !== "" && <span className="form__error">{error}</span>}
          </div>
          <button className="btn btn--primary btn--big btn--form" type="submit">
            Shorten It!
          </button>
        </motion.form>
        <ul className="short-links">
          {linksList.map((link, index) => (
            <motion.li
              initial={{ y: 400 }}
              animate={{ y: "0" }}
              transition={{
                delay: 1.5,
                duration: 0.8,
              }}
              key={index}
              className="short-links__item"
            >
              <span className="original-link">{link.original}</span>
              <div className="short-links__result">
                <span className="short-link">{link.new}</span>
                <button
                  data-short={link.new}
                  onClick={handleCopy}
                  className={`btn btn--primary btn--form ${
                    link.copied && "btn--copied"
                  }`}
                  type="button"
                >
                  {link.copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Form;
