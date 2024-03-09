<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card class="pa-5" outlined>
            <v-form ref="form" v-model="valid" @submit.prevent="submitForm" :disabled="loading">
              <v-select
                :items="services"
                v-model="service"
                :rules="[rules.required]"
                label="Service"
                required
              ></v-select>
              <v-text-field
                v-model="name"
                :rules="[rules.required]"
                label="Name"
                required
              ></v-text-field>
              <v-text-field
                v-model="email"
                :rules="[rules.required, rules.email]"
                label="Email"
                required
              ></v-text-field>
              <v-text-field
                v-model="phone"
                :rules="[rules.required, rules.phone]"
                placeholder="(555) 555-5555"
                label="Phone"
                type="tel"
                required
              ></v-text-field>
              <v-textarea
                v-model="message"
                :rules="[rules.required]"
                label="Additional Request Information"
                required
              ></v-textarea>
              <v-btn
                :disabled="!valid"
                color="primary"
                class="mr-4"
                type="submit"
              >
                Get More Information
              </v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
     
    <v-snackbar
      v-model="submissionComplete"
      :timeout="2000"

    >
      Submission complete!

      <template v-slot:actions>
        <v-btn
          color="pink"
          variant="text"
          @click="submissionComplete = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'ContactForm',
    data: () => ({
      valid: false,
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      loading: false,
      services: [
        'Tech Support',
        'Web Development',
        'Mobile App Development',
        'Cloud Computing'
      ],
      rules: {
        required: value => !!value || 'Required.',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i;
          return pattern.test(value) || 'Invalid email.';
        },
        phone: value => {  //make sure the number
          const pattern = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/
          return pattern.test(value) || 'Invalid phone number. Please use the format (555) 555-5555 or 555-555-5555.';
        }
      },
      submissionComplete: false
    }),
    methods: {
      submitForm() {
        if (this.$refs.form.validate()) {
          this.loading = true;
          // Form submission logic here
          let submistURL = 'https://some.url.com/';
          let data = {
            name: this.name,
            email: this.email,
            phone: this.phone,
            service: this.service,
            details: this.message
          };
          fetch(submistURL, {
            method: 'POST',
            body: JSON.stringify(data)
          }).finally(response => {
            this.submissionComplete = true;
          })
          this.resetForm();
        }
      },
      resetForm() {
        this.name = '';
        this.email = '';
        this.subject = '';
        this.message = '';
        this.service = '';
        this.phone = '';
        this.$refs.form.resetValidation();
        this.loading = false;
      }
    }
  };
  </script>
  