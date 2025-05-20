<script setup>
 defineProps({
     title: String,
     included: String,
     overage: String,
     ideal:String,
     price: String,
     enterprise:Boolean,
 });
</script>

<template>
    <div class="fade-in card flex flex-col gap-2 py-1 px-2  ">
        <div class="flex flex-row justify-between">
            <p class="text-xl font-bold">{{title}}</p>
            <p class="text-sm text-black font-bold bg-white px-3 rounded-xl flex items-center">Get</p>
        </div>
        <div >
            <div class="flex flex-row justify-between mb-1">
                <p class="font-bold">Included Usage:</p>
                <div>
                    <p><span class="text-lg  font-bold">{{included}} </span> / month</p>
                    <p v-if="enterprise" class="">SLA</p>
                    <p v-if="enterprise" class="">Priority support</p>
                </div>

            </div>
            <div class="flex flex-row justify-between">
                <p class="font-bold">Overage (Per GB):</p>
                <p v-if="!enterprise"><span class="text-lg font-bold">${{overage}}</span> / GB</p>
                <p v-else><span class="text-lg font-bold">Custom</span></p>
            </div>

        </div>
        <div :class="enterprise ? 'flex flex-row justify-between items-center' : ''">
            <p class="text-md font-bold mb-1">Ideal For:</p>
            <p class="text-sm font-bold">{{ideal}}</p>
        </div>
        <div class="flex justify-end">
            <p v-if="!enterprise"><span class="text-lg font-bold">${{price}}</span> / month</p>
            <p v-else class="text-lg font-bold">Custom Quote</p>
        </div>
    </div>
</template>
