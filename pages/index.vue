<template>
  <section>
    <Hero />
    <Projects class="pt-64 mb-64" />
  </section>
</template>

<script>
  import { gsap } from 'gsap/all';
  import Hero from '~/components/Hero/Hero';
  import Projects from '~/components/Projects/Projects';

  export default {
    components: {
      Hero,
      Projects,
    },
    mounted() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timeline = gsap.timeline();

            timeline.to(entry.target.querySelector('.project-reveal'), {
              height: 0,
              ease: 'power3.out',
              duration: 1.5,
            });
            observer.unobserve(entry.target);
          }
        });
      }, {
        root: null,
        rootMargin: '-15% 0px',
        threshold: 0,
      });

      document.querySelectorAll('.project-item').forEach((el) => {
        observer.observe(el);
      });
    },
  };
</script>
