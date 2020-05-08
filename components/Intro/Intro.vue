<template>
  <section class="w-screen h-screen overflow-hidden bg-primary">
    <div class="intro-loader text-white">
      <span class="intro-loader-x">X</span>
      <span class="intro-loader-y">Y</span>
      <span class="intro-loader-z">Z</span>
    </div>
  </section>
</template>

<script>
  import { gsap } from 'gsap/all';

  export default {
    data: () => ({
      skills: [
        'Vue',
        'Nuxt',
        'Vuex',
        'Javascript',
        'Graph QL',
        'REST API\'s',
        'WordPress',
        'Headless',
        'eCommerce',
      ],
    }),
    methods: {
      introTimeline() {
        const introTimeline = gsap.timeline({ delay: 1 });
        
        introTimeline.to('.intro-loader-x', {
          x: '-50vw',
          duration: 3,
          ease: 'slow(0.3, 0.7, false)',
        }, 0);
        introTimeline.to('.intro-loader-z', {
          x: '50vw',
          duration: 3,
          ease: 'slow(0.3, 0.7, false)',
        }, 0);
        introTimeline.to('.intro-loader-y', {
          scale: '100',
          duration: 2,
          ease: 'slow(0.3, 0.7, false)',
        }, '-=1.5');
        
        setTimeout(() => {
          this.$emit('intro-complete', true);
        }, (introTimeline.totalDuration() * 1000) + 500);
      },
      skillColor() {
        const colors = [
          'text-pink',
          'text-cream',
          'text-sky',
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      },
    },
    mounted() {
      window.addEventListener('load', () => {
        this.introTimeline();
      });
    },
  };
</script>

<style lang="scss" scoped>
  .intro-loader {
    @apply absolute top-0 left-0 w-screen h-screen flex items-center justify-center font-para font-bold;
    font-size: 10vw;

    span {
      &:nth-child(2) {
        margin-left: -0.01em;
      }

      &:nth-child(3) {
        margin-left: -0.06em;
      }
    }
  }

  .skills-list {
    @apply absolute flex flex-no-wrap uppercase font-heading font-bold text-primary opacity-75;
    font-size: 5vw;
    width: max-content;

    li {
      &:not(:last-child) {
        @apply mr-5;
      }
    }
  }
</style>
