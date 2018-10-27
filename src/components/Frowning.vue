<template>
    <v-carousel
        :hide-controls=true
        :multiple=true
        :light=true
        :hide-delimiters=true
        >
        <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            ></v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
    data () {
        return {
            items:
            [
                {
                    src: require('../assets/cat.jpg')
                },
                {
                    src: require('../assets/cat1.jpg')
                },
                {
                    src: require('../assets/cat2.jpg')
                },
                {
                    src: require('../assets/cat3.jpg')
                },
                {
                    src: require('../assets/cat4.jpg')
                },
                {
                    src: require('../assets/cat5.jpg')
                },

            ]
        }
    }
}
</script>

<style>
</style>
