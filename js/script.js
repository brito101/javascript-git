import SmoothScroll from "./modules/smooth-scroll.js"
import Accordion from "./modules/accordion.js"
import TabNav from "./modules/tab-nav.js"
import Modal from "./modules/modal.js"
import Tooltip from "./modules/tooltip.js"
import AnimationScroll from "./modules/animation-scroll.js"
import DropdownMenu from "./modules/dropdown-menu.js"
import MenuMobile from "./modules/menu-mobile.js"
import openingHours from "./modules/opening-hours.js"
import numbersFetch from "./modules/numbers-fetch.js"
import bitcoinFetch from "./modules/bitcoin-fetch.js"
import SlideNav from "./modules/slide.js"

const smoothScroll = new SmoothScroll('[data-menu="smooth"] a[href^="#"]')
smoothScroll.init()

const accordion = new Accordion('[data-anime="accordion"] dt')
accordion.init()

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
)
tabNav.init()

const modal = new Modal(
  '[data-modal="open"]',
  '[data-modal="close"]',
  '[data-modal="container"]'
)
modal.init()

const tooltip = new Tooltip("[data-tooltip]")
tooltip.init()

numbersFetch("./numbers-api.json", ".numbers-grid")

bitcoinFetch("https://blockchain.info/ticker", ".btc-price")

const animationScroll = new AnimationScroll('[data-anime="scroll"]')
animationScroll.init()

const dropdownMenu = new DropdownMenu("[data-dropdown]")
dropdownMenu.init()

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]')
menuMobile.init()

openingHours()

const slide = new SlideNav(".slide", ".slide-wrapper")
slide.init()
slide.addControl(".custom-controls")
