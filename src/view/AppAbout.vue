<script>
import AppBanner from '../components/AppBanner.vue';
import { gsap } from "gsap";



export default {
    name: "AppAbout",
    components: { AppBanner },
    data() {
        return {


        }
    },
    methods: {

        // Crea un'istanza di TweenLite per l'animazione


    },
    mounted() {
        /*   const Bg_me = document.querySelector('.Bg_me');
  
          gsap.set(Bg_me, { backgroundColor: '#00ff4400' });
  
  
          gsap.to(Bg_me, {
              duration: 5, // Durata dell'animazione in secondi
              backgroundColor: "#00ff44", // Alterna tra rosso e blu
              repeat: -1, // Ripeti l'animazione all'infinito
              yoyo: true, // Ripeti l'animazione avanti e indietro
  
          }); */
    },
};
</script>



<template>
    <AppBanner title="About"></AppBanner>
    <div class="container vh-100 Bg_me">
        <section class="about_me">
            <header class="py-5 bg-image-full">
                <div class="text-center my-5">
                    <img class="img_profile img-fluid rounded-circle mb-4"
                         src="https://avatars.githubusercontent.com/u/120056446?v=4" alt="..." />
                    <h1 class="text-white fs-3 fw-bolder">Riccardo Castiglione</h1>
                    <p class="text-white-50 mb-0">Full Stack Developer</p>
                </div>
            </header>



        </section>
        <div class=" my-4">
            <div class="row align-items-md-stretc shadow h-100">
                <div class="col-md-6">
                    <div class="h-100">
                        <h1>Riccardo Castiglione</h1>
                    </div>
                </div>
                <div class="col-md-6 bor ps-4 border-3 border-danger rounded-3">
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

    </div>
</template>

<style lang="scss" scoped></style>