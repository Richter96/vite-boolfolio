<script>
import AppBanner from '../components/AppBanner.vue';

export default {
    name: "AppContact",
    components: { AppBanner }
}
</script>



<template>
    <AppBanner title="Contacts"></AppBanner>

    <div class="container bg-dark my-5 rounded-5 p-5">
        <form>
            <div class="mb-3 ">
                <label for="name" class="form-label text-white">Name</label>
                <input type="text" name="name" id="name" class="form-control" placeholder="Pinco Pallino"
                       aria-describedby="nameHelper">
                <small id="nameHelper" class="text-info">inseriesci il tuo nome</small>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label text-white">Email</label>
                <input type="email" name="email" id="email" class="form-control" placeholder="PincoPallino@example.com"
                       aria-describedby="emailHelper">
                <small id="emailHelper" class=" text-info">inseriesci il tuo nome</small>
            </div>
            <div class="mb-3">
                <label for="message" class="form-label text-white">Message</label>
                <textarea class="form-control" name="message" id="message" rows="5"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope"
                     viewBox="0 0 16 16">
                    <path
                          d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                </svg>
                Send</button>
        </form>
    </div>
</template>

<style lang="scss" scoped></style>