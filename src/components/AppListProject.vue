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
    <div class="container my-4">
        <section class="cards_container" v-if="projects && !loading">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3   g-5  ">
                <div class="col col_card" v-for="project in    projects.data   ">
                    <div class="card h-100 border-0">
                        <div class="card_image">
                            <img :src="getImagePath(project.image)" alt="{{project.title}}">
                        </div>
                        <div class="card-body h-50">
                            <div class="card_technology">
                                <span v-if="project.technologies.length > 0" v-for="technology in project.technologies"
                                      class="pe-1">
                                    {{ technology.name }} |
                                </span>
                                <span v-else class="  me-2">
                                    No technology
                                </span>
                            </div>
                            <div class="card_title">
                                <h4>{{ project.title }}</h4>
                            </div>
                            <div class="card_description">
                                <p>{{ truncateText(project.description) }}</p>
                            </div>


                            <router-link :to="{ name: 'single-post', params: { 'slug': project.slug } }">
                                Read More
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- loading section -->
        <div class="" v-else>
            <section class=" loading">
                <div class="container">
                    <div class="row row-cols-1  row-cols-md-3 row-cols-xl-4 g-3">
                        <div class="col" v-for="n in 6">
                            <div class="card" aria-hidden="true">
                                <img src="../assets/img/loading.gif" class="card-img-top" alt="...">
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
                <li class="page-item border border-0 " :class="link.url ? '' : 'disabled'"
                    v-for="   link    in    projects.links   ">
                    <a class="page-link" :class="link.active ? 'active' : ''" href="#" @click="currentPage(link.url)"
                       v-html="link.label"></a>
                </li>
            </ul>
        </nav>


    </div>
</template>
