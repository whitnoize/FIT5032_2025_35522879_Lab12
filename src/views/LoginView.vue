<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { isAuthenticated } from '../router'

const username = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

// Handle login form submission and credential check
function handleLogin() {
  // Hardcoded valid credentials
  if (username.value === 'lijiawen' && password.value === 'FIT5032@pwd') {
    isAuthenticated.value = true
    router.push({ name: 'About' })
  } else {
    error.value = 'Invalid username or password'
  }
}
</script>

<template>
  <div class="container mt-5">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div class="mb-3">
        <label>Username</label>
        <input v-model="username" class="form-control" />
      </div>
      <div class="mb-3">
        <label>Password</label>
        <input v-model="password" type="password" class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
      <p v-if="error" class="text-danger mt-2">{{ error }}</p>
    </form>
  </div>
</template>