<template>
  <v-container>
    <v-card>
      <v-card-title>Profile</v-card-title>
      <v-card-text>
        <v-form v-model="valid" ref="form">
          <!-- Profile Picture -->
          <v-avatar size="120" class="mb-3">
            <img :src="avatar_url || 'default-avatar.png'" alt="Profile">
          </v-avatar>
          <v-file-input
            label="Profile picture"
            prepend-icon="mdi-camera"
            @change="uploadImage"
          ></v-file-input>


          <!-- Name -->
          <v-text-field
            label="Name"
            v-model="profile"
            :rules="[rules.required]"
            required
          ></v-text-field>
=

          <v-btn :disabled="!valid" @click="updateProfile" color="primary">Update Profile</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { supabase } from '../supabase'
import { onMounted, ref, toRefs } from 'vue'

const props = defineProps(['session'])
const { session } = toRefs(props)

const loading = ref(true)
const username = ref('')
const website = ref('')
const avatar_url = ref('')
const email = ref('')
const rules = ref({
        required: value => !!value || 'Required.',
        email: value => /.+@.+\..+/.test(value) || 'E-mail must be valid.',
        phoneNumber: value => /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(value) || 'Phone number must be valid.'
      })
onMounted(() => {
  getProfile()
})

async function getProfile() {
  try {
    loading.value = true
    const { user } = session.value

    const { data, error, status } = await supabase
      .from('profiles')
      .select(`username, website, avatar_url`)
      .eq('id', user.id)
      .single()

    if (error && status !== 406) throw error

    if (data) {
      username.value = data.username
      website.value = data.website
      avatar_url.value = data.avatar_url
    }
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}

async function updateProfile() {
  try {
    loading.value = true
    const { user } = session.value

    const updates = {
      id: user.id,
      username: username.value,
      website: website.value,
      avatar_url: avatar_url.value,
      updated_at: new Date(),
    }

    const { error } = await supabase.from('profiles').upsert(updates)

    if (error) throw error
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}

async function signOut() {
  try {
    loading.value = true
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}
</script>
