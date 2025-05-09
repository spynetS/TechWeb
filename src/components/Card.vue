<script setup>
 defineProps({
	 primary: Boolean
 })
</script>


<template>
	<div :class="primary ? 'bg-[radial-gradient(circle_at_center,_#ff00bf45,_#000000)] w-[300px] h-[370px]' : 'w-[280px] h-[350px]'" class="small-outline py-3 px-4 bg-gradient-to-t from-black to-[#FFFFFF0A] rounded-xl flex flex-col items-betwenn">

		<div class="flex flex-row justify-between">
			<p>IDK</p>
			<p>IDK</p>
		</div>
		<div class="h-full">
		</div>
		<div class="text-center">
			<h3 class="font-semibold text-md">Similarity-Aware Deduplication for Maximum Space Savings</h3>
			<p class="text-xs leading-5 text-gray-300">Reduces storage usage by up to 90% even on semi-redundant datasets like logs, backups, and media; dramatically cutting cloud storage costs.</p>
		</div>
	</div>


</template>
