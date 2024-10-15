<template>
    <header>
        <NuxtLink to="/">NuxtStore</NuxtLink>
        <ul>
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
    </header>
    <!-- output the page content here -->
    <div>
        <slot />
    </div>
</template>

<style scoped>
.router-link-exact-active {
    color: rgb(0, 172, 0);
}
</style>
