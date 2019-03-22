<template>
    <v-app>
        <router-view>
        </router-view>
    </v-app>
</template>

<script>
import HomePage from '@/components/HomePage'
import Frowning from '@/components/Frowning'
import About from '@/components/About'

export default {
    name: 'App',
    components: {
        HomePage,
        Frowning,
        About
    },
}
</script>
