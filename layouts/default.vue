<template>
  <div>
    <nuxt />
    <AppFooter />
  </div>
</template>

<script>
  import AppFooter from '~/components/AppFooter/AppFooter';

  export default {
    components: {
      AppFooter,
    },
  };
</script>

<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  @apply bg-white font-body;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
