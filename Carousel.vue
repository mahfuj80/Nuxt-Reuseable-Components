<script setup lang="">
import { ref, onMounted } from "vue";

const items = [
  "https://picsum.photos/1920/1080?random=1",
  "https://picsum.photos/1920/1080?random=2",
  "https://picsum.photos/1920/1080?random=3",
  "https://picsum.photos/1920/1080?random=4",
  "https://picsum.photos/1920/1080?random=5",
  "https://picsum.photos/1920/1080?random=6",
];

const carouselRef = ref();
const counter = ref(1);

onMounted(() => {
  setInterval(() => {
    if (counter.value > items.length) {
      counter.value = 1; // Reset the counter if it exceeds the length of items array
    }
    const button = document.querySelector(
      `button[aria-label="set slide ${counter.value}"]`
    );
    if (button) {
      button.addEventListener("click", handleClick);
      button.click();
    }
    function handleClick(event) {
      counter.value++;
      const ariaLabelValue = event.target.getAttribute("aria-label");
      const lastElement = parseInt(ariaLabelValue.split(" ").pop(), 10); // Convert the last element to an integer
      counter.value = lastElement + 1;
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
