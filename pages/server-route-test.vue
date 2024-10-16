<template>
    <div class="container mx-auto">
        <h2 class="my-8">Data rendering:</h2>
        <div class="bg-green-200">
            <p>{{ data.message }}</p>
        </div>
    </div>
</template>

<script setup>

const { data } = await useFetch('/api/handle?name=Test', {
    method: 'post',
    body: { age: 20 }
});

</script>
