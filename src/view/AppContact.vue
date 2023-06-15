<script>
import AppBanner from '../components/AppBanner.vue';

export default {
    name: "AppContact",
    components: { AppBanner }
}
</script>



<template>
    <AppBanner title="Contacts"></AppBanner>

    <div class="container">
        <form>
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" name="name" id="name" class="form-control" placeholder="Pinco Pallino"
                       aria-describedby="nameHelper">
                <small id="nameHelper" class="text-muted">inseriesci il tuo nome</small>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" name="email" id="email" class="form-control" placeholder="Pinco Pallino"
                       aria-describedby="emailHelper">
                <small id="emailHelper" class="text-muted">inseriesci il tuo nome</small>
            </div>
            <div class="mb-3">
                <label for="message" class="form-label">message</label>
                <textarea class="form-control" name="message" id="message" rows="5"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<style lang="scss" scoped></style>