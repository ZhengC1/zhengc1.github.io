<template>
    <div>
        <!-- landing page -->
        <v-parallax dark :src="parallax_image">
            <v-container fill-height>
                <v-layout column>
                    <v-flex xs12 row>
                        <v-layout alight-right justify-end>
                            <v-btn round flat outline color="white">PillowFight</v-btn>
                            <v-btn to="/Frowning" round flat outline color="white">Frowning</v-btn>
                            <v-btn round flat outline color="white">Contact</v-btn>
                        </v-layout>
                    </v-flex>
                    <v-flex xs12 row>
                        <v-layout align-center justify-center column>
                            <h1 class="display-2 font-weight-thin mb-3">Data Engineer</h1>
                            <h4 class="subheading">Friend, Colleague, Lover</h4>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-parallax>
        <v-container pt-5 fluid>
            <v-layout align-center justify-center fill-height row wrap>
                <v-flex pa-5 ma-3>
                    <v-card :hover="true">
                        <v-img :src="cards.card1" height="200px"> </v-img>
                        <v-card-title primary-title>
                            <div>
                                <div class="headline">Comics</div>
                            </div>
                        </v-card-title>
                    </v-card>
                </v-flex>
                <v-flex pa-5 ma-3>
                    <a href='https://github.com/ZhengC1'>
                        <v-card :hover="true">
                            <v-img :src="cards.card2" height="200px"> </v-img>
                            <v-card-title primary-title>
                                <div>
                                    <div class="headline">Projects</div>
                                </div>
                            </v-card-title>
                        </v-card>
                    </a>
                </v-flex>
                <v-flex pa-5 ma-3>
                    <v-card :hover="true">
                        <v-img :src="cards.card3" height="200px"> </v-img>
                        <v-card-title primary-title>
                            <div>
                                <div class="headline">About</div>
                            </div>
                        </v-card-title>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
        <v-parallax dark :src="parallax_image">
        </v-parallax>
    </div>
</template>

<script>
export default {
    data() {
        return {
            avatar_image: require('../assets/business_cat.jpg'),
            parallax_image: require('../assets/chun.jpeg'),
            cards: {
                card1: require('../assets/cat_bridge.jpg'),
                card2: require('../assets/cat1.jpg'),
                card3: require('../assets/cat_watch.jpg')
            },
        }
    }
}
</script>

<style></style>
