<script setup>
 defineProps({
     description: String,
     name: String,
     title: String
 });
</script>

<template>
    <div class="review-card card flex flex-col py-8 px-4 items-center ">
        <p class="text-gray-300" >{{description}}</p>
        <p class="mt-3 font-semibold text-lg">{{name}}</p>
        <p class="text-gray-300 text-xs">{{title}}</p>

        <div class="mt-3 flex flex-row items-between">
            <img src="@/assets/star.svg" alt="star" />
            <img src="@/assets/star.svg" alt="star" />
            <img src="@/assets/star.svg" alt="star" />
            <img src="@/assets/star.svg" alt="star" />
            <img src="@/assets/star.svg" alt="star" />

        </div>
    </div>
</template>
