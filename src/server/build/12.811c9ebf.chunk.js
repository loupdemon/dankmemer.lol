(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{288:function(e,t,n){"use strict";function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.a=(e,t,n)=>{"desktop"===n?t.mediaQuery="(min-width: 1025px)":"mobile"===n&&(t.mediaQuery="(min-width: 768px) and (max-width: 1024px), (min-width: 320px) and (max-width: 767px)"),window.nitroAds&&window.nitroAds.createAd(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({refreshLimit:10,refreshTime:30,renderVisibleOnly:!1,refreshVisibleOnly:!0,report:{enabled:!0,wording:"Report Ad",position:"top-right"}},t))}},337:function(e,t,n){},353:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var i=n(0),r=n.n(i),o=n(5),a=(n(337),n(288));const s=[{name:"Commands",description:"See all of the commands Dank Memer has to offer your server!",link:"/commands"},{name:"FAQ",description:"Have some questions? See if we've already answered it on this page!",link:"/faq"},{name:"Support",description:"FAQ page not enough to help? Head over to our support server!",link:"https://discord.gg/meme"},{name:"Premium",description:"Click here to head to Patreon to see our premium perk selections!",link:"https://www.patreon.com/join/dankmemerbot?"},{name:"Lootboxes",description:'Dank Memer? More like EA: Memer edtion, come check out our "surprise mechanics"!',link:"/loot"},{name:"Twitter",description:"Follow us on Twitter! We love interacting with you all and shitposting!!",link:"https://twitter.com/dankmemerbot"},{name:"Reddit",description:"Check out, and take part in, our official subreddit!",link:"https://www.reddit.com/r/dankmemer/"},{name:"YouTube",description:"We post tutorial videos on our YouTube channel, subscribe to see new ones sooner!",link:"https://www.youtube.com/c/DankMemerDiscordBot"}];function c(e){const t=Object(o.f)();return Object(i.useEffect)(()=>{window.scroll(0,0),Object(a.a)("nitropay-landing-top",{sizes:[[728,90]]},"desktop"),Object(a.a)("nitropay-landing-top",{sizes:[[320,50],[300,50],[300,250]]},"mobile"),Object(a.a)("nitropay-landing-bottom",{sizes:[[728,90],[970,90]],renderVisibleOnly:!0},"desktop"),Object(a.a)("nitropay-landing-bottom",{sizes:[[320,50],[300,50],[300,250]],renderVisibleOnly:!0},"mobile")}),r.a.createElement("div",{id:"landing"},r.a.createElement("h1",{id:"landing-title"},"Thanks for adding",r.a.createElement("br",null),r.a.createElement("span",{className:"text-highlight"},"Dank Memer")),r.a.createElement("div",{id:"nitropay-landing-top",className:"nitropay"}),r.a.createElement("div",{id:"landing-cards"},s.map((e,n)=>r.a.createElement("div",{className:"landing-card",key:n,onClick:()=>{e.link.startsWith("/")?t.push(e.link):window.location.href=e.link}},r.a.createElement("h3",{className:"landing-card-name"},e.name),r.a.createElement("p",{className:"landing-card-text"},e.description)))),r.a.createElement("div",{id:"nitropay-landing-bottom",className:"nitropay"}))}}}]);