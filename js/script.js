import SmoothScroll from "./modules/smooth-scroll.js";
import Accordion from "./modules/accordion.js";

import tabNav from "./modules/tab-nav.js";
import animationScroll from "./modules/animation-scroll.js";
import modal from "./modules/modal.js";
import tooltip from "./modules/tooltip.js";
import dropdownMenu from "./modules/dropdown-menu.js";
import menuMobile from "./modules/menu-mobile.js";
import openingHours from "./modules/opening-hours.js";
import numbersFetch from "./modules/numbers-fetch.js";
import bitcoinFetch from "./modules/bitcoin-fetch.js";

const smoothScroll = new SmoothScroll('[data-menu="smooth"] a[href^="#"]');
smoothScroll.init();
const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

tabNav();
animationScroll();
modal();
tooltip();
dropdownMenu();
menuMobile();
openingHours();
numbersFetch();
bitcoinFetch();
