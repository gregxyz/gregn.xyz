<template>
  <section class="screen-fill">
    <Loader v-if="$apollo.loading" />
    <component
      v-else-if="PageItem.content.component"
      :blok="PageItem.content.body"
      :is="PageItem.content.component"
    />
  </section>
</template>

<script>
  import gql from 'graphql-tag';
  import Loader from '~/components/Loader/Loader';

  export default {
    components: {
      Loader,
    },
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
  };
</script>

<style lang="scss">
  .screen-fill {
    @apply min-h-screen;
    min-height: -webkit-fill-available;
  }
</style>
