<template>
    <div>
        <p>{{ product.title }}</p>
        <p>{{ product.price }}</p>
        <p>{{ product.id }}</p>
    </div>
</template>

<script setup>
const { id } = useRoute().params;

const uri = 'https://fakestoreapi.com/products/' + id;
const { data: product } = await useFetch(uri, { key: id }); // that key option will re-fetch the component each time its key is different.

definePageMeta({
    layout: 'products'
});
</script>

<style lang="scss" scoped></style>