import Vue from 'vue';
import { gsap, ScrollToPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollToPlugin);

Vue.prototype.$gsap = gsap;
