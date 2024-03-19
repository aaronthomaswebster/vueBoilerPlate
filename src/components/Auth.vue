<template>
    <div  v-if="!supabaseStore.isAuthenticated" class="d-flex justify-center align-center" style="height: 100vh;"> <!-- This div acts as a flex container -->
        <v-card max-width="400" min-width="400" outlined class="mx-auto"> <!-- mx-auto is used for horizontal centering -->
            <v-card-title>Login</v-card-title>
            <v-card-text>
                <v-form @submit.prevent="supabaseStore.handleLogin(email)">
                    <v-text-field v-model="email" label="Email"></v-text-field>
                    <v-btn type="submit" color="primary">Login</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </div>
    
    <slot v-else></slot>
</template>

<script setup>
import { useSupabaseStore } from '@/stores';

const supabaseStore = useSupabaseStore();


</script>