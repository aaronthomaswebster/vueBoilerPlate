import { defineStore } from 'pinia';
import { supabase } from '@/supabase'; // Adjust the path as necessary



export const useSupabaseStore = defineStore('supabase', {
  state: () => ({
    user: null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
  actions: {
    async checkAuth() {
      const session = supabase.auth.session();
      this.user = session?.user || null;
    },
    async signOut() {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      this.user = null;
    },
    setUser(user) {
      console.log({user})

      this.user = user;
    },
    async handleLogin(email){
      console.log({email})  
      try {
        const { error } = await supabase.auth.signInWithOtp({
          email: email,
        })
        if (error) throw error
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message)
          return false;
        }
      } finally {
       return true;
      }
    }
  },
});


supabase.auth.onAuthStateChange((event, session) => {
  const supabaseStore = useSupabaseStore();
  console.log({event, session });
  supabaseStore.setUser(session?.user || null);
});