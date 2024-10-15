<template>
    <div class="max-w-2xl p-4 shadow-md text-center mx-auto mt-[10vh] ">
        <p class="text-7xl">{{ error.statusCode }}</p>
        <hr>
        <p class="my-4">{{ error.statusMessage }}</p>
        <button @click="handleClearError" class="btn">Go back to home</button>
    </div>
</template>

<script setup>
defineProps(['error']);
const handleClearError = () => clearError({ redirect: '/' });
</script>

<style lang="scss" scoped></style>