<script setup>
definePageMeta({
    layout: 'products'
});

const { data: products } = await useFetch('https://fakestoreapi.com/products');

</script>
<template>
    <div class="grid grid-cols-4 gap-5">
        <div v-for="p in products">
            <ProductCard :product="p" />
        </div>
    </div>
</template>

<style lang="scss" scoped></style>