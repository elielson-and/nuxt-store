<template>
    <ProductDetails :product="product" />
</template>

<script setup>
const { id } = useRoute().params;

const uri = 'https://fakestoreapi.com/products/' + id;
const { data: product } = await useFetch(uri, { key: id }); // that key option will re-fetch the component each time its key is different.

if (!product.value) {
    throw createError({ status: 404, statusMessage: 'Product Not Found', fatal: true }); // 'fatal' will force display error page when its not identified.
}

definePageMeta({
    layout: 'products'
});
</script>

<style lang="scss" scoped></style>