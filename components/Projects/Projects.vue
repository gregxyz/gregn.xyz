<template>
  <section class="projects">
    <div class="lg:pr-16">
      <h3 class="font-para text-primary tracking-widest text-4xl mb-3 animate-text-left">
        Projects.
      </h3>
      <p class="text-base text-lilac tracking-wider mb-20 lg:text-lg animate-text-left">
        Some projects I have worked on while working at various agencies, most of the technologies used throughout are; Vue, Nuxt, Vuex, Javascript, WordPress and Laravel.
      </p>
    </div>
    <template v-for="(project, index) in projects">
      <ProjectItem
        :key="project.id"
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
    data: () => ({
      openProject: false,
      activeProject: {},
      projects: [
        {
          id: 1,
          title: 'Murphys Surveys',
          // eslint-disable-next-line global-require
          image: require('~/assets/images/construction.jpg'),
          technologies: [
            'Vue',
            'Nuxt',
            'Vuex',
            'Graph QL',
            'REST API',
            'WordPress',
          ],
        },
        {
          id: 2,
          title: 'Elite Performance Lifestyle',
          // eslint-disable-next-line global-require
          image: require('~/assets/images/fitness.jpg'),
          technologies: [
            'Ionic',
            'Angular',
            'Typescript',
            'iOS',
            'Android',
          ],
        },
        {
          id: 3,
          title: 'Sykes Seafood',
          // eslint-disable-next-line global-require
          image: require('~/assets/images/food.jpg'),
          technologies: [
            'Vue',
            'Nuxt',
            'Vuex',
            'REST API',
            'Laravel',
          ],
        },
        {
          id: 4,
          title: 'Outplay Entertainment',
          // eslint-disable-next-line global-require
          image: require('~/assets/images/games.jpg'),
          technologies: [
            'Vue',
            'Laravel',
            'Custom Zendesk design',
          ],
        },
        {
          id: 5,
          title: 'MoneyPlus Energy',
          // eslint-disable-next-line global-require
          image: require('~/assets/images/energy.jpg'),
          technologies: [
            'Vue',
            'Vuex',
            'Laravel',
          ],
        },
      ],
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
    },
  };
</script>

<style lang="scss" scoped>
  .projects {
    @apply relative px-6;

    @screen lg {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: minmax(min-content, max-content);
      gap: 100px 100px;
      @apply px-20;
    }
  }
</style>
