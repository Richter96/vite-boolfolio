<script>
import SinglePostView from '@/components/SinglePostView.vue';
import AppBanner from '../components/AppBanner.vue';

export default {
    name: 'SinglePostView'
    components: {
        AppBanner
    },
};
</script>

<template>
    <AppBanner title="$route.params.slug"></AppBanner>
    <div>

    </div>
</template>