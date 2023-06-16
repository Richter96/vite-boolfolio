<script>
export default {
    name: "AppBanner",
    props: {
        title: String
    }
}
</script>

<template>
    <div class="bannner py-4 text-white shadow">
        <h1 class="ms-1">
            {{ title }}
        </h1>
    </div>
</template>

<style lang="scss" scoped></style>