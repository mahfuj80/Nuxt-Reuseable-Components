<script lang="" setup>
const items = [
  {
    id: 1,
    name: "John Smith",
    title: "Fashion Designer",
    rating: 5,
  },
  {
    id: 2,
    name: "John Smith",
    title: "Fashion Designer",
    rating: 3,
  },
  {
    id: 3,
    name: "John Smith",
    title: "Fashion Designer",
    rating: 4,
  },
  {
    id: 4,
    name: "John Smith",
    title: "Fashion Designer",
    rating: 5,
  },
  {
    id: 5,
    name: "John Smith",
    title: "Fashion Designer",
    rating: 4,
  },
  {
    id: 6,
    name: "John Smith",
    title: "Fashion Designer",
    rating: 3,
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
    <!-- Rating Star -->
    <div v-for="item in items" :key="item.id">
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
    </div>
  </UContainer>
</template>
