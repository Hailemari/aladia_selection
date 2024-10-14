<template>
  <div class="min-h-screen bg-black flex justify-center items-center px-4 sm:px-0">
    <div class="bg-gray-900 p-6 sm:p-10 rounded-lg w-full max-w-lg text-center shadow-xl">
      <!-- Title and Subtitle -->
      <h2 class="text-white text-2xl sm:text-3xl font-bold mb-2">Choose an Account</h2>
      <p class="text-gray-400 mb-6 sm:mb-8">To continue to aladia.io</p>

      <!-- Accounts List -->
      <ul class="space-y-4 sm:space-y-6">
        <li v-for="account in accounts" :key="account.email" class="flex items-center justify-between bg-gray-800 p-3 sm:p-4 rounded-lg transition transform hover:scale-105 shadow-sm">
          <div class="flex items-center">
            <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-400 mr-3 sm:mr-4"></div>
            <div class="text-left">
              <p class="text-white font-medium text-base sm:text-lg">{{ account.name }}</p>
              <p class="text-gray-400 text-xs sm:text-sm">{{ account.email }}</p>
            </div>
          </div>
          <button
            @click="selectAccount(account)"
            class="bg-blue-500 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-full hover:bg-blue-400 transition"
          >
            Select
          </button>
        </li>
      </ul>

      <!-- Use Another Account Button -->
      <button
        @click="useAnotherAccount"
        class="mt-6 sm:mt-8 w-full p-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-400 transition shadow-lg"
      >
        Use another account
      </button>
    </div>
  </div>
</template>

<script>
import { findUserByEmail, isGoogleUser } from '../store/store.js';

export default {
  data() {
    return {
      accounts: [
        { name: 'Hailemariam', email: 'haile19@gmail.com' },
        { name: 'Hailemariam', email: 'haile20@a2sv.org' },
        // Add more accounts as needed
      ],
    };
  },
  methods: {
    selectAccount(account) {
      const user = findUserByEmail(account.email);
      if (user) {
        // If the user is registered with an email/password
        if (!isGoogleUser(account.email)) {
          this.$router.push('/add-new-password'); // Redirect to add new password
        } else {
          this.$router.push('/user-dashboard'); // Redirect to dashboard if Google user
        }
      } else {
        this.$router.push('/user-dashboard'); // Redirect to sign-up for unregistered users
      }
    },
    useAnotherAccount() {
      this.$router.push('/sign-up'); // Allow use of another account
    },
  },
};
</script>