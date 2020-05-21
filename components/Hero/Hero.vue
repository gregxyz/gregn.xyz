<template>
  <section class="hero">
    <ul
      v-if="blok.socialLinks"
      class="socials absolute top-0 left-0 flex pl-20 pt-10 opacity-0"
    >
      <li
        v-for="social in blok.socialLinks"
        :key="social._uid"
        class="mr-5 text-lilac font-para transition-colors ease-in-out duration-300 hover:text-primary"
      >
        <a
          :href="social.link.url"
          target="_blank"
        >
          {{ social.name }}
        </a>
      </li>
    </ul>
    <div class="flex flex-col items-center px-6 lg:flex-row lg:px-20">
      <div class="flex-shrink-0 relative z-20 lg:w-3/5">
        <h1
          v-html="blok.title"
          class="hero-title text-3xl font-heading font-bold text-primary mb-2 lg:text-3.5vw"
        />
        <p
          v-html="blok.description"
          class="hero-tagline"
        />
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
  import screenSize from '~/mixins/screenSize';

  export default {
    props: {
      blok: {
        type: Object,
        required: true,
      },
    },
    methods: {
      heroTimeline() {
        const timeline = this.$gsap.timeline();
        timeline.to('.reveal-1', {
          width: '100%',
          duration: 0.8,
          ease: 'cubicEaseSlowMiddle',
        });
        timeline.to('.reveal-2', {
          width: '100%',
          duration: 0.8,
          ease: 'cubicEaseSlowMiddle',
        }, '-=0.4');
        timeline.to('.reveal-3', {
          width: '100%',
          duration: 0.8,
          ease: 'cubicEaseSlowMiddle',
        }, '-=0.4');
        timeline.set(document.querySelectorAll('.reveal'), {
          left: 'auto',
        });
        timeline.to('.reveal-1', {
          width: this.screenLg ? '50vw' : '21vw',
          duration: 0.8,
          ease: 'cubicEaseSlowMiddle',
        });
        timeline.to('.reveal-2', {
          width: this.screenLg ? '35vw' : '16vw',
          duration: 0.8,
          ease: 'cubicEaseSlowMiddle',
        }, '-=0.4');
        timeline.to('.reveal-3', {
          width: '10vw',
          duration: 0.8,
          ease: 'cubicEaseSlowMiddle',
        }, '-=0.4');
        timeline.to('.hero-title div', {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: {
            each: 0.3,
            ease: 'cubicEaseSlowMiddle',
            axis: 'y',
          },
        }, '-=1');
        timeline.to('.socials', {
          opacity: 1,
          duration: 0.6,
        }, '-=0.6');
        timeline.to('.hero-tagline', {
          y: 0,
          opacity: 1,
          duration: 0.6,
        }, '-=0.6');
        timeline.to('.view-projects-btn div', {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: {
            ease: 'power3.in',
            axis: 'x',
          },
        }, '-=0.5');
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
          ease: 'cubicEaseSlowMiddle',
        });
      },
      viewProjectsLeave() {
        const timeline = this.$gsap.timeline();
        timeline.to('.reveal-3', {
          width: '10vw',
          height: '33.33%',
          duration: 0.4,
          ease: 'cubicEaseSlowMiddle',
        });
      },
      goToProjects() {
        this.$gsap.to(window, {
          duration: 1,
          scrollTo: '.projects',
          ease: 'power3.out',
        });
      },
    },
    mounted() {
      this.heroTimeline();
    },
    mixins: [screenSize],
  };
</script>

<style lang="scss" scoped>
  .hero {
    @apply relative z-1 bg-white flex items-center w-full min-h-screen overflow-hidden;
    min-height: -webkit-fill-available;
  }

  .hero-title {
    @apply inline-block;

    /deep/ div {
      @apply inline-block opacity-0;

      @for $i from 1 through 13 {
        &:nth-child(#{$i}) {
          transform: translateY(#{$i * 0.8}vh);
        }
      }
    }
  }

  .hero-tagline {
    @apply text-lilac text-base w-10/12 leading-relaxed opacity-0 transform translate-y-8;
    letter-spacing: 1px;

    @screen lg {
      @apply text-1.5vw;
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
    @apply absolute right-0 text-primary font-para tracking-widest pointer-events-none text-2xl;
    bottom: 10vh;
    transform: translateX(-15vw);

    @screen lg {
      @apply text-4vw;
    }

    &:focus {
      outline: none;
    }

    div {
      @apply inline-block opacity-0;

      @for $i from 1 through 12 {
        &:nth-child(#{$i}) {
          transform: translateX(#{$i * 2}vw);
        }
      }
    }
  }
</style>
