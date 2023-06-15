import { createRouter, createWebHistory } from "vue-router";
import AppHome from './view/AppHome.vue'
import AppAbout from './view/AppAbout.vue'
import AppContact from './view/AppContact.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            'path': '/',
            'name': 'home',
            'component': AppHome
        },
        {
            'path': '/About',
            'name': 'about',
            'component': AppAbout
        },
        {
            'path': '/contact',
            'name': 'contact',
            'component': AppContact
        },
    ]
})


export { router }