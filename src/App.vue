<script>
import axios from 'axios';

export default {
    components: {
        header
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
                    this.projects = response.data.project
                    this.loading = false
                })
                .catch(error => {
                    console.log(error);
                    this.error = error.message
                })
        }
    },
    mounted() {
        const url = this.baseApi + this.projectsPath
        console.log(url);
        this.getProjects(url)
    },

}
</script>

<template>
    <h1>I PROGETTI DI RICHTER</h1>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
