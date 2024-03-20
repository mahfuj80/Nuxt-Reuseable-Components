<script setup lang="js">
const items = [
  "/MotorImage/CarouselImage/Bike1.webp",
  "/MotorImage/CarouselImage/Bike2.webp",
  "/MotorImage/CarouselImage/Bike3.webp",
  "/MotorImage/CarouselImage/Bike4.webp",
  "/MotorImage/CarouselImage/Bike5.webp",
  "/MotorImage/CarouselImage/Bike6.webp",

];

const carouselRef = ref();
const counter = ref(1);



onMounted(() => {
  setInterval(() => {
    const button = document.querySelector(`button[aria-label="set slide ${counter.value}"]`);
    if (button) {
      if(counter.value > 5){
        counter.value = 0;
      }
      button.click();
      counter.value++
    }
  }, 3000);
});
</script>

<template>
  <UCarousel
    :ref="carouselRef"
    v-slot="{ item }"
    :items="items"
    :ui="{
      item: 'basis-full',
      container: 'h-96 sm:h-[400px] md:h-[600px] lg:h-[800px] xl:h-[900px]',
      indicators: {
        wrapper:
          'absolute flex items-center justify-center gap-3 bottom-4 inset-x-0',
      },
    }"
    class="rounded-lg overflow-hidden"
    indicators
  >
    <NuxtImg :src="item" class="w-full" draggable="false" />
  </UCarousel>
</template>
