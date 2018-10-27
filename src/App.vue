<template>
    <v-app>
        <router-view>
        </router-view>
        <v-footer dark height="auto">
            <v-card flat tile class="indigo lighten-1 white--text">
                <v-card-text>
                    <v-btn v-for="icon in icons" :key="icon" class="mx-3 white--text">
                        <v-icon size="24px">{{icon}}</v-icon>
                    </v-btn>
                </v-card-text>
                <v-card-text class="white--text pt-0">
                </v-card-text>
                <v-divider></v-divider>
                <v-card-text class="white--text">
                    &copy;2018 - <strong>Chun Zheng</strong>
                </v-card-text>
            </v-card>
        </v-footer>
    </v-app>
</template>

<script>
import HomePage from './components/HomePage'
import Frowning from './components/Frowning'

export default {
    name: 'App',
    components: {
        HomePage,
        Frowning
    },
    data: () => ({
        icons: [
        'fab fa-facebook-f',
        'fab fa-linkedin'
        ]
    })
}
</script>
