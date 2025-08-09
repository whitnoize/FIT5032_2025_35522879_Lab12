<template>
  <div class="container mt-5">
    <div class="alert alert-danger">
      <h3>Access Denied</h3>
      <p>You are not logged in and cannot view this page.</p>
    </div>
    <router-link :to="{ name: 'Login' }"  class="btn btn-secondary">Go to Login</router-link>
  </div>
</template>