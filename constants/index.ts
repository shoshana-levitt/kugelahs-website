// NAVIGATION
import {
  Email,
  PhoneIphone,
  Instagram,
  ContactMail,
} from "@mui/icons-material";

export const NAV_LINKS = [
  { href: "/", key: "home", label: "home" },
  { href: "/about-me", key: "about_me", label: "about me" },
  { href: "/press", key: "press", label: "press" },
  { href: "/kugels", key: "kugels", label: "buy kugels" },
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
  {
    key: "phone",
    icon: PhoneIphone,
    text: "(914) 400 - 9309",
  },
  {
    key: "instagram-kugelahs",
    icon: Instagram,
    text: "@kugelahs",
    link: "https://www.instagram.com/kugelahs/",
  },
  {
    key: "instagram-robin",
    icon: Instagram,
    text: "@robinlle990",
    link: "https://www.instagram.com/robinlle99/",
  },
  {
    key: "instagram-kugels-and-komedians",
    icon: Instagram,
    text: "@kugelsandkomedians",
    link: "https://www.instagram.com/kugelsandkomedians/",
  },
  {
    key: "newsletter",
    icon: ContactMail,
    text: "Subscribe to Newsletter",
    link: "/",
  },
];

export const KUGEL_FLAVORS = [
  { key: "pecan-chocolate", flavor: "Pecan Chocolate" },
  { key: "pecan-brown-sugar", flavor: "Pecan Brown Sugar" },
  { key: "apple-pie", flavor: "Apple Pie" },
  { key: "pumpkin-cheesecake", flavor: "Pumpkin Cheesecake" },
];

export const KUGEL_PRODUCTS = [
  {
    key: "kugel-trays",
    product: "Kugel Trays",
    serves: "25",
    description: "Available via Catering",
    imageUrl: "/kugel-doodle.png",
  },
  {
    key: "kugel-cupcakes",
    product: "Kugel Cupcakes",
    serves: "25",
    description: "Available via Catering",
    imageUrl: "/kugel-doodle.png",
  },
  {
    key: "mini-kugels",
    product: "Mini Kugels",
    serves: "1",
    description: "Sold at Kugels & Komedians",
    imageUrl: "/kugel-doodle.png",
  },
  {
    key: "kugel-class",
    product: "Book a Kugel Klass",
    serves: "1",
    description: "Learn how to make kugels with me!",
    imageUrl: "/kugel-doodle.png",
  },
];
