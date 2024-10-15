<template>
    <header class="shadow-md">
        <nav class="container mx-auto p-4 flex justify-between">
            <NuxtLink to="/" class="font-bold text-xl text-green-600">NuxtStore</NuxtLink>
        </nav>
    </header>

    <div class="container mx-auto p-4 flex justify-between border-b-2">
        <slot />
    </div>

    <footer>
        <nav class="container mx-auto p-4 flex justify-between">
            <ul class="flex gap-4">
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/products">Products</NuxtLink>
                </li>
            </ul>
        </nav>
    </footer>
</template>
<style scoped>
.router-link-exact-active {
    color: rgb(0, 172, 0);
}
</style>
