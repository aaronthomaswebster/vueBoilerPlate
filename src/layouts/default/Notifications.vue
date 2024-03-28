<template>
  <div class="text-center">
      <v-snackbar v-for="(item, index) in appStore.notificationList" :key="item.id" v-model="item.show"
        :timeout="item.timeout" @update:modelValue="appStore.dismissNotification(item.id)"
        :style="`bottom:${(50 * index)}px;`">
        {{ item.message }}

        <template v-slot:actions>
          <v-btn color="blue" variant="text" @click="appStore.dismissNotification(item.id)">
            Close
          </v-btn>
        </template>
      </v-snackbar>
  </div>
</template>

<script setup>
import { useAppStore } from '@/stores';


const appStore = useAppStore();

console.log({ appStore });


const addNotification = (message, timeout) => {
  appStore.addNotification(message, timeout);
};


</script>
