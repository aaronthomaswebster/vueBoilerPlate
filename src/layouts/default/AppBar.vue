<template>
  <v-app-bar app>
    <v-toolbar-title>
      Boiler Plate LLC.
    </v-toolbar-title>

    <v-spacer></v-spacer> <!-- This creates space between the title/logo and navigation links -->


    <template v-slot:append>
      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">

          <v-avatar image="https://source.unsplash.com/random/?avatar" v-bind="props"></v-avatar>
        </template>

        <v-list>
          <v-list-item v-for="(item, index) in menuItems" :key="index" :to="item.to  || '#'" @click="item.action">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
    <template v-if="!$vuetify.display.smAndDown">

      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/services">Services</v-btn>
      <v-btn text to="/gallery">Gallery</v-btn>
      <v-btn text to="/contact">Contact</v-btn>
    </template>


  </v-app-bar>


  <v-navigation-drawer v-model="drawer" temporary bottom location="right" app>
    <v-list nav dense>
      <v-list-item to="/">
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>
      <v-list-item to="/gallery">
        <v-list-item-title>Gallery</v-list-item-title>
      </v-list-item>
      <v-list-item to="/services">
        <v-list-item-title>Services</v-list-item-title>
      </v-list-item>
      <v-list-item to="/contact">
        <v-list-item-title>Contact</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { useSupabaseStore } from '@/stores';
const supabase = useSupabaseStore();

export default {
  data() {
    return {
      drawer: false,
      publicPath: process.env.BASE_URL,
      menuItems: [
        { title: 'Profile', to: '/profile'},
        { title: 'Settings', to: '/settings'},
        { title: 'Logout', action: this.logout},
      ],
    };
  },
  methods: {
    logout() {
      supabase.signOut()
    }
  }
};
</script>

<style scoped>
/* Add any additional styles for your app bar here */
</style>
