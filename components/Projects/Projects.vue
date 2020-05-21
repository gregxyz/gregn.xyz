<template>
  <section class="projects pt-20 mb-10 lg:pt-64 lg:mb-24">
    <div class="lg:pr-16">
      <h3 class="font-leon text-primary tracking-widest text-4xl mb-3 animate-text-left lg:text-2.5vw">
        {{ blok.title }}.
      </h3>
      <p
        v-if="blok.description"
        class="text-base text-lilac tracking-wider animate-text-left mb-10 lg:mb-20 lg:text-1.25vw"
      >
        {{ blok.description }}
      </p>
    </div>
    <template v-for="(project, index) in blok.projects">
      <ProjectItem
        :key="project._uid"
        :project="project"
        :class="{ 'lg:-mt-20': index === 0 }"
        @click.native="openProjectModal(project)"
      />
    </template>
    <ProjectModal
      v-if="openProject"
      :project="activeProject"
      @close-modal="closeModal"
    />
  </section>
</template>

<script>
  import ProjectItem from '~/components/Projects/ProjectItem';
  import ProjectModal from '~/components/Projects/ProjectModal';

  export default {
    components: {
      ProjectItem,
      ProjectModal,
    },
    props: {
      blok: {
        type: Object,
        required: true,
      },
    },
    data: () => ({
      openProject: false,
      activeProject: {},
    }),
    methods: {
      openProjectModal(project) {
        this.openProject = true;
        this.activeProject = project;
      },
      closeModal() {
        this.openProject = false;
        this.activeProject = {};
        document.body.style.overflow = '';
      },
      observerProjectImages() {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const timeline = this.$gsap.timeline();
              timeline.to(entry.target.querySelector('.project-reveal'), {
                height: 0,
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

        document.querySelectorAll('.project-item').forEach((el) => {
          observer.observe(el);
        });
      },
    },
    mounted() {
      this.observerProjectImages();
    },
  };
</script>

<style lang="scss" scoped>
  .projects {
    @apply relative px-6;

    @screen md {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: minmax(min-content, max-content);
      gap: 20px 50px;
      @apply px-20;
    }

    @screen lg {
      gap: 100px;
    }
  }
</style>
