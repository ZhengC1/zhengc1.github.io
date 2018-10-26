<template>
    <v-app>
        <v-parallax dark :src="parallax_image">
            <v-container fill-height>
                <v-layout column>
                    <v-flex xs12 row>
                        <v-layout alight-right justify-end>
                                <v-btn round flat outline color="white">Doodles</v-btn>
                                <v-btn round flat outline color="white">PillowFight</v-btn>
                                <v-btn round flat outline color="white">Frowning</v-btn>
                                <v-btn round flat outline color="white">Contact</v-btn>
                        </v-layout>
                    </v-flex>
                    <v-flex xs12 row>
                        <v-layout align-center justify-center>
                                <h1 class="display-2 font-weight-thin mb-3">Data Engineer</h1>
                                <h4 class="subheading"></h4>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-parallax>
    </v-app>
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
