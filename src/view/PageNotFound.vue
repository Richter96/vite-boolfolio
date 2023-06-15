<script>
export default {
    name: "PageNotFound",
}
</script>

<template >
    <div class="bg-dark">
        <div class=" jambotron_not_found p-5 mb-4 bg-black m-0 p-0">
            <img class=" img-fluid" src="../assets/img/notFound.gif" alt="">
            <router-link class="pulse back_home btn border-0 text-white" :to="{ name: 'home' }">Go back... to
                HOME</router-link>
        </div>
    </div>
</template>