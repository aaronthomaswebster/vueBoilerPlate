<template>
  <v-app-bar app >
    <v-toolbar-title>
     Boiler Plate LLC.
    </v-toolbar-title>

    <v-spacer></v-spacer> <!-- This creates space between the title/logo and navigation links -->


    <template v-slot:append v-if="$vuetify.display.smAndDown">
        <v-app-bar-nav-icon  @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </template>
    <template v-if="!$vuetify.display.smAndDown">

      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/services">Services</v-btn>
      <v-btn text to="/gallery">Gallery</v-btn>
      <v-btn text to="/contact">Contact</v-btn>
    </template>


  </v-app-bar>
  

  <v-navigation-drawer
      v-model="drawer"
      temporary
      bottom
      location="right"
      app
      
    >
      <v-list
        nav
        dense
      >
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
export default {
  data() {
    return {
      drawer: false,
    publicPath: process.env.BASE_URL
    };
  },
};
</script>

<style scoped>
/* Add any additional styles for your app bar here */
</style>
