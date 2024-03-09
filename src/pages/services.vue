<template>
  <v-container fluid class="services-section">
    <v-row justify="center">
      <v-col cols="12">
        <h2 class="text-h5 text-center my-5">Our Professhional Services</h2>
      </v-col>
      <v-col
        v-for="service in services"
        :key="service.id"
        cols="12"
        md="4"
      >
        <v-card class="mx-auto" max-width="344" outlined>
          <v-img
            :src="service.image"
            class="white--text align-end"
            height="200px"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          >
            <v-card-title class="text-white">{{ service.title }}</v-card-title>
          </v-img>
          <v-card-text>
            {{ service.description }}
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" text :href="service.link">Learn More</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    services: [
      {
        id: 1,
        title: 'Tech Support',
        description: 'We provide technical support for a wide range of software and hardware issues.',
        image: 'https://source.unsplash.com/random/?tech,support',
        link: '#tech-support'
      },
      {
        id: 2,
        title: 'Web Development',
        description: 'We specialize in building responsive and scalable web applications.',
        image: 'https://source.unsplash.com/random/?web,development',
        link: '#web-development'
      },
      {
        id: 3,
        title: 'Mobile App Development',
        description: 'We create custom mobile applications for iOS and Android devices.',
        image: 'https://source.unsplash.com/random/?mobile,app',
        link: '#mobile-app-development'
      },
      {
        id: 4,
        title: 'Cloud Computing',
        description: 'We offer cloud computing solutions to help businesses scale and grow.',
        image: 'https://source.unsplash.com/random/?cloud,computing',
        link: '#cloud-computing'
      },
      // Add more services as needed
    ]
  })
};
</script>
