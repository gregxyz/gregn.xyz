<template>
  <div class="project-item">
    <div class="project-reveal" />
    <img
      :src="project.image"
      alt=""
      class="project-image w-full h-full object-cover"
    >
    <div class="project-content">
      <h4 class="text-primary text-2xl mb-3 lg:text-1.75vw">
        {{ project.title }}.
      </h4>
      <ul
        v-if="project.technologies"
        class="project-technologies"
      >
        <li
          v-for="item in project.technologies"
          :key="item._uid"
          v-text="item.technology"
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

<style lang="scss">
  .project-item {
    @apply relative overflow-hidden cursor-pointer;

    img {
      height: 250px;

      @screen lg {
        height: 500px;
      }
    }

    &:not(:last-child) {
      @apply mb-10;

      @screen lg {
        @apply mb-0;
      }
    }

    &:nth-child(odd) {
      @screen lg {
        @apply transform -translate-y-48;
      }
    }
  }

  .project-content {
    @apply pt-6 px-4;

    @screen lg {
      @apply pt-8 px-10
    }
  }

  .project-technologies {
    @apply flex flex-wrap;

    li {
      @apply text-lilac leading-relaxed text-sm leading-relaxed;

      @screen sm {
        @apply text-base;
      }

      @screen lg {
        @apply text-1.25vw;
      }

      &:not(:last-child) {
        @apply mr-2;
      }

      &:not(:first-child):before {
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 6px;
        transform: translateY(-1px);
        @apply bg-sky inline-block mr-2;
      }
    }
  }

  .project-reveal {
    @apply absolute top-0 left-0 w-full h-full bg-white z-1;
  }
</style>
