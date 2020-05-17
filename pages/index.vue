<template>
  <section>
    <Hero />
    <Projects class="pt-64 mb-24" />
  </section>
</template>

<script>
  import Hero from '~/components/Hero/Hero';
  import Projects from '~/components/Projects/Projects';
  import screenSize from '~/mixins/screenSize';

  export default {
    components: {
      Hero,
      Projects,
    },
    methods: {
      observerText() {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            const timeline = this.$gsap.timeline();
            timeline.set(entry.target, {
              opacity: 0,
              x: '-3vw',
            });
            if (entry.isIntersecting) {
              timeline.to(entry.target, {
                opacity: 1,
                x: 0,
                ease: 'power3.out',
                duration: 1,
              });
              observer.unobserve(entry.target);
            }
          });
        }, {
          root: null,
          rootMargin: `${ this.screenMd ? '-15%' : '-10%' } 0px`,
          threshold: 0,
        });

        document.querySelectorAll('.animate-text-left').forEach((el) => {
          observer.observe(el);
        });
      },
      observerProjectImages() {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const timeline = this.$gsap.timeline();
              timeline.to(entry.target.querySelector('.project-reveal'), {
                height: 0,
                ease: 'power3.out',
                duration: 1,
              });
              observer.unobserve(entry.target);
            }
          });
        }, {
          root: null,
          rootMargin: `${ this.screenMd ? '-15%' : '-10%' } 0px`,
          threshold: 0,
        });

        document.querySelectorAll('.project-item').forEach((el) => {
          observer.observe(el);
        });
      },
    },
    mounted() {
      this.observerText();
      this.observerProjectImages();
    },
    mixins: [screenSize],
  };
</script>
