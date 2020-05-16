import Vue from 'vue';
import { gsap, ScrollToPlugin } from 'gsap/all';
import { CustomEase } from '~/assets/js/gsapPlugins/CustomEase';

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(CustomEase);

CustomEase.create('cubicEaseSlowMiddle', '.59,.74,.23,.96');

Vue.prototype.$gsap = gsap;
