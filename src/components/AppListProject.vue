<script>
import axios from 'axios';

export default {
    name: 'AppListProject',
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
                    // console.log(response);
                    this.projects = response.data.project
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
    <div class=" container my-4">
        <section class="card_project" v-if="projects && !loading">
            <div class="row row-cols-1  row-cols-md-3 row-cols-xl-4 g-3">
                <div class="col" v-for="project in projects.data">
                    <div class="card h-100  d-flex flex-column">
                        <div class="image h-50">
                            <img class="card-img-top object-fit-cover h-100" :src="getImagePath(project.image)"
                                 alt="{{project.title}}">
                        </div>
                        <div class="card-body h-50">
                            <h4 class="card-title">{{ project.title }}</h4>
                            <a href="#" v-for="technology in project.technologies" v-if="project.technologies.length > 0">
                                <span class="badge text-bg-info me-2">{{ technology.name }}</span>
                            </a>
                            <a href="#" v-else>
                                <span class="badge rounded-pill bg-black  me-2">No technology</span>
                            </a>

                            <p class="card-text">{{ project.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="" v-else>
            <section class=" loading">
                <div class="container">
                    <div class="row row-cols-1  row-cols-md-3 row-cols-xl-4 g-3">
                        <div class="col" v-for="n in 8">
                            <div class="card" aria-hidden="true">
                                <img src="../assets/loading.gif" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title placeholder-glow">
                                        <span class="placeholder col-6"></span>
                                    </h5>
                                    <p class="card-text placeholder-glow">
                                        <span class="placeholder col-7"></span>
                                        <span class="placeholder col-4"></span>
                                        <span class="placeholder col-4"></span>
                                        <span class="placeholder col-6"></span>
                                        <span class="placeholder col-8"></span>
                                    </p>
                                    <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <nav aria-label="...">
            <ul class="pagination my-3">
                <li class="page-item border border-0 " :class="link.url ? '' : 'disabled'" v-for="link in projects.links">
                    <a class="page-link" :class="link.active ? 'active' : ''" href="#" @click="currentPage(link.url)"
                       v-html="link.label"></a>
                </li>
            </ul>
        </nav>


    </div>
</template>
