<template>
    <v-parallax dark :src="parallax_image">
        <v-layout align-center column justify-center>
             <h1 class="display-2 font-weight-thin mb-3">Data Engineer</h1>
             <h4 class="subheading"></h4>
        </v-layout>
    </v-parallax>
</template>

<script>
export default {
    data() {
        return {
            parallax_image: require('../assets/chun.jpg')
        }
    }
}
</script>

<style>
</style>
