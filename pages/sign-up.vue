<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex justify-center items-center">
    <div class="bg-gray-800 p-8 rounded-lg w-full max-w-md text-center shadow-lg relative">
      <!-- Back to Login Link -->
      <div class="top-0 left-0 right-0 mb-6 mt-4 flex justify-center">
        <a href="/" class="text-gray-400 hover:text-gray-100 text-sm flex items-center">
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path>
          </svg>
          Back to Login
        </a>
      </div>

      <!-- Profile Container with Logo and Welcome Message -->
      <div class="flex items-center justify-between border border-gray-600 p-4 rounded-lg mb-6 shadow-inner bg-gray-700">
        <img src="../assets/aladia_logo.png" alt="Aladia Logo" class="w-15 h-12 mr-4" />
        <div class="text-left">
          <h2 class="text-white text-2xl font-bold">Welcome to Aladia</h2>
          <p class="text-gray-300">Complete your profile to get started</p>
        </div>
      </div>

      <!-- Form Fields -->
      <div class="space-y-6">
        <div class="relative">
          <input v-model="name" id="name" type="text" required class="input-field transition-colors border border-gray-600 bg-gray-700 text-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500 rounded-lg px-4 py-3 w-full" />
          <label for="name" class="absolute left-4 top-1 text-gray-400 transition-all duration-200 ease-in-out pointer-events-none" :class="{ 'scale-75 -translate-y-6 text-blue-500': name }">First Name</label>
        </div>

        <div class="relative">
          <input v-model="surname" id="surname" type="text" required class="input-field transition-colors border border-gray-600 bg-gray-700 text-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500 rounded-lg px-4 py-3 w-full" />
          <label for="surname" class="absolute left-4 top-1 text-gray-400 transition-all duration-200 ease-in-out pointer-events-none" :class="{ 'scale-75 -translate-y-6 text-blue-500': surname }">Last Name</label>
        </div>

        <div class="relative">
          <input v-model="email" id="email" type="email" required class="input-field transition-colors border border-gray-600 bg-gray-700 text-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500 rounded-lg px-4 py-3 w-full" />
          <label for="email" class="absolute left-4 top-1 text-gray-400 transition-all duration-200 ease-in-out pointer-events-none" :class="{ 'scale-75 -translate-y-6 text-blue-500': email }">Email Address</label>
        </div>

        <div class="relative">
          <input v-model="password" id="password" type="password" required class="input-field transition-colors border border-gray-600 bg-gray-700 text-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500 rounded-lg px-4 py-3 w-full" />
          <label for="password" class="absolute left-4 top-1 text-gray-400 transition-all duration-200 ease-in-out pointer-events-none" :class="{ 'scale-75 -translate-y-6 text-blue-500': password }">Password</label>
        </div>

        <div class="relative">
          <input v-model="confirmPassword" id="confirmPassword" type="password" required class="input-field transition-colors border border-gray-600 bg-gray-700 text-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500 rounded-lg px-4 py-3 w-full" />
          <label for="confirmPassword" class="absolute left-4 top-1 text-gray-400 transition-all duration-200 ease-in-out pointer-events-none" :class="{ 'scale-75 -translate-y-6 text-blue-500': confirmPassword }">Confirm Password</label>
        </div>

        <!-- Terms and Conditions Checkbox -->
        <div class="text-left mt-4 flex items-center">
          <input type="checkbox" v-model="acceptedTerms" id="terms" class="mr-2 h-5 w-5 text-gray-500 bg-gray-800 border-gray-600 rounded" />
          <label for="terms" class="text-gray-300 text-sm">I agree to the 
            <a href="#" class="text-blue-500 hover:underline">Terms & Conditions</a>
          </label>
        </div>

        <!-- Submit Button -->
        <button @click="submitSignup" class="w-full p-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md">
          Create Account
        </button>

        <!-- Error Message -->
        <div v-if="error" class="text-red-500 mt-4">{{ error }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { addUser, findUserByEmail } from '../store/store.js';

export default {
  data() {
    return {
      name: '',
      surname: '',
      email: '',
      password: '',
      confirmPassword: '',
      acceptedTerms: false, // Checkbox state
      error: '',
    };
  },
  methods: {
    submitSignup() {
      // Basic validation
      if (!this.name || !this.surname || !this.email || !this.password || !this.confirmPassword) {
        this.error = 'Please fill in all fields.';
        return;
      }

      // Check if passwords match
      if (this.password !== this.confirmPassword) {
        this.error = 'Passwords do not match.';
        return;
      }

      // Check if terms are accepted
      if (!this.acceptedTerms) {
        this.error = 'You must agree to the Terms & Conditions.';
        return;
      }

      // Check if email is already registered
      if (findUserByEmail(this.email)) {
        this.error = 'Email is already registered.';
        return;
      }

      // Add user to the store and redirect
      addUser(this.email, this.password);
      this.$router.push('/verification-code');
    },
  },
};
</script>

<style scoped>
.input-field {
  transition: border-color 0.2s, box-shadow 0.2s;
}

label {
  transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;
  pointer-events: none; /* Prevents the label from capturing clicks */
}

/* Adjustments for floating label */
.scale-75 {
  transform: scale(0.75);
}

.-translate-y-6 {
  transform: translateY(-1.5rem); /* Adjust this value based on your design */
}

input:focus {
  border-color: #3b82f6; /* Change border color when focused */
}
</style>
