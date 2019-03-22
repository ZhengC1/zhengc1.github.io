<template>
    <stack :column-min-width="100" :gutter-width="15" :gutter-height="15" monitor-images-loaded>
      <stack-item class="img-container" v-for="image in images" :key="image">
        <img :src="image.url">
      </stack-item>
    </stack>
</template>

<script>
export default {
  data () {
    return {
      images: [
        {
          title: "image 1",
          url: "https://img00.deviantart.net/e895/i/2017/275/7/d/ultra_sun_ultra_moon_by_kawacy-dbpbuiq.jpg"
        }, {
          title: "image 2",
          url: "https://img00.deviantart.net/870d/i/2009/174/d/b/sweet_summer_ii_by_zanasoul.jpg"
        }, {
          title: "image 3",
          url: "https://pre00.deviantart.net/9b5b/th/pre/i/2017/205/c/8/electra_by_mistanphotography-dbhgxsz.jpg"
        }, {
          title: "image 4",
          url: "https://img00.deviantart.net/47b3/i/2017/140/0/7/wonder_woman_by_pencilhead7-db9w9lw.png"
        }, {
          title: "image 5",
          url: "https://orig00.deviantart.net/2b7a/f/2017/275/5/6/daily_paint_1777__swineapple_by_cryptid_creations-dbpboas.png"
        }, {
          title: "image 6",
          url: "https://pre00.deviantart.net/a41c/th/pre/i/2015/014/9/8/swan_by_avine-d8dw53d.jpg"
        }
      ]
    }
  },
  methods: {
      triggerClick() {
        // Some code here...
      }
  },
}
</script>

<style>
</style>
