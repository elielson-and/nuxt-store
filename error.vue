<template>
    <div class="container p-4 shadow-md text-center mx-auto ">
        <p class="text-7xl">{{ error.statusCode }}</p>
        <hr>
        <p class="mb-4">{{ error.statusMessage }}</p>
        <NuxtLink to="/" class="text-blue-500">Go back to home</NuxtLink>
    </div>
</template>

<script setup>
defineProps(['error']);
</script>

<style lang="scss" scoped></style>