<script setup>
// Import the authentication state and vue-router for redirect
import { isAuthenticated } from '../router'
import { useRouter } from 'vue-router'

const router = useRouter()
// Logout handler
function handleLogout() {
  isAuthenticated.value = false
  router.push({ name: 'Login' })
}
</script>

<template>
  <!-- Using Bootstrap's Header template (starter code) -->
  <!-- https://getbootstrap.com/docs/5.0/examples/headers/ -->
  <div class="container">
    <header class="d-flex justify-content-between py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link :to="{ name: 'Home' }" class="nav-link" active-class="active" aria-current="page">Home (Week 8)</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'About' }" class="nav-link" active-class="active">About</router-link>
        </li>
      </ul>
      <div >
        <button v-if="isAuthenticated" @click="handleLogout" class="btn btn-outline-danger btn-md ms-4">Logout</button>
        <router-link v-else :to="{ name: 'Login' }"  class="btn btn-outline-primary btn-md ms-4">Login</router-link>
      </div>
    </header>
  </div>
</template>

<style scoped>
.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow:
    inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.form-control-dark {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: var(--bs-gray);
}

.form-control-dark:focus {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: #fff;
  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25);
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.text-small {
  font-size: 85%;
}

.dropdown-toggle {
  outline: 0;
}
</style>
