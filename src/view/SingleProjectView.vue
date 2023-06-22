<script>
import { toHandlers } from 'vue';
import AppBanner from '../components/AppBanner.vue';
import axios from 'axios';

export default {
    name: 'SinglePostView',
    components: {
        AppBanner
    },
    data() {
        return {
            project: null,
            loading: true,
            baseApi: 'http://127.0.0.1:8000/',
        }
    },
    methods: {
        getSinglePost(url) {
            axios
                .get(url)
                .then(response => {
                    console.log(response);
                    if (response.data.success) {
                        this.project = response.data.result
                    } else {
                        this.$router.push({
                            name: 'not-found'
                        })
                    }
                })
                .catch(error => {
                    console.log(error);

                })
        },
        getImagePath(path) {
            return this.baseApi + 'storage/' + path
        },

    },
    mounted() {
        const url = this.baseApi + 'api/project/' + this.$route.params.slug;
        this.getSinglePost(url)

    },
};
</script>

<template>
    <AppBanner :title="project?.title"></AppBanner>
    <div class="container-fluid">
    </div>
    <div class="card_image_fullscreen">
        <img :src="getImagePath(project.image)" :alt="project.title">
    </div>
    <div class="container single_cards_container my-4">
        <router-link class="btn btn-primary my-2" :to="{ name: 'home' }">
            Indietro
        </router-link>
        <div class="card " v-if="project">
            <div class="card_image">
                <img :src="getImagePath(project.image)" :alt="project.title">
            </div>
            <div class="card-body h-50">
                <div class="metadata ">
                    <div class="card_description">
                        <p>{{ project.description }}</p>
                    </div>
                    <div class="author mb-1 ">
                        <span class=" d-inline"><strong>Author: </strong></span>
                        <span class="text_sinc d-inline">{{ project.user.name }}</span>
                    </div>
                    <div class="technologies mb-1">
                        <span><strong>Technologies: </strong></span>
                        <div class="card_technology d-inline">
                            <span v-for="technology in project.technologies" v-if="project.type" class="pe-1">
                                {{ technology.name }} |
                            </span>
                            <span v-else>N/A</span>
                        </div>
                    </div>
                    <div class="type mb-1">
                        <span><strong>Type: </strong></span>
                        <span class="text_sinc d-inline" v-if="project.type"> {{ project.type.name
                        }}</span>
                        <span v-else>N/A</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>