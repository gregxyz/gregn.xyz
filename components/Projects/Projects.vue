<template>
  <section class="projects">
    <div class="pr-16">
      <h3 class="font-para text-primary tracking-widest text-4xl mb-3">
        Projects.
      </h3>
      <p class="text-lg text-lilac tracking-wider">
        Some projects I have worked on while working at various agencies, most of the technologies used throughout are; Vue, Nuxt, Vuex, Javascript, WordPress and Laravel.
      </p>
    </div>
    <template v-for="(project, index) in projects">
      <ProjectItem
        :key="index"
        :project="project"
        :class="{ '-mt-20': index === 0 }"
      />
    </template>
  </section>
</template>

<script>
  import ProjectItem from '~/components/Projects/ProjectItem';

  export default {
    components: {
      ProjectItem,
    },
    data: () => ({
      projects: [
        {
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
  };
</script>

<style lang="scss" scoped>
  .projects {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(min-content, max-content);
    gap: 100px 100px;
    min-height: 200vh;
    @apply relative px-20;
  }
</style>
