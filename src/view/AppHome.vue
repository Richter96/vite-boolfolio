<script>
import AppBanner from '../components/AppBanner.vue';
import AppListProject from '../components/AppListProject.vue';
import axios from 'axios';


export default {
    name: "AppHome",
    components: {
        AppBanner,
        AppListProject,
    },
    data() {
        return {
            baseApi: 'http://127.0.0.1:8000/',
            projectsPath: 'api/projects',
            loading: true,
            projects: [],
            error: null,
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
        },


        onAfterSlideChange(index) {
            console.log('@onAfterSlideChange Callback Triggered', 'Slide Index ' + index)
        },
        onBeforeSlideChange(index) {
            console.log('@onBeforeSlideChange Callback Triggered', 'Slide Index ' + index)
        },
        onLastSlide(index) {
            console.log('@onLastSlide Callback Triggered', 'Slide Index ' + index)
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
                Benvenuti nel mio Blog! Qui ci sono alcuni dei miei progetti creati durante tutto il corso Boolean. Un
                percorso che ha avuto inizio con le basi di HTML e CSS per poi progredire con l'utilizzo avanzato di
                javascript e php e l'implementazione di framework come Vue e Laravel, permettendomi di entrare nel mondo
                dello sviluppo web.
            </p>

        </div>
    </div>

    <!--- This may need to change --->
    <div class="main-container">
        <div class="coverflow-container">
            <ol class="coverflow-list">
                <!-- Cover item -->
                <input type="radio" name="cover-item" id="cover-1">
                <li class="coverflow-item">
                    <label for="cover-1">
                        <figure class="album-cover">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3211/51psxBugNkL.jpg">
                            <figcaption class="album-name">Love Is Blind</figcaption>
                        </figure>
                    </label>
                </li>
                <!-- Cover item -->
                <input type="radio" name="cover-item" id="cover-2">
                <li class="coverflow-item">
                    <label for="cover-2">
                        <figure class="album-cover">
                            <img
                                 src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3211/9c0075e42d1e099c487488a168db0e41.1000x1000x1.jpg" />
                            <figcaption class="album-name">Disintegration</figcaption>
                        </figure>
                    </label>
                </li>
                <!-- Cover item -->
                <input type="radio" name="cover-item" id="cover-3">
                <li class="coverflow-item">
                    <label for="cover-3">
                        <figure class="album-cover">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3211/3651470.jpg">
                            <figcaption class="album-name">Dream Harder</figcaption>
                        </figure>
                    </label>
                </li>
                <!-- Cover item -->
                <input type="radio" name="cover-item" id="cover-4">
                <li class="coverflow-item">
                    <label for="cover-4">
                        <figure class="album-cover">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3211/MI0000681618.jpg">
                            <figcaption class="album-name">Wish</figcaption>
                        </figure>
                    </label>
                </li>
                <!-- Cover item -->
                <input type="radio" name="cover-item" id="cover-5">
                <li class="coverflow-item">
                    <label for="cover-5">
                        <figure class="album-cover">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3211/homepage_large.63d675da.jpg">
                            <figcaption class="album-name">2:54</figcaption>
                        </figure>
                    </label>
                </li>
                <!-- Cover item -->
                <input type="radio" name="cover-item" id="cover-6">
                <li class="coverflow-item">
                    <label for="cover-6">
                        <figure class="album-cover">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3211/garbagealbum1.jpg">
                            <figcaption class="album-name">Garbage</figcaption>
                        </figure>
                    </label>
                </li>
                <!-- Cover item -->
                <input type="radio" name="cover-item" id="cover-7">
                <li class="coverflow-item">
                    <label for="cover-7">
                        <figure class="album-cover">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3211/long-way-round-2010.png">
                            <figcaption class="album-name">Long Way Round</figcaption>
                        </figure>
                    </label>
                </li>
                <!-- Cover item -->
                <input type="radio" name="cover-item" id="cover-8">
                <li class="coverflow-item">
                    <label for="cover-8">
                        <figure class="album-cover">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3211/61b3DwIVKqL.jpg">
                            <figcaption class="album-name">HomeGrown</figcaption>
                        </figure>
                    </label>
                </li>
                <!-- Cover item -->
                <input type="radio" name="cover-item" id="cover-9">
                <li class="coverflow-item">
                    <label for="cover-9">
                        <figure class="album-cover">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3211/0000037627_500.jpg">
                            <figcaption class="album-name">Casanova</figcaption>
                        </figure>
                    </label>
                </li>
            </ol>
        </div>
        <div class="controls">
            <label for="cover-1">1</label>
            <label for="cover-2">2</label>
            <label for="cover-3">3</label>
            <label for="cover-4">4</label>
            <label for="cover-5">5</label>
            <label for="cover-6">6</label>
            <label for="cover-7">7</label>
            <label for="cover-8">8</label>
            <label for="cover-9">9</label>
        </div>
    </div>



    <AppListProject></AppListProject>
</template>

<style lang="scss" scoped></style>