<template>
    <v-app>
        <v-content>
            <!-- landing page -->
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
                            <v-layout align-center justify-center column>
                                <h1 class="display-2 font-weight-thin mb-3">Data Engineer</h1>
                                <h4 class="subheading">Friend, Colleague, Lover</h4>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-parallax>
            <v-container fluid>
                <v-layout align-center justify-center fill-height row wrap>
                    <v-flex pa-4>
                        <v-card>
                            <v-img :src="cards.card1" height="200px"> </v-img>
                            <v-card-title primary-title>
                                <div>
                                    <div class="headline">Friendly</div>
                                    <span class="grey--text">Avid Cat herder</span>
                                </div>
                            </v-card-title>
                        </v-card>
                    </v-flex>
                    <v-flex pa-4>
                        <v-card px-4>
                            <v-img :src="cards.card2" height="200px"> </v-img>
                            <v-card-title primary-title>
                                <div>
                                    <div class="headline">Outgoing</div>
                                    <span class="grey--text">Avid Cat herder</span>
                                </div>
                            </v-card-title>
                        </v-card>
                    </v-flex>
                    <v-flex pa-4>
                        <v-card>
                            <v-img :src="cards.card3" height="200px"> </v-img>
                            <v-card-title primary-title>
                                <div>
                                    <div class="headline">Eccentric</div>
                                    <span class="grey--text">Avid Cat herder</span>
                                </div>
                            </v-card-title>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            parallax_image: require('../assets/chun.jpg'),
            cards: {
                card1: require('../assets/cat.jpg'),
                card2: require('../assets/cat1.jpg'),
                card3: require('../assets/cat2.jpg')
            },
        }
    }
}
</script>

<style></style>
