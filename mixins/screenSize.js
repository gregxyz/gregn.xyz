// eslint-disable-next-line import/extensions
import tailwindConfig from '~tailwind.config';

export default {
  computed: {
    screenSm() {
      return window.matchMedia(`(min-width: ${ tailwindConfig.theme.screens.sm })`).matches;
    },
    screenMd() {
      return window.matchMedia(`(min-width: ${ tailwindConfig.theme.screens.md })`).matches;
    },
    screenLg() {
      return window.matchMedia(`(min-width: ${ tailwindConfig.theme.screens.lg })`).matches;
    },
    screenXl() {
      return window.matchMedia(`(min-width: ${ tailwindConfig.theme.screens.xl })`).matches;
    },
  },
};
