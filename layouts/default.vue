<script setup>
definePageMeta({
    layout: 'default'
});
</script>

<template>
    <header class="shadow-md">
        <nav class="container mx-auto p-4 flex justify-between">

            <NuxtLink to="/" class="font-bold text-xl text-green-600">NuxtStore</NuxtLink>
            <ul class="flex gap-4">
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/products" class="btn">Products</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
    <!-- output the page content here -->
    <div class="container mx-auto p-4 flex justify-between border-t-2">
        <slot />
    </div>
</template>

<style scoped>
.router-link-exact-active {
    color: rgb(0, 172, 0);
}
</style>
