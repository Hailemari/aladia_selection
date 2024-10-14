<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-900">
      <div class="max-w-md w-full bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 class="text-white text-2xl font-bold text-center mb-4">{{ userName }}</h1>
        <p class="text-gray-300 text-center mb-6">Thanks for joining Aladia.</p>
        <p class="text-gray-300 text-center mb-6">Please enter below the 6-digit code we sent you through your registration e-mail:</p>
  
        <div class="flex justify-center gap-2 mb-6">
          <input
            v-for="n in 6"
            :key="n"
            type="text"
            maxlength="1"
            class="w-12 h-12 text-center text-2xl font-bold text-white bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
  
        <div class="text-center mb-4">
          <a href="#" class="text-indigo-500 hover:underline">You didn't receive any mail?</a>
        </div>
  
        <button
          @click="submitCode"
          class="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150"
        >
          Enter
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userName: 'Hello there',
      };
    },
    methods: {
      submitCode() {
        // Add logic to handle the code submission
        alert('Code submitted');
      },
    },
  };
</script>