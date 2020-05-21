<template>
  <section class="screen-fill">
    <component
      v-if="PageItem.content.component"
      :blok="PageItem.content.body"
      :is="PageItem.content.component"
    />
  </section>
</template>

<script>
  import gql from 'graphql-tag';
  import screenSize from '~/mixins/screenSize';

  export default {
    data: (() => ({
      PageItem: {
        content: {
          component: '',
          body: [],
        },
      },
    })),
    apollo: {
      PageItem: gql`{
        PageItem(id: "home") {
          id
          slug
          content {
            _uid
            component
            body
          }
        }
      }`,
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
    },
    mounted() {
      this.observerText();
    },
    mixins: [screenSize],
  };
</script>

<style lang="scss">
  .screen-fill {
    @apply min-h-screen;
    min-height: -webkit-fill-available!important;
  }
</style>
