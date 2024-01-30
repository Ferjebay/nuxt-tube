  <script lang="ts" setup>
    definePageMeta({
      layout: false
    })

    const store = useAuthStore();

    const user = ref({
      email: '',
      password: ''
    })

    const login = () => {
      store.login( user.value );
    }

  </script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
  <div class="bg-white p-8 shadow-md rounded-md w-full max-w-md">
    <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Firebase_Logo.png" alt="Google Logo" class="mx-auto mb-8">

    <form @submit.prevent="login">
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Correo electrónico</label>
        <input v-model="user.email"
          type="email" id="email" class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300">
      </div>

      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-700">Contraseña</label>
        <input v-model="user.password"
          type="password" id="password" class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300">
      </div>

      <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Iniciar Sesión</button>
    </form>

    <!-- <div class="mt-4 flex items-center justify-between">
      <hr class="flex-grow border-t">
      <span class="mx-2 text-gray-500">o</span>
      <hr class="flex-grow border-t">
    </div>

    <div class="mt-4">
      <button class="w-full bg-white text-gray-700 p-2 border rounded-md hover:bg-gray-100 focus:outline-none focus:ring focus:border-blue-300">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png" alt="Google Icon" class="inline-block w-5 h-5 mr-2">
        Iniciar Sesión con Google
      </button>
    </div> -->

  </div>
</div>

</template>


<style>

</style>