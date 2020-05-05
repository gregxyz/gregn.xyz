<template>
  <section class="hero">
    <div class="flex items-center px-20">
      <div class="w-3/5 flex-shrink-0 relative z-20">
        <h1 class="hero-title text-5xl font-heading font-bold text-primary mb-2">
          <div>G</div><div>r</div><div>e</div><div>g</div> <div>N</div><div>i</div><div>c</div><div>h</div><div>o</div><div>l</div><div>s</div><div>o</div><div>n</div>
        </h1>
        <p class="hero-tagline">
          A <span class="text-underline">Front End Developer</span> based in Manchester. I'm passionate about <span class="text-underline">REST API's</span>, <span class="text-underline">Graph QL</span>, <span class="text-underline">Headless CMS'</span> & the latest in <span class="text-underline">Javascript</span> while maintaining a strong emphasis on performance, SEO and accessibility.
        </p>
      </div>
      <div class="view-projects">
        <div class="circle circle-1 bg-pink" />
        <div class="circle circle-2 bg-cream z-10" />
        <div class="circle circle-3 bg-sky z-20" />
        <button class="view-projects-btn z-30">
          view proje-cts
        </button>
      </div>
    </div>
  </section>
</template>

<script>
  import { gsap, TextPlugin } from 'gsap/all';

  gsap.registerPlugin(TextPlugin);

  export default {
    data: () => ({
      skills: [
        'Vue JS',
        'Nuxt',
        'Vuex',
        'Javascript',
        'Graph QL',
        'Storyblok',
        'WordPress',
        'Developer',
      ],
      skillsIndex: 0,
    }),
    methods: {
      heroTimeline() {
        const timeline = gsap.timeline();
        timeline.to(document.querySelectorAll('.hero-title div'), {
          y: 0,
          opacity: 1,
          delay: 1,
          duration: 1.2,
        });
        timeline.to('.hero-tagline', {
          y: 0,
          opacity: 1,
          duration: 0.8,
        }, '-=0.3');
        timeline.to('.view-projects-btn', {
          x: 0,
          ease: 'power3.out',
          duration: 1,
        });
        timeline.to('.view-projects-btn', {
          opacity: 1,
          ease: 'power3.in',
          duration: 2,
        }, '-=1.5');
        timeline.to('.view-projects-btn', {
          lineHeight: '21vh',
          ease: 'power3.out',
          duration: 2,
        }, '-=0.5');
      },
    },
    mounted() {
      window.addEventListener('load', () => {
        this.heroTimeline();
      });
    },
  };
</script>

<style lang="scss" scoped>
  .hero {
    @apply relative z-1 bg-white flex items-center w-full h-screen overflow-hidden;

    &:before {
      content: '';
      width: 40vw;
      height: 40vw;
      position: absolute;
      background-color: #d9f3ee;
      left: -20vw;
      bottom: -27vh;
      @apply absolute rounded-full z-20;
    }
  }

  .hero-title {
    @apply inline-block;

    div {
      @apply inline-block opacity-0;

      @for $i from 1 through 13 {
        &:nth-child(#{$i}) {
          transform: translateY(#{$i * 3}px);
        }
      }
    }
  }

  .hero-tagline {
    @apply text-lilac text-xl w-10/12 leading-relaxed opacity-0 transform translate-y-8;
    letter-spacing: 1px;
  }

  .text-underline {
    @apply relative inline-block z-1;

    &:before {
      content: '';
      width: 100%;
      height: 0.2em;
      bottom: 7px;
      opacity: 0.4;
      z-index: -1;
      @apply absolute bg-secondary -z-1;
    }
  }

  .project-preview-text {
    @apply opacity-0 transform translate-y-6 flex flex-col justify-end h-full relative z-10 px-20 pb-24 text-white;
  }

  .project-preview {
    @apply bg-gray-500 h-screen w-full block relative z-10;
    clip-path: url(#project-preview-clip);
  }

  .project-preview-content {
    @apply absolute z-10 w-full h-full;
    background: rgba(0, 0, 0, 0.3);
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 40%)
  }

  .project-preview-reveal {
    @apply absolute bottom-0 left-0 h-full w-full z-20;
    background-image: linear-gradient(to right, #fff 0%, #fff 40%, transparent 100%);
    transform: translateX(0%);
    width: 245%;
  }

  .view-projects {
    @apply ml-auto;

  }

  .view-projects-btn {
    @apply relative font-body text-primary tracking-widest text-left;
    font-size: 8vw;
    line-height: 12vh;
    max-width: 25vw;
    transform: translateX(5vw);
    opacity: 0;

    &:focus {
      @apply outline-none;
    }
  }

  .circle {
    @apply absolute top-0 rounded-full;
    width: 33vw;
    height: 33vw;
    right: 5vw;

    &-1 {
      top: -15vh;
    }

    &-2 {
      top: 50%;
      right: -10vw;
      transform: translateY(-50%);
    }

    &-3 {
      top: auto;
      bottom: -15vh;
    }
  }
  
</style>