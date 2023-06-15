<script>
import AppBanner from '../components/AppBanner.vue';
import AppListProject from '../components/AppListProject.vue';

export default {
    name: "AppHome",
    components: { AppBanner, AppListProject }
}
</script>



<template>
    <AppBanner title="Home Page"></AppBanner>
    <div class="p-5 mb-4 bg-light rounded-3">
        <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold"> My Blog</h1>
            <p class="col-md-8 fs-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel perspiciatis ducimus
                architecto adipisci deleniti quisquam, similique nulla ea in illo enim ratione provident iste voluptatem
                impedit
                eligendi est tempore beatae?
            </p>

        </div>
    </div>



    <AppListProject></AppListProject>
</template>

<style lang="scss" scoped></style>