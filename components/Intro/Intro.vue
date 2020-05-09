<template>
  <section class="w-screen h-screen overflow-hidden">
    <div class="cover" />
    <div class="intro-loader text-white">
      Front End Developer.
    </div>
  </section>
</template>

<script>
  import { gsap } from 'gsap/all';

  export default {
    methods: {
      introTimeline() {
        const introTimeline = gsap.timeline({
          delay: 1,
          onComplete: () => {
            this.$emit('intro-complete', true);
          },
        });
        introTimeline.to('.cover', {
          width: '100%',
          duration: 0.8,
          ease: 'slow(0.9, 0.7, false)',
        });
        introTimeline.set('.cover', {
          left: 0,
        });
        introTimeline.to('.cover', {
          width: 0,
          duration: 0.8,
          ease: 'slow(0.9, 0.7, false)',
        });
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
    @apply absolute top-0 left-0 w-screen h-screen flex items-center justify-center font-heading font-bold uppercase;
    font-size: 3vw;
  }

  .cover {
    @apply absolute top-0 right-0 h-screen w-0 bg-primary;
  }
</style>
