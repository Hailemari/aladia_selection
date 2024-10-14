<template>
  <div class="min-h-screen flex justify-center items-center bg-black">
    <!-- Password Recovery Box -->
    <div class="bg-gray-900 p-8 rounded-lg w-full max-w-sm text-center relative">
      <!-- Back Arrow -->
      <div class="absolute top-2 left-2">
        <button class="text-gray-400 hover:text-white">
          <!-- Replace with an actual icon -->
          ←
        </button>
      </div>

      <!-- Header Section -->
      <h2 class="text-xl font-bold text-white mb-6">Password Recovery</h2>

      <!-- Google Section -->
      <div class="bg-black p-4 rounded-lg border border-red-500 mb-6">
        <div class="flex items-center justify-center space-x-2">
          <img src="../assets/google.svg" alt="Google" class="w-6 h-6" />
          <h3 class="text-white font-semibold">Add a new password</h3>
        </div>
        <p class="text-gray-400 text-sm mt-2">
          Your account uses Google Sign-in. Add a new password.
        </p>
      </div>

      <!-- Recovery Email Section -->
      <div class="mb-4">
        <p class="text-gray-400 text-sm">Recovery link sent to:</p>
        <p class="text-white text-sm">{{ recoveryEmail }}</p>
      </div>

      <!-- Icons Section -->
      <div class="flex justify-center items-center space-x-4 mb-4">
        <!-- Ship Icon (replace with proper image/icon) -->
        <img src="../assets/aladia_logo.png" alt="Ship" class="w-12 h-8" />
        <!-- Arrow Icon -->
        <span class="text-white text-lg">→</span>
        <!-- Lock Icon (replace with proper image/icon) -->
        <img src="../assets/lock.png" alt="Lock" class="w-8 h-8" />
      </div>

      <!-- Send Link Button -->
      <button class="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg">
        Send Link
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recoveryEmail: {
      type: String,
      default: 'example@example.com',
    },
  },
};
</script>

<style scoped>
/* Add any specific styling here */
</style>
