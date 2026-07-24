import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function initScrollReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 16,
      duration: 0.4,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none reverse',
      },
    });
  });
}

document.addEventListener('astro:page-load', initScrollReveal);
