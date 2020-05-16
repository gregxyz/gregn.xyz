<template>
  <section class="project-modal">
    <div class="project-modal-reveal project-modal-reveal-1 bg-sky" />
    <div class="project-modal-reveal project-modal-reveal-2 bg-cream" />
    <div class="project-modal-reveal project-modal-reveal-3 bg-pink" />
    <button
      @click="closeModal"
      class="absolute top-0 left-0 p-10 focus:outline-none"
    >
      close
    </button>

    <div class="project-modal-content pt-20 pl-20 pb-20 lg:w-1/2">
      <h3 class="title-heading text-underline mb-8 animate-text-in">
        {{ project.title }}.
      </h3>
      <p class="para animate-text-in">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
      </p>
      <p class="para animate-text-in">
        If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
      </p>

      <h4 class="sub-heading mb-2">
        Built with:
      </h4>
      <ul
        v-if="project.technologies"
        class="project-technologies lg:text-lg"
      >
        <li
          v-for="(tech, key) in project.technologies"
          :key="key"
          v-text="tech"
        />
      </ul>
    </div>
    <div class="lg:w-1/2">
      <img
        :src="project.image"
        alt=""
        class="project-modal-image w-full h-screen object-cover pl-24"
      >
    </div>
  </section>
</template>

<script>
  export default {
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
        timeline.to('.project-modal-reveal-1', {
          width: '100%',
          duration: 0.8,
          ease: 'power3.out',
        });
        timeline.to('.project-modal-reveal-2', {
          width: '100%',
          duration: 0.8,
          ease: 'power3.out',
        }, '-=0.6');
        timeline.to('.project-modal-reveal-3', {
          width: '100%',
          duration: 0.8,
          ease: 'power3.out',
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
          ease: 'power3.out',
        });
        timeline.to('.project-modal-reveal-2', {
          width: 0,
          duration: 0.8,
          ease: 'power3.out',
        }, '-=0.6');
        timeline.to('.project-modal-reveal-3', {
          width: 0,
          duration: 0.8,
          ease: 'power3.out',
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
    @apply fixed top-0 left-0 z-100 w-screen h-screen flex items-center;
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
</style>
