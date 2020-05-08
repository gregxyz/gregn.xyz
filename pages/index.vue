<template>
  <section>
    <Intro
      v-if="showIntro"
      @intro-complete="introComplete"
    />
    <Hero v-if="showHero" />
  </section>
</template>

<script>
  import Intro from '~/components/Intro/Intro';
  import Hero from '~/components/Hero/Hero';

  export default {
    components: {
      Intro,
      Hero,
    },
    data() {
      return {
        showIntro: true,
        showHero: false,
      };
    },
    methods: {
      introComplete() {
        this.showHero = true;
        this.showIntro = false;
      },
    },
  };
</script>
