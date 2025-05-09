<script setup>

 import Card from "./components/Card.vue"
 import Button from "./components/Button.vue"

</script>

<template>

  <main class="flex flex-col items-center" >
    <img class="fixed top-0 z-[-2]" src="@/assets/Light.png" alt="``" />
    <img class="fixed top-0 z-[-1]" src="@/assets/BlackBackground.png" alt="``" />

    <div class="mt-24 container mx-auto flex flex-col items-center text-center">
      <img src="@/assets/logo.png" alt="logo" />
      <h1 class="text-6xl leading-20" >Next-Gen Compression <br /> Smaller Footprint, Bigger Impact</h1>
      <p class="mt-5 w-3/5 font-light text-lg" >Our Kubernetes-native system goes beyond exact matches; detecting and compressing similar data for unmatched storage efficiency and lightning-fast performance</p>

      <div class="mt-9 flex flex-row justify-center gap-16 items-center">
        <Button >
          Request a Demo
        </Button>
        <a href="" class="font-semibold hover:text-gray-300 duration-300">Learn more</a>
      </div>

      <div class="flex flex-row gap-5 mt-16 items-center">
        <Card >
          Test
        </Card>
        <Card :primary="true">
          Test
        </Card>
        <Card >
          Test
        </Card>

      </div>

    </div>

  </main>
</template>

<style scoped>

</style>
