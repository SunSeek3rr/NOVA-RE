import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import "../scss/main.scss";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);



if(ScrollTrigger.isTouch !== 1){
  let smoother = ScrollSmoother.create({
    smooth: 1.3,
    normalizeScroll: true
  });

}

let windowWidth = window.innerWidth;

const textSections = document.querySelectorAll('.intro, .material__section, .transformation__section, .change, .about');

textSections.forEach((section, index) => {
  
  const elementsToAnimate = section.querySelectorAll('h2, h3, p, li, .material__title, .transformation__title, .transformation__subTitle, .change__title, .about__title');

  let customStart = "top 85%";
  let customEnd = "top 0%";

 
  if (index !== 0) {
    customStart = "top 95%";
    customEnd = "bottom 65%";
  }

  if (index >= 3 && index <= 5) {
    customStart = "top 95%";
    customEnd = "bottom 95%";
  }

  if (index === 6 && windowWidth < 393) {
    customStart = "top 95%";
    customEnd = "bottom 100%";
  }

  if (index === 7) {
    customStart = "top 95%";
    customEnd = "bottom 95%";
  }



  gsap.fromTo(elementsToAnimate, 
    {
      opacity: 0,
      y: 50
    },
    {
      opacity: 1,
      y: 0,
      duration: .4,
      ease: "power4.in",
      stagger: 0.1,
      scrollTrigger: {
        trigger: section,
        start: customStart,
        end: customEnd,
        toggleActions: "restart reverse restart reverse",
        scrub: true
      }
    }
  );
});

const textEms = document.querySelectorAll('em:not(footer em:last-of-type)');

textEms.forEach((em) => {
  gsap.fromTo(em, 
    {
      opacity: 0.3,
      y: 50
    },
    {
      opacity: 1,
      y: 0,
      duration: .6,
      ease: "power4.in",
      stagger: 0.05,
      scrollTrigger: {
        trigger: em,
        start: "top 75%",
        end: "top 50%",
        toggleActions: "restart reverse restart reverse",
        scrub: true
      }
    }
  );
});

const idLinks = document.querySelectorAll('a[href^="#"]');

idLinks.forEach((link, index)=>{
  link.addEventListener("click", (e)=> {

    const id = link.getAttribute('href');

    if(index === 0){

      gsap.to(window, {
        scrollTo: {
          y: id,
          offsetY : 128
        }, 
        duration: 1,
        ease: "power2.out"
      });
    } else {

      gsap.to(window, {
        scrollTo: id,
        duration: 1,
        ease: "power2.out"
      });
    }

  });
});
