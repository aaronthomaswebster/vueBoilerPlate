<template>
    <v-container class="hero-section " >
      <v-row align="center" justify="center">
        <v-col cols="12" md="8">
          <div class="text-center">
            <h1 class="display-2">Welcome to Our Company</h1>
            <p class="subtitle-1">A great company to work with</p>
            <v-btn color="primary" large class="mt-5" to="/contact">Request Information</v-btn>
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <v-img           
            src="https://source.unsplash.com/random/?website,hero"
            aspect-ratio="1"
            contain
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'HeroSection',
  };
  </script>
  
  <style scoped>
  .hero-section {
    background-color: #f8f8f8;
    padding: 0 0;
  }
  </style>
  