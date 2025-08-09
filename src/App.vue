<script setup>
import BHeader from './components/BHeader.vue'
</script>

<template>
  <header>
    <BHeader />
  </header>

  <main>
     <router-view></router-view>
  </main>
</template>

<style scoped>
</style>
