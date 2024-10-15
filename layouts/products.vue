<template>

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
                    <NuxtLink to="/products" class="btn">Products</NuxtLink>
                </li>
            </ul>
            <NuxtLink to="/" class="font-bold text-xl text-green-600">NuxtStore</NuxtLink>
        </nav>
    </footer>
</template>
