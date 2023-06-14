<script>
import axios from 'axios';

export default {
    components: {
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
        nextPage(url) {
            // console.log(url);
            this.getProjects(url)
        },
        prevPage(url) {
            // console.log(url);
            this.getProjects(url)
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
    <div class=" container">
        <h1 class="my-3">I PROGETTI DI RICHTER</h1>
        <div class="row align-items-md-stretc my-3">
            <div class="col-md-6">
                <div class="h-100 p-5 text-white bg-dark border border-white rounded-3">
                    <h2>Somethink about Me<i class="fa fa-meanpath" aria-hidden="true"></i></h2>
                </div>
            </div>
            <div class="col-md-6 bor ps-4">
                <div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure fuga quo animi. Quae a distinctio
                        facere
                        iure alias optio perspiciatis dolor obcaecati deleniti modi. Atque, reiciendis aut. Quaerat, rem
                        nostrum. Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit, amet
                        consectetur adipisicing elit. Commodi, cum.</p>
                </div>
            </div>
        </div>
        <section class="card_project">
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

        <!-- <nav aria-label="...">
            <ul class="pagination my-3">
                <li class="page-item " :class="projects.prev_page_url ? '' : 'disabled'">
                    <a class="page-link" href="#" @click="prevPage(projects.prev_page_url)">Previous</a>
                </li>

                <li class="page-item" :class="projects.next_page_url ? 'active' : ''"><a class="page-link" href="#"
                       @click="prevPage('http://127.0.0.1:8000/api/projects?page=1')">1</a></li>

                <li class="page-item" :class="projects.prev_page_url ? 'active' : ''"><a class="page-link" href="#"
                       @click="nextPage('http://127.0.0.1:8000/api/projects?page=2')">2</a></li>

                <li class="page-item" :class="projects.next_page_url ? '' : 'disabled'">
                    <a class="page-link" href="#" @click="nextPage(projects.next_page_url)">Next</a>
                </li>
            </ul>
        </nav> -->

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

<style lang="scss">
@use './styles/general.scss';
</style>
