<template>
  <section class="hero">
    <div class="flex flex-col items-center px-6 lg:flex-row lg:px-20">
      <div class="flex-shrink-0 relative z-20 lg:w-3/5">
        <h1 class="hero-title text-3xl font-heading font-bold text-primary mb-2 lg:text-5xl">
          <div>G</div><div>r</div><div>e</div><div>g</div> <div>N</div><div>i</div><div>c</div><div>h</div><div>o</div><div>l</div><div>s</div><div>o</div><div>n</div>
        </h1>
        <p class="hero-tagline">
          A <span class="text-underline">Front End Developer</span> based in Manchester. I'm passionate about <span class="text-underline">REST API's</span>, <span class="text-underline">Graph QL</span>, <span class="text-underline">Headless CMS'</span> & the latest in <span class="text-underline">Javascript</span> while maintaining a strong emphasis on performance, SEO and accessibility.
        </p>
      </div>
    </div>
    <button
      @mouseenter="viewProjectsEnter"
      @mouseleave="viewProjectsLeave"
      @click="goToProjects"
      class="view-projects-btn"
    >
      <div>v</div><div>i</div><div>e</div><div>w</div> <div>p</div><div>r</div><div>o</div><div>j</div><div>e</div><div>c</div><div>t</div><div>s</div>
    </button>
    <div class="reveal reveal-1 bg-sky" />
    <div class="reveal reveal-2 bg-cream" />
    <div class="reveal reveal-3 bg-pink" />
  </section>
</template>

<script>
  export default {
    methods: {
      heroTimeline() {
        const timeline = this.$gsap.timeline();
        timeline.to('.reveal-1', {
          width: '100%',
          duration: 0.8,
          ease: 'power3.out',
        });
        timeline.to('.reveal-2', {
          width: '100%',
          duration: 0.8,
          ease: 'power3.out',
        }, '-=0.4');
        timeline.to('.reveal-3', {
          width: '100%',
          duration: 0.8,
          ease: 'power3.out',
        }, '-=0.4');
        timeline.set(document.querySelectorAll('.reveal'), {
          left: 'auto',
        });
        timeline.to('.reveal-1', {
          width: '50vw',
          duration: 0.8,
          ease: 'power3.out',
        });
        timeline.to('.reveal-2', {
          width: '35vw',
          duration: 0.8,
          ease: 'power3.out',
        }, '-=0.4');
        timeline.to('.reveal-3', {
          width: '10vw',
          duration: 0.8,
          ease: 'power3.out',
        }, '-=0.4');
        timeline.to(document.querySelectorAll('.hero-title div'), {
          x: 0,
          opacity: 1,
          duration: 0.8,
        }, '-=1');
        timeline.to('.hero-tagline', {
          y: 0,
          opacity: 1,
          duration: 0.6,
        }, '-=0.3');
        timeline.to(document.querySelectorAll('.view-projects-btn div'), {
          x: 0,
          opacity: 1,
          duration: 0.8,
        });
        timeline.set('.view-projects-btn', {
          zIndex: 60,
          pointerEvents: 'auto',
        });
      },
      viewProjectsEnter() {
        const timeline = this.$gsap.timeline();
        timeline.set('.reveal-3', {
          width: '10vw',
        });
        timeline.to('.reveal-3', {
          width: '26vw',
          duration: 0.4,
          ease: 'slow(0.3, 0.7, false)',
        });
      },
      viewProjectsLeave() {
        const timeline = this.$gsap.timeline();
        timeline.to('.reveal-3', {
          width: '10vw',
          height: '33.33%',
          duration: 0.4,
          ease: 'slow(0.3, 0.7, false)',
        });
      },
      goToProjects() {
        const timeline = this.$gsap.timeline({
          onComplete: () => {
            timeline.set('.hero-title', {
              clearProps: 'all',
            });
            timeline.set('.hero-tagline', {
              clearProps: 'all',
            });
            timeline.set('.reveal-3', {
              clearProps: 'y',
            });
          },
        });
        timeline.to('.hero-title', {
          y: '-10vh',
          duration: 1,
          ease: 'slow(0.5, 0.7, false)',
        });
        timeline.to('.hero-tagline', {
          y: '-10vh',
          ease: 'slow(0.5, 0.7, false)',
        }, '-=0.8');
        timeline.to('.reveal', {
          y: '-10vh',
          ease: 'slow(0.5, 0.7, false)',
        }, '-=1.0');
        setTimeout(() => {
          this.$gsap.to(window, {
            duration: 3,
            scrollTo: '.projects',
            ease: 'slow(0.1, 0.9, false)',
          });
        }, timeline.duration() - 0.2);
        // timeline.to('.reveal-3', {
        //   width: '100vw',
        //   duration: 0.5,
        // });
        // timeline.to('.reveal-3', {
        //   height: '100vw',
        //   duration: 0.5,
        // });
      },
    },
    mounted() {
      this.heroTimeline();
    },
  };
</script>

<style lang="scss" scoped>
  .hero {
    @apply relative z-1 bg-white flex items-center w-full h-screen overflow-hidden;
  }

  .hero-title {
    @apply inline-block;

    div {
      @apply inline-block opacity-0;

      @for $i from 1 through 13 {
        &:nth-child(#{$i}) {
          transform: translateX(#{$i * 1.5}vw);
        }
      }
    }
  }

  .hero-tagline {
    @apply text-lilac text-base w-10/12 leading-relaxed opacity-0 transform translate-y-8;
    letter-spacing: 1px;

    @screen lg {
      @apply text-xl;
    }
  }
  
  .reveal {
    @apply absolute top-0 right-0 left-0 w-0 z-50;
    height: 33.33%;

    &-2 {
      top: 33.33%;
    }

    &-3 {
      @apply top-auto bottom-0;
    }
  }

  .view-projects-btn {
    @apply absolute right-0 text-primary font-para tracking-widest pointer-events-none;
    bottom: 10vh;
    transform: translateX(-15vw);
    font-size: 4vw;

    &:focus {
      outline: none;
    }

    div {
      @apply inline-block opacity-0;

      @for $i from 1 through 12 {
        &:nth-child(#{$i}) {
          transform: translateX(#{$i * 5}vw);
        }
      }
    }
  }
</style>
