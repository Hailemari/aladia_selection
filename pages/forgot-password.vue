<template>
  <div class="min-h-screen bg-black flex justify-center items-center">
    <div class="bg-gray-900 p-8 rounded-lg w-full max-w-md text-center relative">
      <!-- Back to Log in Link at the Top -->
      <div class="absolute top-0 left-0 w-full text-center mt-4">
        <a href="#" @click.prevent="goToLogin" class="text-gray-400 hover:text-white">
          Back to Log in
        </a>
      </div>

      <!-- Logo and Recovery Message with Border -->
      <div class="flex items-center justify-between mb-6 mt-12 border border-gray-700 p-4 rounded-lg">
        <img src="../assets/aladia_logo.png" alt="Aladia Logo" class="w-15 h-12 mr-4" />
        <div class="text-left">
          <h2 class="text-white text-xl font-bold">Password Recovery</h2>
          <p class="text-gray-400">Recover your password</p>
          <p class="text-gray-400">through your</p>
          <p class="text-gray-400">registration email.</p>
        </div>
      </div>

      <div class="space-y-4">
        <p class="text-gray-400">A recovery email will be sent to this address. Be sure that it is correct before submitting.</p>
        <label for="recoveryEmail" class="block text-center text-gray-400 text-sm mb-2">Recovery Email</label>
        <input
          v-model="recoveryEmail"
          id="recoveryEmail"
          type="email"
          placeholder="Enter your recovery email"
          class="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:border-gray-500 transition"
        />

        <button @click="submitRecoveryEmail" class="w-full p-3 bg-white text-black rounded font-semibold hover:bg-gray-300 transition">
          Enter
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recoveryEmail: '',
    };
  },
  methods: {
    submitRecoveryEmail() {
      // Submit recovery email to backend
      console.log('Recovery email:', {
        recoveryEmail: this.recoveryEmail,
      });
      // Here you can implement the logic to send the recovery email to your backend.
    },
    goToLogin() {
      this.$router.push('/'); // Redirect to home page
    },
  },
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
