<template>
    <div>
        <!-- landing page -->
        <v-parallax dark :src="parallax_image">
            <v-container fill-height>
                <v-layout column>
                    <v-flex xs12 row>
                        <v-layout alight-right justify-end>
                            <v-btn round flat outline color="white">Contact</v-btn>
                        </v-layout>
                    </v-flex>
                    <v-flex xs12 row>
                        <v-layout align-center justify-center column>
                            <h1 class="display-2 font-weight-thin mb-3">Software Developer</h1>
                            <h4 class="subheading">Friend, Lover, Amatuer Cat Enthusiast</h4>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-parallax>
        <v-container pt-5 fluid>
            <v-layout align-center justify-center fill-height row wrap>
                <v-flex pa-5 ma-3>
                    <v-card :href="cards.card1_url" :hover="true">
                        <v-img :src="cards.card1" height="200px"> </v-img>
                        <v-card-title  primary-title>
                            <div>
                                <div class="headline">Frowning</div>
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
                    <v-card :href="cards.card3_url" :hover="true">
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
            <v-container>
                <div class='work-ad' > 
                    <h1> 
                        See what former co-workers have to say about Chun 
                    </h1>
                </div>
                <Carousel/>
            </v-container>
        </v-parallax>
        <Footer/>
    </div>
</template>

<script>
import Footer from '@/components/Footer'
import Carousel from '@/components/Carousel'
export default {
    name: 'HomePage',
    components: {
        Carousel,
        Footer
    },
    data() {
        return {
            avatar_image: require('../assets/business_cat.jpg'),
            parallax_image: require('../assets/chun.jpeg'),
            cards: {
                card1: require('../assets/cat_bridge.jpg'),
                card1_url: "#/Frowning",
                card2: require('../assets/cat1.jpg'),
                card3: require('../assets/cat_watch.jpg'),
                card3_url: "#/About",
            },
        }
    }
}
</script>

<style>
.work-ad {
    text-align: center;
}
</style>
