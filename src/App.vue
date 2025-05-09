<script setup>

 import Card from "./components/Card.vue"
 import Button from "./components/Button.vue"

</script>

<template>

  <main class="flex flex-col items-center" >
    <img class="absolute top-0 z-[-2]" src="@/assets/Light.png" alt="``" />
    <img class="fixed top-0 z-[-1]" src="@/assets/BlackBackground.png" alt="``" />

    <section class="container h-screen mx-auto flex flex-col items-center text-center">
      <img class="mt-24" src="@/assets/logo.png" alt="logo" />
      <h1 class="text-6xl leading-[5rem] bg-[linear-gradient(to_left,_#FF00BF_0%,_#0099FF_30%,_white_60%,_white_100%)] bg-clip-text text-transparent">
        Next-Gen Compression <br />
        Smaller Footprint, Bigger Impact
      </h1>

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

    </section>

    <section class="text-center h-screen container mx-auto pt-12 flex flex-col items-center" >
      <h2 class="text-white text-2xl font-semibold">Powering Everyone from Developers to Enterprises</h2>
      <div class="px-5 my-9 flex flex-row justify-between w-2/6" >

        <img src="@/assets/logos/google.svg" alt="" />
        <img src="@/assets/logos/kubernetes.svg" alt="" />
        <img src="@/assets/logos/helm.svg" alt="" />
        <img src="@/assets/logos/aws.svg" alt="" />
        <img src="@/assets/logos/azure.svg" alt="" />

      </div>
      <p class="w-2/6 text-sm text-gray-300" >Deploy on your terms, whether you're coding solo, scaling a team, or running enterprise infrastructure. Compatible with all major cloud platforms.</p>

    </section>

  </main>
</template>

<style scoped>

</style>
