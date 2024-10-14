<template>
  <div class="min-h-screen bg-black flex flex-col">
    <header class="bg-gray-900 p-4">
      <div class="container mx-auto flex justify-between">
        <div>
          <h1 class="text-white text-xl font-bold">E-Learning Revolution 2</h1>
        </div>
        <nav>
          <ul class="flex space-x-4">
            <li><a href="#" @click.prevent="navigateTo('search')" class="text-white hover:text-gray-400">Search</a></li>
            <li><a href="#" @click.prevent="navigateTo('profile')" class="text-white hover:text-gray-400">Profile</a></li>
            <li><a href="#" @click.prevent="navigateTo('notifications')" class="text-white hover:text-gray-400">Notifications</a></li>
            <li><a href="#" @click.prevent="navigateTo('help')" class="text-white hover:text-gray-400">Help</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main class="flex-grow p-8">
      <div class="container mx-auto">
        <h2 class="text-white text-3xl font-bold mb-4">Welcome to Aladia</h2>
        <p class="text-gray-400">We have worked to digitize our school, and give the whole world the opportunity to do it with a new study platform designed for teachers.</p>
        <button @click="goToMarketplace" class="bg-white text-black px-4 py-2 rounded-full mt-4 hover:bg-gray-300">Go to Marketplace</button>
      </div>
    </main>

    <footer class="bg-gray-900 p-4">
      <div class="container mx-auto text-center text-gray-400">
        &copy; 2023 Aladia
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    goToMarketplace() {
      this.$router.push('/marketplace');
    },
    navigateTo(section) {
      // Handle navigation to different sections
      console.log(`Navigating to ${section}`);
      // Implement actual navigation logic here
    },
  },
};
</script>