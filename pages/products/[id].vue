<template>
    <div>
        <p>Product id is: {{ id }}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eius autem ex deserunt ducimus temporibus
            assumenda maiores minus cum! Libero.</p>
    </div>
</template>

<script setup>
const { id } = useRoute().params;
</script>

<style lang="scss" scoped></style>