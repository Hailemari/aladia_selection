<template>
  <div class="min-h-screen bg-black flex justify-center items-center">
    <div class="bg-gray-900 p-8 rounded-lg w-full max-w-md h-[500px] relative text-center">
      <!-- Back to Log in Link at the Top -->
      <div class="absolute top-0 left-0 w-full text-center mt-4">
        <a href="#" @click.prevent="goToLogin" class="text-gray-400 hover:text-white">
          Back to Log in
        </a>
      </div>

      <!-- Logo and Welcome Message with Border -->
      <div class="flex items-center justify-between mb-6 mt-12 border border-gray-700 p-4 rounded-lg">
        <img src="../assets/aladia_logo.png" alt="Aladia Logo" class="w-15 h-12 mr-4" />
        <div class="text-left">
          <h2 class="text-white text-xl font-bold">Welcome to Aladia,</h2>
          <p class="text-gray-400">Enter your password</p>
        </div>
      </div>

      <!-- Password Input and Enter Button -->
      <div class="space-y-4">
        <label for="password" class="block text-center text-gray-400 text-sm mb-2">Enter your password</label>
        <div class="relative">
          <input
            v-model="password"
            id="password"
            :type="passwordVisible ? 'text' : 'password'"
            placeholder="Password"
            class="w-full p-3 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:border-gray-500 transition"
          />
          <button @click="togglePasswordVisibility" class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
            <img src="../assets/eye-icon-closed.png" alt="Show/Hide Password" class="w-5 h-5" />
          </button>
        </div>

        <!-- Forgot Password Link -->
        <div class="text-right">
          <a href="#" @click.prevent="forgotPassword" class="text-gray-400 hover:text-white text-sm">Forgot Password?</a>
        </div>

        <!-- Enter Button -->
        <button @click="submitPassword" class="w-full p-3 bg-white text-black rounded font-semibold hover:bg-gray-300 transition">
          Enter
        </button>

        <!-- Error Message -->
        <div v-if="error" class="text-red-500 mt-4">{{ error }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { findUserByEmail } from '../store/store.js';

export default {
  data() {
    return {
      password: '',
      error: '',
      passwordVisible: false, // to toggle password visibility
    };
  },
  methods: {
    submitPassword() {
      const email = this.$route.query.email;
      const user = findUserByEmail(email);
      if (user && user.password === this.password) {
        this.$router.push('/user-dashboard');
      } else {
        this.error = 'Invalid credentials';
      }
    },
    goToLogin() {
      this.$router.push('/');
    },
    forgotPassword() {
      this.$router.push('/forgot-password');
    },
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    }
  }
};
</script>

<style scoped>
/* Custom styles */
button {
  transition: all 0.2s ease-in-out;
}
button:hover {
  transform: scale(1.02);
}
</style>
