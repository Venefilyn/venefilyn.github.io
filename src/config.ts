import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://venefilyn.se", // replace this with your deployed domain
  author: "Freya Gustavsson",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "Venefilyn 💚",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 4,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/Venefilyn",
    linkTitle: ` ${SITE.title} on GitHub`,
    active: true,
  },
  {
    name: "Mastodon",
    href: "https://snug.moe/@Venefilyn",
    linkTitle: `${SITE.title} on Mastodon`,
    active: true,
  },
];
