<template>
    <v-container fluid class="testimonials-section">
      <v-row justify="center">
        <v-col cols="12">
          <h2 class="text-h5 text-center my-5">What Our Customers Say</h2>
        </v-col>
        <v-col cols="12" md="8">
          <v-carousel hide-delimiters height="400">
            <v-carousel-item v-for="(testimonial, index) in testimonials" :key="index">
              <v-row class="fill-height" align="center" justify="center">
                <v-col class="text-center" cols="12">
                  <v-avatar size="120" color="grey lighten-4">
                    <v-img :src="testimonial.avatar" contain></v-img>
                  </v-avatar>
                  <div class="mt-4">
                    <v-icon large color="yellow darken-2">mdi-star</v-icon>
                    <v-icon large color="yellow darken-2">mdi-star</v-icon>
                    <v-icon large color="yellow darken-2">mdi-star</v-icon>
                    <v-icon large color="yellow darken-2">mdi-star</v-icon>
                    <v-icon large color="yellow darken-2">mdi-star</v-icon>
                  </div>
                  <blockquote class="mt-4">{{ testimonial.quote }}</blockquote>
                  <caption>{{ testimonial.name }}</caption>
                  <caption>{{ testimonial.position }}</caption>
                </v-col>
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'TestimonialsSection',
    data: () => ({
      testimonials: [
        {
          name: 'Jane Doe',
          position: 'Artist & Designer',
          quote: 'I love working with this company. They are always on time and provide excellent service.',
          avatar: 'https://source.unsplash.com/random/?person'
        },
        {
          name: 'John Smith',
          position: 'CEO, ABC Inc.',
          quote: 'I highly recommend this company. They are professional, reliable, and deliver great results.',
          avatar: 'https://source.unsplash.com/random/?male,person'
        },
        // Add more testimonials as needed
      ]
    })
  };
  </script>
  
  <style scoped>
  .testimonials-section {
    margin-top: 5rem;
  }
  blockquote {
    font-size: 1.25rem;
    font-style: italic;
  }
  caption {
    display: block;
    font-size: 1rem;
    margin-top: 1rem;
  }
  </style>
  