<script setup>
const { product } = defineProps(['product']);
const isBought = ref();

const handleBuy = (() => {
    isBought.value = !isBought.value;
});
</script>

<template>
    <div class="card">
        <div class="grid grid-cols-2 gap-10">
            <div class="p-7">
                <img :src="product.image" class="mx-auto my-7">
            </div>

            <div class="p-7">
                <h2 class="text-4xl my-7">{{ product.title }}</h2>
                <p class="text-xl my-7">Price - $ {{ product.price }}</p>
                <h3 class="text-lg font-bold text-green-500">Product description:</h3>
                <p class="mb-7">{{ product.description }}</p>

                <button class="btn text-xl" @click="handleBuy">Buy Now</button>
                <p v-if="isBought" class="text-green-600 mt-4">You did it!</p>
            </div>

        </div>

    </div>
</template>

<style scoped>
img {
    max-width: 400px;
}
</style>