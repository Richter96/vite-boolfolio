<script>
import AppBanner from '../components/AppBanner.vue';
import AppListProject from '../components/AppListProject.vue';
import Carousel3d from 'vue-carousel-3d';
import Slide from 'vue-carousel-3d';
import axios from 'axios';


export default {
    name: "AppHome",
    components: {
        AppBanner,
        AppListProject,
        Carousel3d,
        Slide
    },
    data() {
        return {
            baseApi: 'http://127.0.0.1:8000/',
            projectsPath: 'api/projects',
            loading: true,
            projects: [],
            error: null
        }
    },
    methods: {
        getProjects(url) {
            axios
                .get(url)
                .then(response => {
                    console.log(response);
                    this.projects = response.data.project.data
                    this.loading = false
                })
                .catch(error => {
                    // console.log(error);
                    this.error = error.message
                })
        },
        getImagePath(path) {
            return this.baseApi + 'storage/' + path
        },
        currentPage(url) {
            // console.log(url);
            this.getProjects(url)
        },
        truncateText(text) {
            if (text.length > 100) {
                return (text.substring(0, 100) + "...");
            } else {
                return text;
            }
        }
    },
    mounted() {
        const url = this.baseApi + this.projectsPath
        // console.log(url);
        this.getProjects(url)
    },


}
</script>



<template>
    <AppBanner title="Home Page"></AppBanner>
    <div class="p-5 mb-4 rounded-3">
        <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold"> My Blog</h1>
            <p class="col-md-8 fs-4">
                Benvenuti nel mio Blog! Qui ci sono alcuni dei miei progetti creati durante il corso Boolean. Un
                percorso che ha avuto inizio dalle basi di HTML e CSS all'utilizzo avanzato di javascript e php con
                l'utilizzo di framework come Vue e Laravel, permettendomi di entrare nel mondo dello sviluppo web.
                <br><br> Qui sotto
                scoprirete le mie creazioni e le sfide affrontate lungo tutto il percorso.



            </p>

        </div>
    </div>


    <!--     <carousel-3d v-if="projects">
        <slide v-for="(project, i) in projects" :index="i" :key="i">
            <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
                <div class="card" style="width:18rem;">
                    <img src="https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                         class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <h6 class="card-subtitle mb-2 text-muted ">Card subtitle</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                        b5
                    </div>
                </div>
                <img class="text-center text-uppercase" :src="getImagePath(project.image)" :alt="project.title">
            </template>
        </slide>
    </carousel-3d> -->



    <AppListProject></AppListProject>
</template>

<style lang="scss" scoped></style>