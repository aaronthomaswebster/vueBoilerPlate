<template>
    <div  v-if="!authorized" class="d-flex justify-center align-center" style="height: 100vh;"> <!-- This div acts as a flex container -->
        <v-card max-width="400" min-width="400" outlined class="mx-auto"> <!-- mx-auto is used for horizontal centering -->
            <v-card-title>Login</v-card-title>
            <v-card-text>
                <v-form @submit.prevent="handleLogin">
                    <v-text-field v-model="email" label="Email"></v-text-field>
                    <v-btn type="submit" color="primary">Login</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </div>
    <slot v-else></slot>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '@/supabase'

const loading = ref(false)
const email = ref('')

const handleLogin = async () => {
  try {
    loading.value = true
    const { error } = await supabase.auth.signInWithOtp({
      email: email.value,
    })
    if (error) throw error
    alert('Check your email for the login link!')
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message)
    }
  } finally {
    loading.value = false
  }
}

const authorized = ref(false)
supabase.auth.onAuthStateChange((_, session) => {
  authorized.value = session !== null
})
</script>