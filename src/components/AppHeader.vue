<script>
export default {
    name: "AppHeader",
}
</script>



<template>
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <div class="container">
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" :to="{ name: 'home' }" aria-current="page">Home <span
                                  class="visually-hidden">(current)</span></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'about' }">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'contact' }">Contact</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: '' }">Project</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- 
    <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">

        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                    aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="fa fa-bars"></span> Menu
            </button>
            <div class="collapse navbar-collapse" id="ftco-nav">
                <ul class="navbar-nav m-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'home' }" aria-current="page">Home <span
                                  class="visually-hidden">(current)</span></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'about' }">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'contact' }">Contact</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav> -->
</template>

<style lang="scss" scoped>
h1 {
    font-size: 1.4em;

    span.yellow {
        color: yellow;
        text-decoration: underline;
    }
}
</style>