// NAVIGATION
import Email from "@mui/icons-material/Email";
import PhoneIphone from "@mui/icons-material/PhoneIphone";
import Instagram from "@mui/icons-material/Instagram";

export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/about-me", key: "about_me", label: "About Me" },
  { href: "/press", key: "press", label: "Press" },
  { href: "/kugels", key: "kugels", label: "Kugels" },
  { href: "/buy", key: "buy ", label: "Buy" },
];

export const PRESS_ARTICLES = [
  {
    key: "the-shabbat-drop",
    publication: "The Shabbat Drop",
    title: "Meet Robin Weiss, Kugel Kween",
    blurb: `"She makes kugels, she tells jokes, she does it all!"`,
    imageUrl: "/shabbat-drop-logo.jpeg",
    url: "https://theshabbatdrop.com/p/meet-robin-weiss-kugel-kween ",
  },
  {
    key: "canvas-rebel",
    publication: "Canvas Rebel",
    title: "Meet Robin Weiss",
    blurb: `"blurb..."`,
    imageUrl: "/canvas-rebel-logo.jpg",
    url: "https://canvasrebel.com/meet-robin-weiss/ ",
  },
];

export const FOOTER_INFO = [
  {
    key: "email",
    icon: Email,
    text: "koolkugels@gmail.com",
    link: "mailto:koolkugels@gmail.com",
  },
  { key: "phone", icon: PhoneIphone, text: "(914) 400 - 9309" },
  {
    key: "instagram-kugelahs",
    icon: Instagram,
    text: "@kugelahs",
    link: "https://www.instagram.com/kugelahs/",
  },
];
