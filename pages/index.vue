<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>
    <h1>Index Page</h1>
    <p>Current route: {{ route.path }}</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis facere unde dolorum impedit, reiciendis tempora
      doloremque enim optio eligendi earum fuga maiores ipsum! Dicta laborum praesentium voluptatum, soluta corporis
      doloribus.</p>
  </div>
</template>
