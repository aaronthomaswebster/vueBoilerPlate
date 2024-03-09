<template>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <h2 class="text-h5 text-center my-5">Gallery</h2>
        </v-col>
        <v-col
          cols="12"
          style="text-align:-webkit-center;"
          
        >
          <v-carousel  style="max-width: 900px;">
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
              cover
            ></v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
  }
</script>