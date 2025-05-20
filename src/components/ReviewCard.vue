<script setup>
 defineProps({
     description: String,
     name: String,
     title: String,
     review: Number
 });
</script>

<template>
    <div class="review-card card flex flex-col py-8 px-4 items-center ">
        <p class="text-gray-300" >{{description}}</p>
        <p class="mt-3 font-semibold text-lg">{{name}}</p>
        <p class="text-gray-300 text-xs">{{title}}</p>

        <div class="mt-3 flex flex-row items-between">
            <img
                v-for="n in review"
                :key="n"
                src="@/assets/star.svg"
                alt="star"
            />
            <img
                v-for="n in (5-review)"
                :key="n"
                src="@/assets/gray-star.svg"
                alt="gray-star"
            />
        </div>
    </div>
</template>
