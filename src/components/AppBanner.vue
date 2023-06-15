<script>
export default {
    name: "AppBanner",
    props: {
        title: String
    }
}
</script>

<template>
    <div class="bg-dark py-4 text-white shadow">
        <h1 class="ms-3">
            {{ title }}
        </h1>
    </div>
</template>

<style lang="scss" scoped></style>