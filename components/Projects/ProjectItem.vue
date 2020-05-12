<template>
  <div class="project-item">
    <div class="project-reveal" />
    <img
      :src="project.image"
      alt=""
      class="w-full h-full object-cover"
    >
    <div class="project-content">
      <h4 class="text-primary text-2xl mb-3">
        {{ project.title }}.
      </h4>
      <ul v-if="project.technologies">
        <li
          v-for="(tech, key) in project.technologies"
          :key="key"
          v-text="tech"
        />
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      project: {
        required: true,
        type: Object,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .project-item {
    @apply relative overflow-hidden;

    img {
      height: 500px;
    }
  }

  .project-content {
    @apply pt-8 px-10;

    ul {
      @apply flex;

      li {
        @apply text-lilac;

        &:not(:last-child):after {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 6px;
          transform: translateY(-1px);
          @apply bg-sky inline-block ml-2 mr-2;
        }
      }
    }
  }

  .project-reveal {
    @apply absolute top-0 left-0 w-full h-full bg-white z-1;
  }
</style>
