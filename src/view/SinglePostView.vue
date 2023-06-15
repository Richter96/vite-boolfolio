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
            Project: null,
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
                    if (response.data.succes) {
                        this.Project = response.data.result
                    } else {
                        this.$router.push({ name: 'not-found' })
                    }
                })
                .catch(error => {
                    console.log(error);

                })
        }

    },
    mounted() {
        const url = this.baseApi + 'api/project/' + this.$route.params.slug;
        this.getSinglePost(url)
    },
};
</script>

<template>
    <AppBanner :title="$route.params.slug"></AppBanner>
    <div>

    </div>
</template>