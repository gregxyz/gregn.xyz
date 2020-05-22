<template>
  <section class="project-modal">
    <div class="project-modal-reveal project-modal-reveal-1 bg-sky" />
    <div class="project-modal-reveal project-modal-reveal-2 bg-cream" />
    <div class="project-modal-reveal project-modal-reveal-3 bg-pink" />
    <button
      @click="closeModal"
      class="close-modal absolute top-0 left-0 p-3 focus:outline-none z-1 lg:p-6"
    >
      close
    </button>

    <div class="project-modal-content opacity-0 pt-20 p-6 lg:pl-20 lg:pt-20 lg:pr-0 lg:w-1/2">
      <h3 class="title-heading text-underline">
        {{ project.title }}.
      </h3>

      <p class="text-primary font-leon flex items-center tracking-widest mb-8 text-sm xl:text-1vw">
        <span class="text-gray-400 tracking-widest pr-1">
          Status:
        </span>
        <a
          v-if="project.link.url.length"
          :href="project.link.url"
          target="_blank"
          class="font-bold"
        >
          Live
          <span class="bg-green-400 h-2 w-2 rounded-full inline-block" />
        </a>
        <template v-else>
          <span class="font-bold">
            In Development
          </span>
          <span class="bg-orange-400 h-2 w-2 rounded-full inline-block ml-2" />
        </template>
      </p>

      <RichText
        :text="project.description"
        class="mb-8"
      />

      <h4 class="sub-heading mb-2">
        Built with:
      </h4>
      <ul
        v-if="project.technologies"
        class="project-technologies mb-12 lg:mb-20 lg:text-lg"
      >
        <li
          v-for="item in project.technologies"
          :key="item._uid"
          v-text="item.technology"
        />
      </ul>
    </div>
    <div class="hidden lg:block lg:w-1/2 lg:pl-24">
      <img
        :src="project.image"
        alt=""
        class="project-modal-image w-full h-screen object-cover opacity-0"
      >
    </div>
  </section>
</template>

<script>
  import RichText from '~/components/common/RichText/RichText';

  export default {
    components: {
      RichText,
    },
    props: {
      project: {
        required: true,
        type: Object,
      },
    },
    methods: {
      closeModal() {
        this.componentModalAnimations('reverse');
      },
      componentModalAnimations(reverse) {
        const timeline = this.$gsap.timeline({
          onReverseComplete: () => {
            this.$emit('close-modal');
          },
        });

        if (reverse) {
          timeline.reverse();
        }
        
        timeline.set('.project-modal-image', {
          x: '3vw',
          opacity: 0,
        });
        timeline.set('.project-modal-content', {
          x: '3vw',
          opacity: 0,
        });
        timeline.set('.project-modal', {
          backgroundColor: 'rgba(255, 255, 255, 0)',
          duration: 0.8,
        });
        timeline.set('.close-modal', {
          opacity: 0,
        });
        timeline.to('.project-modal-reveal-1', {
          width: '100%',
          duration: 0.8,
          ease: 'cubicEaseSlowMiddle',
        });
        timeline.to('.project-modal-reveal-2', {
          width: '100%',
          duration: 0.8,
          ease: 'cubicEaseSlowMiddle',
        }, '-=0.6');
        timeline.to('.project-modal-reveal-3', {
          width: '100%',
          duration: 0.8,
          ease: 'cubicEaseSlowMiddle',
        }, '-=0.6');
        timeline.set(document.querySelectorAll('.project-modal-reveal'), {
          left: 'auto',
        });
        timeline.set('.project-modal', {
          backgroundColor: '#fff',
        });
        timeline.to('.project-modal-reveal-1', {
          width: 0,
          duration: 0.8,
          ease: 'cubicEaseSlowMiddle',
        });
        timeline.to('.project-modal-reveal-2', {
          width: 0,
          duration: 0.8,
          ease: 'cubicEaseSlowMiddle',
        }, '-=0.6');
        timeline.to('.project-modal-reveal-3', {
          width: 0,
          duration: 0.8,
          ease: 'cubicEaseSlowMiddle',
        }, '-=0.6');
        timeline.to('.project-modal-image', {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
        }, '-=1.2');
        timeline.to('.project-modal-content', {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
        }, '-=1.0');
        timeline.to('.close-modal', {
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
        }, '-=0.5');
      },
    },
    mounted() {
      this.componentModalAnimations();
      document.body.style.overflow = 'hidden';
    },
  };
</script>

<style lang="scss" scoped>
  .project-modal {
    @apply fixed top-0 left-0 z-100 w-screen h-screen flex flex-col;

    @screen lg {
      @apply flex-row items-center overflow-hidden;
    }
  }

  .project-modal-reveal {
    @apply absolute top-0 right-0 left-0 w-0 z-50;
    height: 33.33%;

    &-2 {
      top: 33.33%;
    }

    &-3 {
      @apply top-auto bottom-0;
    }
  }

  .project-modal-content {
    @apply overflow-scroll;
    margin-bottom: 10vh;

    @screen lg {
      @apply overflow-hidden mb-0;
    }
  }

  .close-modal {
    @apply bg-white;
    box-shadow: -7px -7px 13px 17px #ffffff;

    @screen lg {
      @apply bg-transparent shadow-none;
    }
  }
</style>
