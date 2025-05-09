<script setup>

 import Card from "./components/Card.vue"
 import Button from "./components/Button.vue"

 import { onMounted } from 'vue'
 import gsap from 'gsap'
 import ScrollTrigger from 'gsap/ScrollTrigger'
 import loadAnimations from "@/CommonGsap.js"

 // Register the plugin
 gsap.registerPlugin(ScrollTrigger)

 onMounted(() => {

     //loadAnimations();


     const section1 = gsap.timeline({
         scrollTrigger: {
             trigger: '#section1',
             start: 'top top',
             end: 'bottom top',
             scrub: true,
             pin:true,
             anticipatePin: 1,
             markers: true
         }
     })


    section1.to(".swipe-in-r",{
         opacity:0,
         x:-100,
         duration:1,
     },"<").to(".swipe-in-l",{
         opacity:0,
         x:100,
         duration:1,
     },"<").to(".swipe-in-u",{
         opacity:0,
         y:-100,
         duration:1,
     },"<").to("#section1 img",{opacity:0,duration:2},"<")
        .to("#section1 h1",{
         opacity:0,
         x:300,
         duration:2
     },"<")
     .to("#section1 p",{
         opacity:0,
         x:-300,
         duration:2
     },"<").to(".fade-out",{
         opacity:0,
         duration:1
     },"<").to("#light",{
         opacity:0,
         duration:1,
     },"<")

     section1.from("#section2 h2",{
         opacity:0,
         x:300,
         duration:4,
         ease:"expo.out"

     }).from("#section2 p",{
         opacity:0,
         x:-300,
         duration:4,
         ease:"expo.out"
     },"<")

     // Apply stagger and conditional animations to each logo
     gsap.utils.toArray('.logo img').forEach((el, index) => {
         section1.from(el, {
             opacity:0,
             y:50,
             ease: 'power2.out',
             duration:1,
         })
     })


 })

</script>

<template>

  <main class="flex flex-col items-center" >
    <img id="light" class="absolute top-0 z-[-2]" src="@/assets/Light.png" alt="``" />
    <img class="fixed top-0 z-[-1]" src="@/assets/BlackBackground.png" alt="``" />

    <section id="section1" class="container h-screen mx-auto flex flex-col items-center text-center">
      <img class="mt-24" src="@/assets/logo.png" alt="logo" />
      <h1 class="text-6xl leading-[5rem] bg-[linear-gradient(to_left,_#FF00BF_0%,_#0099FF_30%,_white_60%,_white_100%)] bg-clip-text text-transparent">
        Next-Gen Compression <br />
        Smaller Footprint, Bigger Impact
      </h1>

      <p class="mt-5 w-3/5 font-light text-lg" >Our Kubernetes-native system goes beyond exact matches; detecting and compressing similar data for unmatched storage efficiency and lightning-fast performance</p>

      <div class="fade-out mt-9 flex flex-row justify-center gap-16 items-center">
        <Button >
          Request a Demo
        </Button>
        <a href="" class="font-semibold hover:text-gray-300 duration-300">Learn more</a>
      </div>

      <div class="cards flex flex-row gap-5 mt-16 items-center">
        <Card class="swipe-in-r" >
          Test
        </Card>
        <Card class="swipe-in-u" :primary="true">
          Test
        </Card>
        <Card class="swipe-in-l" >
          Test
        </Card>

      </div>

    </section>

    <section id="section2" class="logo-container text-center h-screen container mx-auto pt-12 flex flex-col items-center" >
      <h2 class="text-white text-2xl font-semibold">Powering Everyone from Developers to Enterprises</h2>
      <div class="logo px-5 my-9 flex flex-row justify-between w-[570px]" >

        <img src="@/assets/logos/google.svg" alt="" />
        <img src="@/assets/logos/kubernetes.svg" alt="" />
        <img src="@/assets/logos/helm.svg" alt="" />
        <img src="@/assets/logos/aws.svg" alt="" />
        <img src="@/assets/logos/azure.svg" alt="" />

      </div>
      <p class="w-[550px] text-sm text-gray-300" >Deploy on your terms, whether you're coding solo, scaling a team, or running enterprise infrastructure. Compatible with all major cloud platforms.</p>

    </section>

  </main>
</template>

<style scoped>

</style>
