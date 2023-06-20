import { createApp } from 'vue'
import App from './App.vue'
import Carousel3d from 'vue-carousel-3d';

import { } from "module";

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import { router } from './route.js'

createApp(App).use(router, Carousel3d, bootstrap).mount('#app')
