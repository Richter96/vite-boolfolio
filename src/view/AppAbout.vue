<script>
import AppBanner from '../components/AppBanner.vue';

export default {
    name: "AppAbout",
    components: { AppBanner }
}
</script>



<template>
    <AppBanner title="ABOUT ME"></AppBanner>
    <div class="container my-4">
        <div class="row align-items-md-stretc">
            <div class="col-md-6">
                <div class="h-100 p-5 text-white border shadow rounded-3">
                    <h1 class="my-3">Riccardo Castiglione</h1>
                    <h2>Somethink about Me<i class="fa fa-meanpath" aria-hidden="true"></i></h2>
                </div>
            </div>
            <div class="col-md-6 bor ps-4 text-white  border-3 border-danger rounded-3">
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure fuga quo animi. Quae a distinctio
                    facere
                    iure alias optio perspiciatis dolor obcaecati deleniti modi. Atque, reiciendis aut. Quaerat, rem
                    nostrum. Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit, amet
                    consectetur adipisicing elit. Commodi, cum.
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>