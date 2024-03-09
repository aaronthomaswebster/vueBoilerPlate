<template>
  <v-footer class="bg-grey-lighten-1" style="max-height: 64px;">
    <v-row>
      <v-col :cols="12">
        <strong>Boiler Plates</strong>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        class="mx-4"
        size="small"
        variant="plain"
      ></v-btn>
      </v-col>

    </v-row>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>