// Utilities
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    notifications: [{ id: "1", message: "Hello", timeout: 5000 }],
  }),
  getters: {
    notificationList: (state) => state.notifications,
  },
  actions: {
    async addNotification(message, timeout = 5000) {
      const id = window.crypto.randomUUID();
      this.notifications.push({ id, message, timeout: timeout, show: true});
      // setTimeout(() => {
      //   this.removeNotification(id)
      // }, timeout)
    },
    dismissNotification(id) {
      this.notifications = this.notifications.filter((n) => n.id !== id);
    }
  },
});
