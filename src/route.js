import { createRouter, createWebHistory } from "vue-router";
import AppHome from './view/AppHome.vue'
import AppAbout from './view/AppAbout.vue'
import AppContact from './view/AppContact.vue'
import SinglePostView from './view/SinglePostView.vue'
import PageNotFound from './view/PageNotFound.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            'path': '/',
            'name': 'home',
            'component': AppHome
        },
        {
            'path': '/blog/:slug',
            'name': 'single-post',
            'component': SinglePostView
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
        {
            'path': "/:pathMatch(.*)*",
            'name': "not-found",
            'component': PageNotFound,
        },
    ]
})


export { router }