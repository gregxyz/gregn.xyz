<template>
  <section>
    <component
      :key="blokType._uid"
      v-for="blokType in blok"
      :blok="blokType"
      :is="blokType.component"
    />
  </section>
</template>

<script>
  export default {
    props: {
      blok: {
        type: Array,
        required: true,
      },
    },
  };
</script>
