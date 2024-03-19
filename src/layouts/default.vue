<template>
  <v-app style="overflow: hidden;">
    <DefaultBar />
    <DefaultView />
    <Notifications />
    <DefaultFooter />
  </v-app>
</template>

<script setup>
  import DefaultBar from './default/AppBar.vue'
  import DefaultView from './default/View.vue'
  import DefaultFooter from './default/Footer.vue'
  import Notifications from './default/Notifications.vue'
</script>

<style>

</style>