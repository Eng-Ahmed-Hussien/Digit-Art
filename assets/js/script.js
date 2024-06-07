const _set=(e,t)=>localStorage.setItem(e,t),_get=e=>localStorage.getItem(e),elemRemoveFunc=(e,t)=>e.classList.remove(t),elemAddFunc=(e,t)=>e.classList.add(t),elemToggleFunc=function(e){e.classList.toggle("active")};themeToggleBtn=document.querySelector(".switch"),"light"===_get("theme")?(elemRemoveFunc(document.body,"dark"),elemAddFunc(document.body,"light")):(elemRemoveFunc(document.body,"light"),elemAddFunc(document.body,"dark")),themeToggleBtn.addEventListener("click",(function(){themeToggleBtn.classList.toggle("active"),themeToggleBtn.classList.contains("active")?(document.body.classList.remove("dark"),document.body.classList.add("light"),_set("theme","light")):(document.body.classList.add("dark"),document.body.classList.remove("light"),_set("theme","dark"))}));const btnNavEl=document.querySelector(".btn-mobile-nav"),headerEl=document.querySelector(".header");btnNavEl.addEventListener("click",(function(){headerEl.classList.toggle("nav-open")}));const allLinks=document.querySelectorAll("a:link");allLinks.forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault();const l=e.getAttribute("href");if("#"===l&&window.scrollTo({top:0,behavior:"smooth"}),"#"!==l&&l.startsWith("#")){document.querySelector(l).scrollIntoView({behavior:"smooth"})}e.classList.contains("main-nav-link")&&headerEl.classList.toggle("nav-open")}))}));const sectionHeroEl=document.querySelector(".section-hero"),obs=new IntersectionObserver((function(e){const t=e[0];!1===t.isIntersecting&&document.body.classList.add("sticky"),!0===t.isIntersecting&&document.body.classList.remove("sticky")}),{root:null,threshold:0,rootMargin:"-1000px"});obs.observe(sectionHeroEl);let section=document.querySelector(".section-skills"),divs=document.querySelectorAll(".skill .skill-bar div");window.onscroll=function(){divs.forEach((e=>{let t=e.parentElement.offsetTop,l=t+e.parentElement.offsetHeight;window.scrollY>=t-window.innerHeight+100&&window.scrollY<=l?window.innerWidth<=768?e.style.width=e.dataset.width:e.style.width="70%":e.style.width=0}))},ScrollReveal().reveal(".hero-img-box",{origin:"left",distance:"250px",opacity:0,duration:2e3,ease:"ease-in-out",reset:!0}),ScrollReveal().reveal(".hero-text-box",{origin:"right",distance:"250px",opacity:0,duration:2e3,reset:!0}),ScrollReveal().reveal(".subheading",{origin:"top",distance:"50px",duration:2e3,reset:!0}),ScrollReveal().reveal(".heading-secondary",{origin:"top",distance:"50px",duration:2e3,reset:!0}),ScrollReveal().reveal(".section-description",{origin:"bottom",distance:"50px",duration:2e3,reset:!0}),ScrollReveal().reveal(".service",{origin:"left",distance:"250px",duration:1e3,delay:250,reset:!0}),ScrollReveal().reveal(".service-2",{origin:"left",distance:"250px",delay:500,reset:!0}),ScrollReveal().reveal(".service-3",{origin:"left",distance:"250px",delay:750,reset:!0}),ScrollReveal().reveal(".service-4",{origin:"left",distance:"250px",delay:1e3,reset:!0}),ScrollReveal().reveal(".testimonial",{origin:"left",distance:"250px",delay:500,reset:!0}),ScrollReveal().reveal(".testimonial-2",{origin:"left",distance:"250px",delay:750,reset:!0}),ScrollReveal().reveal(".testimonial-3",{origin:"left",distance:"250px",delay:1e3,reset:!0}),ScrollReveal().reveal(".portfolio",{origin:"left",distance:"250px",delay:500,reset:!0}),ScrollReveal().reveal(".portfolio-2",{origin:"left",distance:"250px",delay:750,reset:!0}),ScrollReveal().reveal(".portfolio-3",{origin:"left",distance:"250px",delay:1e3,reset:!0}),ScrollReveal().reveal(".team",{origin:"left",distance:"250px",duration:1e3,duration:1e3,duration:1e3,duration:1e3,delay:250,reset:!0}),ScrollReveal().reveal(".team-2",{origin:"left",distance:"250px",delay:500,reset:!0}),ScrollReveal().reveal(".team-3",{origin:"left",distance:"250px",delay:750,reset:!0}),ScrollReveal().reveal(".team-4",{origin:"left",distance:"250px",delay:1e3,reset:!0});