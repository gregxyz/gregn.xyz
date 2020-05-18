<template>
  <div
    v-html="richText"
    class="rich-text"
  />
</template>

<script>
  export default {
    props: ['text'],
    computed: {
      richText() {
        return this.$storyapi.richTextResolver.render(this.text);
      },
    },
  };
</script>
