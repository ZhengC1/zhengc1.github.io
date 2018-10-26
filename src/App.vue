<template>
    <v-app>
        <v-toolbar dark color="primary">
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title class="white--text">Chun Zheng</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn flat>Comics</v-btn>
                    <v-btn flat>PillowFight</v-btn>
                    <v-btn flat>Frowning</v-btn>
                    <v-btn flat>Contact</v-btn>
                </v-toolbar-items>
        </v-toolbar>
        <v-content>
            <HelloWorld/>
        </v-content>
    </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
    name: 'App',
    components: {
        HelloWorld
    },
    data () {
        return {
            //
        }
    }
}
</script>
