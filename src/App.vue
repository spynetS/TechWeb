<script setup>

 import Card from "./components/Card.vue"
 import Button from "./components/Button.vue"
 import ReviewCard from "./components/ReviewCard.vue"

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
             end: '+=100%',
             scrub: true,
             pin:true,
         }
     })


                          .to(".swipe-in-r", { x: -100, opacity: 0, duration: 2 })
                          .to(".swipe-in-l", { x: 100, opacity: 0, duration: 2 }, "+=0.5")
                          .to(".swipe-in-u", { y: -100, opacity: 0, duration: 2 }, "+=0.5")
                          .to("#section1 img", { opacity: 0, duration: 2 }, "+=0.3")
                          .to("#section1 h1", { x: 300, opacity: 0, duration: 2 }, "+=0.3")
                          .to("#herop", { x: -300, opacity: 0, duration: 2 }, "+=0.3")
                          .to(".fade-out", { opacity: 0, duration: 2 }, "+=0.3")
                          .to("#light", { opacity: 0, duration: 2 }, "+=0.3")

     const section2 = gsap.timeline({
         scrollTrigger: {
             trigger: '#section2',
             start: 'top top',
             end: '+=200%',
             scrub: true,
             pin:true,
         }
     }).from("#section2 h2",{
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
         section2.from(el, {
             opacity:0,
             y:50,
             ease: 'power2.out',
             duration:1,
         })
     })

     section2.from("#whitediv",{
         scale:0.4,
         opacity:0,
         y:100,
         duration:8
     })

     gsap.utils.toArray('#whitediv span').forEach((el,index)=>{
         section2.from(el,{
             opacity:0,
             ease: 'power2.out',
             duration:1
         })
     })

     gsap.utils.toArray('#demo .fade-in').forEach((el,index)=>{
         section2.from(el,{
             opacity:0,
             ease: 'power2.out',
             duration:4
         })
     })

     const section3 = gsap.timeline({
         scrollTrigger: {
             trigger: '#reviews',
             start: 'top top',
             end: '+=100%',
             scrub: true,
             pin:true,

         }
     }).from("#reviews h3",{
         opacity:0,
         x:300,
         duration:1,
     })

     gsap.utils.toArray(".review-card").forEach((el,index)=>{
         section3.from(el,{
             opacity:0,
             y:100,
             duration:1
         })
     });


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

            <p id="herop" class="mt-5 w-3/5 font-light text-lg" >Our Kubernetes-native system goes beyond exact matches; detecting and compressing similar data for unmatched storage efficiency and lightning-fast performance</p>

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

            <div id="whitediv" class=" flex flex-row items-center justify-around mt-12 w-[720px] bg-white rounded-lg h-[150px]" >
                <span class="gradient-text">
                    <p class="text-4xl" >80%</p>
                    <p class="text-lg ">Global Storage <br/> Reduction</p>
                </span>
                <span class="gradient-text">
                    <p class="text-4xl" >70%</p>
                    <p class="text-lg ">Global Water and <br/> Enrgy Savings</p>
                </span>

                <span class="gradient-text">
                    <p class="text-4xl" >65%</p>
                    <p class="text-lg ">Economic <br/> Savings</p>
                </span>
            </div>

            <h3 class="mt-16 mb-5 text-2xl">Simplified Concept</h3>
            <div id="demo" class="grid grid-cols-3 grid-rows-2  w-[900px] h-[200px] ">
                <div class="fade-in mb-5 col-1 flex flex-col justify-between rounded-xl card card-padding py-3 px-4">
                    <p>Message is: {{ message }}</p>
                    <input v-model="message" placeholder="edit me" />
                    <p class="text-xl">Input</p>
                </div>

                <div class="mt-5 col-1 fade-in row-2 flex flex-col justify-between card card-padding">
                    <span></span>
                    <p class="text-gray-300 text-5xl">0%</p>
                    <p class="text-xl">Result</p>
                </div>

                <div class="row-span-2 fade-in flex items-center">
                    <img src="@/assets/Pipes.svg" alt="" />
                </div>


                <div class="col-3 flex fade-in flex-col justify-between row-span-2 card card-padding">
                    <span></span>
                    <p class="text-gray-300 text-5xl">0%</p>
                    <p class="text-xl">Database</p>
                </div>

            </div>
            <p class="text-gray-300 mt-5">This is a simple program to explain how the logic behind our compression method </p>
        </section>

        <div style="height: 200vh;"></div>


        <section id="reviews" class="min-h-screen container mx-auto flex flex-col items-center">
            <h3 class="mt-16 text-3xl">Reviews</h3>

            <div id="review-cards" class="mt-24 flex flex-row text-center justify-center gap-12 w-2/3 " >
                <ReviewCard
                    :review="5"
                    description="We integrated the compression system into our CI pipeline and instantly saw a 60% reduction in artifact storage size. Setup was smooth, and support was surprisingly responsive. Highly recommend for any team drowning in redundant data"
                    name="Lena Matthews"
                    title="DevOps Engineer, Oslo"
                />
                <ReviewCard
                    :review="5"
                    description="“As a solo developer, storage costs add up fast. This tool helped me slash my cloud bill without compromising speed or simplicity. The similarity deduplication is next-level — it caught patterns even I didn’t expect”"
                    name="Carlos Nguyen"
                    title="Independent Developer"
                />
                <ReviewCard
                    :review="4"
                    description="“We process terabytes of client data weekly, and this system handled it with ease. Our AWS usage dropped by 48% in the first month alone. The Kubernetes-native design made deployment and scaling seamless”"
                    name="Fatima Al-Bashir "
                    title="CTO, DataCore Analytics"
                />
            </div>


        </section>
        <div style="height: 100vh;"></div>

    </main>
</template>

<style scoped>
 .gradient-text {
     background: linear-gradient(to right, #FF00BF, #0099FF); /* Pink to Blue */
     -webkit-background-clip: text; /* Applies gradient to the text */
     color: transparent; /* Makes the text color transparent */
     font-weight:300;
     background-size: 100%; /* Ensure it fits the text */
 }
</style>
