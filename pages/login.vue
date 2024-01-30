  <script lang="ts" setup>
    definePageMeta({
      layout: false
    })

    const store = useAuthStore();
    const keyFirebase = useRuntimeConfig().public.keyFirebase;

    const user = ref({
      email: '',
      password: ''
    })

    const login = () => {
      store.login( user.value, keyFirebase );
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

      <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600     focus:outline-none focus:ring focus:border-blue-300">
        Iniciar Sesión
      </button>

      <button @click="$router.push('/')"
        type="button" class="w-full bg-gray-500 mt-4 text-white p-2 rounded-md hover:bg-gray-600     focus:outline-none focus:ring focus:border-blue-300">
        Cancelar
      </button>

    </form>

  </div>
</div>

</template>


<style>

</style>