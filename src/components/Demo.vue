<script setup>
 import { ref } from 'vue'

 const message = ref("")
</script>

<template>
	<div id="demo" class="grid grid-cols-3 grid-rows-2  w-[900px] h-[250px] ">
        <div class="fade-in mb-5 col-1 flex flex-col justify-between rounded-xl card card-padding py-3 px-4">
			<div></div>
			<input v-model="message" class="border-b-1 border-gray-300" placeholder="edit me" />
            <p class="text-lg">Input</p>
        </div>

        <div class="mt-5 col-1 fade-in row-2 flex flex-col justify-between card card-padding">
            <span></span>
            <p class="text-gray-300 text-4xl">0%</p>
            <p class="text-lg">Result</p>
        </div>

        <div class="row-span-2 fade-in flex items-center">
            <img src="@/assets/Pipes.svg" alt="" />
        </div>


        <div class="col-3 flex fade-in flex-col justify-between row-span-2 card card-padding">
            <span></span>

            <p class="text-lg">Database</p>
        </div>
    </div>

</template>
