import type { UContainer } from "#build/components";

<script lang="" setup>
const items = [
  {
    id: 1,
    name: "John Smith",
    title: "Fashion Designer",
    image: "https://picsum.photos/600/600?random=1",
    rating: 5,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, ipsa, voluptate ipsam ipsum tenetur harum voluptatem, cumque quaerat libero incidunt provident maxime quos! Asperiores, rerum pariatur. Debitis nam exercitationem nobis? Molestias consequatur non illum?",
  },
  {
    id: 2,
    name: "John Smith",
    title: "Fashion Designer",
    image: "https://picsum.photos/600/600?random=2",
    rating: 3,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, ipsa, voluptate ipsam ipsum tenetur harum voluptatem, cumque quaerat libero incidunt provident maxime quos! Asperiores, rerum pariatur. Debitis nam exercitationem nobis? Molestias consequatur non illum?",
  },
  {
    id: 3,
    name: "John Smith",
    title: "Fashion Designer",
    image: "https://picsum.photos/600/600?random=3",
    rating: 4,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, ipsa, voluptate ipsam ipsum tenetur harum voluptatem, cumque quaerat libero incidunt provident maxime quos! Asperiores, rerum pariatur. Debitis nam exercitationem nobis? Molestias consequatur non illum?",
  },
  {
    id: 4,
    name: "John Smith",
    title: "Fashion Designer",
    image: "https://picsum.photos/600/600?random=4",
    rating: 5,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, ipsa, voluptate ipsam ipsum tenetur harum voluptatem, cumque quaerat libero incidunt provident maxime quos! Asperiores, rerum pariatur. Debitis nam exercitationem nobis? Molestias consequatur non illum?",
  },
  {
    id: 5,
    name: "John Smith",
    title: "Fashion Designer",
    image: "https://picsum.photos/600/600?random=5",
    rating: 4,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, ipsa, voluptate ipsam ipsum tenetur harum voluptatem, cumque quaerat libero incidunt provident maxime quos! Asperiores, rerum pariatur. Debitis nam exercitationem nobis? Molestias consequatur non illum?",
  },
  {
    id: 6,
    name: "John Smith",
    title: "Fashion Designer",
    image: "https://picsum.photos/600/600?random=6",
    rating: 3,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, ipsa, voluptate ipsam ipsum tenetur harum voluptatem, cumque quaerat libero incidunt provident maxime quos! Asperiores, rerum pariatur. Debitis nam exercitationem nobis? Molestias consequatur non illum?",
  },
];

function roundToNearestHalf(number) {
  return Math.round(number * 2) / 2;
}

// Rating Star Style
const ratingStar = (rate) => {
  const roundedNum = roundToNearestHalf(rate);
  return Array.from({ length: 5 }, (elem, index) => {
    const number = index + 0.5;
    if (roundedNum >= index + 1) {
      return "full";
    } else if (roundedNum >= number) {
      return "half";
    } else {
      return "empty";
    }
  });
};
</script>

<template>
  <UContainer>
    <!-- Heading -->
    <p class="font-bold text-center text-2xl md:text-4xl mt-10 md:mt-14">
      Customer Review
    </p>
    <div class="mt-10">
      <UCarousel
        v-slot="{ item }"
        :items="items"
        :ui="{
          item: 'basis-full md:basis-1/2 lg:basis-1/3',
          container: 'gap-6',
        }"
        :prev-button="{
          color: 'gray',
          icon: 'i-heroicons-arrow-left-20-solid',
          class: 'lg:-left-12',
        }"
        :next-button="{
          color: 'gray',
          icon: 'i-heroicons-arrow-right-20-solid',
          class: 'lg:-right-12',
        }"
        arrows
      >
        <div
          class="w-full flex flex-col justify-center items-center gap-4 bg-gray-100 rounded-lg py-8 px-4"
          draggable="false"
        >
          <!-- Avatar -->
          <UAvatar size="3xl" :src="item.image" alt="Avatar" />

          <!-- Description -->
          <p class="text-center px-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque,
            ipsa, voluptate ipsam ipsum tenetur harum voluptatem, cumque quaerat
            libero incidunt provident maxime quos! Asperiores, rerum pariatur.
            Debitis nam exercitationem nobis? Molestias consequatur non illum?
          </p>

          <!-- Rating Star -->
          <div class="flex my-1 items-center">
            <span
              v-for="(star, index) in ratingStar(item?.rating)"
              :key="index"
              class="text-orange-400"
            >
              <template v-if="star === 'full'">
                <UIcon name="i-line-md-star-filled" dynamic />
              </template>
              <template v-else-if="star === 'half'">
                <UIcon name="i-line-md-star-half-filled" dynamic />
              </template>
              <template v-else>
                <UIcon name="i-line-md-star-alt" dynamic />
              </template>
            </span>
            <p class="ml-1">({{ item?.rating }})</p>
          </div>

          <!-- Name and title -->
          <p class="text-center px-2">
            <span class="font-bold">{{ item?.name }}</span>
            <br />
            <span class="text-gray-500">{{ item?.title }}</span>
          </p>
        </div>
      </UCarousel>
    </div>
  </UContainer>
</template>
