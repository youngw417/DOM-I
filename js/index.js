const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const ctaImg = document.getElementById("cta-img");
ctaImg.src = siteContent.cta["img-src"];

const middleImg = document.getElementById("middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

const list = document.querySelectorAll('nav a');

list.forEach((cur,ind) =>{
  cur.textContent = siteContent.nav[`nav-item-${ind+1}`];
  cur.style.color = 'green';
})

const firstH1 = document.querySelector(".cta .cta-text h1");
firstH1.textContent = siteContent.cta["h1"];
const firstBut = document.querySelector(".cta .cta-text button");
firstBut.textContent = siteContent.cta["button"];

const textAll = document.querySelectorAll(".text-content > *");

textAll[0].textContent = siteContent["main-content"]["features-h4"];
textAll[1].textContent = siteContent["main-content"]["features-content"];
textAll[2].textContent = siteContent["main-content"]["about-h4"];
textAll[3].textContent = siteContent["main-content"]["about-content"];
textAll[4].textContent = siteContent["main-content"]["services-h4"];
textAll[5].textContent = siteContent["main-content"]["services-content"];
textAll[6].textContent = siteContent["main-content"]["product-h4"];
textAll[7].textContent = siteContent["main-content"]["product-content"];
textAll[8].textContent = siteContent["main-content"]["vision-h4"];
textAll[9].textContent = siteContent["main-content"]["vision-content"];

const contacts = document.querySelectorAll(".contact > *");
contacts[0].textContent = siteContent.contact["contact-h4"];
contacts[1].textContent = siteContent.contact["address"];
contacts[2].textContent = siteContent.contact["phone"];
contacts[3].textContent = siteContent.contact["email"];

document.querySelector("footer p").textContent = siteContent.footer.copyright;

const parentNav = document.querySelector('nav');
const newNav = document.createElement('a');
const preNav = document.createElement('a');
newNav.textContent = "Goal";
preNav.textContent = "History";
newNav.style.color = 'green';
preNav.style.color = 'green';
parentNav.appendChild(newNav);
parentNav.prepend(preNav);



