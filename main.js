(()=>{"use strict";function t(t,e,i){const o=document.documentElement,n="data-outside";function s(a){t.contains(a.target)||(t.removeAttribute(n),e.forEach((t=>{o.removeEventListener(t,s)})),i())}t.hasAttribute(n)||(e.forEach((t=>{setTimeout((()=>o.addEventListener(t,s)))})),t.setAttribute(n,""))}class e{constructor(t,e,i){this.numbers=document.querySelectorAll(t),this.observerTarget=document.querySelector(e),this.observerClass=i,this.handleMutation=this.handleMutation.bind(this)}static incrementNumbers(t){const e=+t.innerText,i=Math.floor(e/100);let o=0;const n=setInterval((()=>{o+=i,t.innerText=o,o>e&&(t.innerText=e,clearInterval(n))}),25)}initAnimation(){this.numbers.forEach((t=>this.constructor.incrementNumbers(t)))}handleMutation(t){t[0].target.classList.contains(this.observerClass)&&(this.observer.disconnect(),this.initAnimation())}addMutationObserver(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observerTarget,{attributes:!0})}init(){return this.numbers.length&&this.observerTarget&&this.addMutationObserver(),this}}new class{constructor(t,e){this.internalLinks=document.querySelectorAll(t),this.options=void 0===e?{behavior:"smooth",block:"start"}:e,this.scrollToSection=this.scrollToSection.bind(this)}scrollToSection(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}addLinkevent(){this.internalLinks.forEach((t=>{t.addEventListener("click",this.scrollToSection)}))}init(){return this.internalLinks.length&&this.addLinkevent(),this}}('[data-menu="smooth"] a[href^="#"]').init(),new class{constructor(t){this.accordionList=document.querySelectorAll(t),this.activeClass="active"}activeAccordion(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}addAccordionEvent(){this.accordionList.forEach((t=>{t.addEventListener("click",(()=>this.activeAccordion(t)))}))}init(){return this.accordionList.length&&(this.activeAccordion(this.accordionList[0]),this.addAccordionEvent()),this}}('[data-anime="accordion"] dt').init(),new class{constructor(t,e){this.tabMenu=document.querySelectorAll(t),this.tabContent=document.querySelectorAll(e),this.activeClass="active"}activeTab(t){this.tabContent.forEach((t=>{t.classList.remove(this.activeClass)}));const e=this.tabContent[t].dataset.anime;this.tabContent[t].classList.add(this.activeClass,e)}addTabNavEvent(){this.tabMenu.forEach(((t,e)=>{t.addEventListener("click",(()=>this.activeTab(e)))}))}init(){return this.tabContent.length&&this.tabMenu.length&&(this.activeTab(0),this.addTabNavEvent()),this}}('[data-tab="menu"] li','[data-tab="content"] section').init(),new class{constructor(t,e,i){this.openButton=document.querySelector(t),this.closeButton=document.querySelector(e),this.containerModal=document.querySelector(i),this.eventToggleModal=this.eventToggleModal.bind(this),this.clickOutModal=this.clickOutModal.bind(this)}toggleModal(){this.containerModal.classList.toggle("active")}eventToggleModal(t){t.preventDefault(),this.toggleModal()}clickOutModal(t){t.target===this.containerModal&&this.toggleModal()}addModalEvent(){this.openButton.addEventListener("click",this.eventToggleModal),this.closeButton.addEventListener("click",this.eventToggleModal),this.containerModal.addEventListener("click",this.clickOutModal)}init(){return this.openButton&&this.closeButton&&this.containerModal&&this.addModalEvent(),this}}('[data-modal="open"]','[data-modal="close"]','[data-modal="container"]').init(),new class{constructor(t){this.tooltips=document.querySelectorAll(t),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}onMouseMove(t){this.tooltipBox.style.top=`${t.pageY+20}px`,t.pageX+240>window.innerWidth?this.tooltipBox.style.left=t.pageX-190+"px":this.tooltipBox.style.left=`${t.pageX+20}px`}onMouseLeave({currentTarget:t}){this.tooltipBox.remove(),t.removeEventListener("mouseleave",this.onMouseLeave),t.removeEventListener("mousemove",this.onMouseMove)}createTooltipBox(t){const e=document.createElement("div"),i=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=i,document.body.appendChild(e),this.tooltipBox=e}onMouseOver({currentTarget:t}){this.createTooltipBox(t),t.addEventListener("mouseleave",this.onMouseLeave),t.addEventListener("mousemove",this.onMouseMove)}addTooltipsEvent(){this.tooltips.forEach((t=>{t.addEventListener("mouseover",this.onMouseOver)}))}init(){return this.tooltips.length&&this.addTooltipsEvent(),this}}("[data-tooltip]").init(),function(){const t=document.querySelectorAll('[data-anime="scroll"]'),e=.6*window.innerHeight;function i(){t.forEach((t=>{t.getBoundingClientRect().top-e<0?t.classList.add("active"):t.classList.contains("active")&&t.classList.remove("active")}))}t.length&&(i(),window.addEventListener("scroll",i))}(),function(){function e(e){e.preventDefault(),this.classList.add("active"),t(this,["click","touchstart"],(()=>{this.classList.remove("active")}))}document.querySelectorAll("[data-dropdown]").forEach((t=>{["click","touchstart"].forEach((i=>{t.addEventListener(i,e)}))}))}(),function(){const e=document.querySelector('[data-menu="button"]'),i=document.querySelector('[data-menu="list"]'),o=["click","touchstart"];function n(){e.classList.add("active"),i.classList.add("active"),t(i,o,(()=>{i.classList.remove("active"),e.classList.remove("active")}))}e&&o.forEach((t=>e.addEventListener(t,n)))}(),function(){const t=document.querySelector("[data-week]"),e=t.dataset.week.split(",").map(Number),i=t.dataset.hours.split(",").map(Number),o=new Date,n=o.getDay(),s=o.getHours(),a=-1!==e.indexOf(n),c=s>=i[0]&&s<i[1];a&&c&&t.classList.add("open")}(),async function(t){try{const t=await fetch("./numbers-api.json"),i=await t.json(),o=document.querySelector(".numbers-grid");i.forEach((t=>{const e=function(t){const e=document.createElement("div");return e.classList.add("numbers-skill"),e.innerHTML=`<h3>${t.name}</h3><span data-number>${t.total}</span>`,e}(t);o.appendChild(e)})),new e("[data-number]",".numbers","active").init()}catch(t){console.log(t)}}(),fetch("https://blockchain.info/ticker").then((t=>t.json())).then((t=>{document.querySelector(".btc-price").innerText=(1e3/t.BRL.sell).toFixed(4)})).catch((t=>{console.log(t)}))})();