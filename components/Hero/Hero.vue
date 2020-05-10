<template>
  <section class="hero">
    <div class="flex items-center px-20">
      <div class="w-3/5 flex-shrink-0 relative z-20">
        <h1 class="hero-title text-5xl font-heading font-bold text-primary mb-2">
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
  import { gsap } from 'gsap/all';

  export default {
    data: () => ({
    }),
    methods: {
      heroTimeline() {
        const timeline = gsap.timeline();
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
        const timeline = gsap.timeline();
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
        const timeline = gsap.timeline();
        timeline.to('.reveal-3', {
          width: '10vw',
          duration: 0.4,
          ease: 'slow(0.3, 0.7, false)',
        });
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

    &:before {
      content: '';
      width: 40vw;
      height: 40vw;
      position: absolute;
      background-color: #d9f3ee;
      left: -20vw;
      bottom: -27vh;
      @apply absolute rounded-full z-20 hidden;
    }
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
    @apply text-lilac text-xl w-10/12 leading-relaxed opacity-0 transform translate-y-8;
    letter-spacing: 1px;
  }

  .text-underline {
    @apply relative inline-block z-1;

    &:before {
      content: '';
      width: 100%;
      height: 0.2em;
      bottom: 7px;
      opacity: 0.4;
      z-index: -1;
      @apply absolute bg-secondary -z-1;
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
