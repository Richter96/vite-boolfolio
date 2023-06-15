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
    <AppListProject></AppListProject>
</template>

<style lang="scss" scoped></style>