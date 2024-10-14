<template>
  <div class="min-h-screen bg-black flex justify-center items-center">
    <div class="bg-gray-900 p-8 rounded-lg w-full max-w-md text-center">
      <!-- Flex Container for Logo and Welcome Message -->
      <div class="flex items-center justify-between border border-gray-700 p-4 rounded-lg mb-6">
        <img src="../assets/aladia_logo.png" alt="Aladia Logo" class="w-15 h-12 mr-4" />
        <div class="text-left">
          <h2 class="text-white text-xl font-bold">Welcome to Aladia,</h2>
          <p class="text-gray-400">Create or access your</p>
          <p class="text-gray-400">account from here</p>
        </div>
      </div>


      <div class="space-y-4">
        <label for="email" class="block text-center text-gray-400 text-sm mb-2">Enter your email</label>
        <input v-model="email" id="email" type="email" placeholder="Email Address"
               class="w-full p-3 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:border-gray-500 transition" />

        <button @click="submitLogin" class="w-full p-3 bg-white text-black rounded font-semibold hover:bg-gray-300 transition">
          Enter
        </button>

        <div class="text-gray-400 text-sm">Or</div>

        <div class="space-y-2">
          <button @click="googleLogin"
                  class="flex justify-center items-center w-full p-3 bg-white text-black rounded font-semibold hover:bg-gray-300 transition">
            <img src="../assets/google.svg" alt="Google" class="w-5 mr-3" /> Continue with Google
          </button>
          <button @click="facebookLogin"
                  class="flex justify-center items-center w-full p-3 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 transition">
            <img src="../assets/facebook.svg" alt="Facebook" class="w-5 mr-3" /> Continue with Facebook
          </button>
          <button @click="appleLogin"
                  class="flex justify-center items-center w-full p-3 bg-black text-white rounded font-semibold hover:bg-gray-800 transition">
            <img src="../assets/apple.svg" alt="Apple" class="w-5 mr-3" /> Continue with Apple
          </button>
        </div>

        <div class="mt-4 text-sm text-gray-400">
          <a href="#" class="hover:underline">Terms & Conditions</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { findUserByEmail, isGoogleUser } from '../store/store';

export default {
  data() {
    return {
      email: '',
    };
  },
  methods: {
    submitLogin() {
      const user = findUserByEmail(this.email);
      if (user) {
        this.$router.push({ path: '/enter-password', query: { email: this.email } });
      } else {
        this.$router.push('/sign-up');
      }
    },
    googleLogin() {
      const user = findUserByEmail(this.email);
      if (user) {
        if (user.google) {
          this.$router.push('/select-google-account');
        } else {
          this.$router.push('/add-new-password');
        }
      } else {
        this.$router.push('/select-google-account');
      }
    },
    facebookLogin() {
      console.log("Login with Facebook");
    },
    appleLogin() {
      console.log("Login with Apple");
    },
  },
};
</script>

<style scoped>
/* Custom styles for alignment and spacing */
.bg-gray-900 {
  background-color: #181818;
}
button {
  transition: all 0.2s ease-in-out;
}
button:hover {
  transform: scale(1.02);
}
</style>
