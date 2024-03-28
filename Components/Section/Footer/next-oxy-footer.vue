<script lang="" setup>
const toggleStatus = ref("");

function toggleLink(title) {
  if (toggleStatus.value === title) {
    toggleStatus.value = "";
  } else {
    toggleStatus.value = title;
  }
  console.log(this.nextElementSibling);
}

watch(toggleStatus, () => {
  console.log("State Changed");
});

const links = [
  {
    title: "Contact Us",
  },
  {
    title: "Services",
    items: [
      {
        label: "Modification",
        to: "/",
      },
      {
        label: "Bike Servicing",
        to: "/",
      },
      {
        label: "Spare Parts",
        to: "/",
      },
      {
        label: "Bikes",
        to: "/",
      },
    ],
  },
  {
    title: "Information",
    items: [
      {
        label: "About Us",
        to: "/",
      },

      {
        label: "Privacy Policy",
        to: "/",
      },
      {
        label: "Terms & Conditions",
        to: "/",
      },
    ],
  },
  {
    title: "My Account",
    items: [
      {
        label: "Cart",
        to: "/",
      },
      {
        label: "Wishlist",
        to: "/",
      },
      {
        label: "Categories",
        to: "/",
      },
      {
        label: "All Products",
        to: "/",
      },
    ],
  },
];

const items = [
  {
    label: "Contact Us",
    "open-icon": "i-heroicons-plus",
    "close-icon": "i-heroicons-minus",
    slot: "contact",
  },
  {
    label: "Services",

    slot: "services",
  },
  {
    label: "Information",

    slot: "information",
  },
  {
    label: "My Account",

    slot: "my-account",
  },
];
</script>

<template>
  <div class="bg-[#222]">
    <UContainer>
      <div
        class="hidden sm:grid gap-6 md:grid-cols-2 xl:justify-between xl:gap-0 py-10 lg:py-16 xl:grid-cols-4"
      >
        <div v-for="(link, index) in links" :key="index">
          <h3
            class="text-lg lg:text-xl text-white mb-5 font-bold hidden sm:block after:content-[''] after:w-10 after:h-0.5 after:bg-green-500 after:block after:mt-1.5"
          >
            {{ link.title }}
          </h3>

          <div
            id="contact"
            class="text-white pr-2"
            aria-expanded="true"
            v-if="link.title === 'Contact Us'"
          >
            <ul class="list-unstyled f-left text-white">
              <li class="flex leading-7 text-white">
                <UIcon
                  class="mr-3.5 min-w-6 mt-1.5"
                  name="i-heroicons-map-pin-solid"
                />
                42 Dream House, Dreammy street, 7131 Dreamville, USA
              </li>
              <li class="flex items-center leading-7">
                <UIcon
                  class="mr-3.5 min-w-6"
                  name="i-heroicons-envelope-solid"
                />company@gmail.com
              </li>
              <li class="flex items-center leading-7">
                <UIcon class="mr-3.5 min-w-6" name="i-heroicons-phone-solid" />
                456-456-4512
              </li>
              <li class="flex items-center leading-7">
                <UIcon
                  name="i-heroicons-paper-airplane-solid"
                  class="transform -rotate-45 mr-3.5 min-w-6"
                />
                Dream City, USA
              </li>
            </ul>
            <div class="footsocial text-white mt-4">
              <ul class="socials flex gap-1.5">
                <li
                  class="facebook border bg-[#333] hover:bg-slate-900 px-1.5 py-[1px] rounded-md overflow-hidden"
                >
                  <a href="#" target="_blank" class="leading-tight"
                    ><UIcon
                      name="i-fa6-brands-facebook-f"
                      dynamic
                      class="text-sm"
                  /></a>
                </li>
                <li
                  class="twitter border bg-[#333] hover:bg-slate-900 px-1.5 py-[1px] rounded-md overflow-hidden"
                >
                  <a href="#" target="_blank" class="leading-tight"
                    ><UIcon name="i-ri-twitter-x-fill" dynamic class="text-sm"
                  /></a>
                </li>
                <li
                  class="google_plus border bg-[#333] hover:bg-slate-900 px-1.5 py-[1px] rounded-md overflow-hidden"
                >
                  <a href="#" target="_blank" class="leading-tight"
                    ><UIcon name="i-f7-logo-googleplus" dynamic class="text-sm"
                  /></a>
                </li>
                <li
                  class="pinterest border bg-[#333] hover:bg-slate-900 px-1.5 py-[1px] rounded-md overflow-hidden"
                >
                  <a href="#" target="_blank" class="leading-tight"
                    ><UIcon name="i-bi-pinterest" dynamic class="text-sm"
                  /></a>
                </li>
              </ul>
            </div>
          </div>
          <ClientOnly v-else>
            <div
              class="flex justify-between items-center sm:hidden cursor-pointer"
              @click="toggleLink(link.title)"
            >
              <h3 class="text-lg lg:text-xl text-white font-bold">
                {{ link.title }}
              </h3>
              <UIcon
                v-if="toggleStatus === link.title"
                name="i-heroicons-minus-solid"
                class="text-white text-xl"
              />
              <UIcon
                v-else
                name="i-heroicons-plus-solid"
                class="text-white text-xl"
              />
            </div>
          </ClientOnly>
          <UVerticalNavigation
            :links="link.items"
            :ui="{
              base: 'before:hidden text-white text-sm lg:text-base font-normal hover:text-green-500',
            }"
            class="w-full !bg-transparent"
            :class="
              toggleStatus === link.title ? 'block sm:block' : 'hidden sm:block'
            "
          />
        </div>
      </div>
      <ClientOnly>
        <UAccordion
          :items="items"
          class="py-4 lg:py-16 sm:hidden font-openSans"
          :ui="{
            item: {
              base: 'pt-0 pb-0',
            },
            default: {
              openIcon: 'i-heroicons-chevron-down-20-solid',
              closeIcon: '',
              class: 'mb-1.5 w-full',
              variant: 'soft',
            },
          }"
        >
          <template #default="{ item, open }">
            <UButton
              color="black"
              variant="ghost"
              class="text-white border-gray-200 dark:border-gray-700 font-bold uppercase"
              :ui="{ rounded: 'rounded-none', padding: { sm: 'px-1' } }"
            >
              {{ item.label }}
              <template #trailing>
                <UIcon
                  v-if="open"
                  name="i-heroicons-minus"
                  dynamic
                  class="w-5 h-5 ms-auto transform transition-transform duration-200"
                />
                <UIcon
                  v-else
                  name="i-heroicons-plus"
                  dynamic
                  class="w-5 h-5 ms-auto transform transition-transform duration-200"
                />
              </template>
            </UButton>
          </template>

          <template #contact>
            <div id="contact" class="text-white pr-2" aria-expanded="true">
              <ul class="list-unstyled f-left text-white">
                <li class="flex leading-7 text-white">
                  <UIcon
                    class="mr-3.5 min-w-6 mt-1.5"
                    name="i-heroicons-map-pin-solid"
                  />
                  42 Dream House, Dreammy street, 7131 Dreamville, USA
                </li>
                <li class="flex items-center leading-7">
                  <UIcon
                    class="mr-3.5 min-w-6"
                    name="i-heroicons-envelope-solid"
                  />company@gmail.com
                </li>
                <li class="flex items-center leading-7">
                  <UIcon
                    class="mr-3.5 min-w-6"
                    name="i-heroicons-phone-solid"
                  />
                  456-456-4512
                </li>
                <li class="flex items-center leading-7">
                  <UIcon
                    name="i-heroicons-paper-airplane-solid"
                    class="transform -rotate-45 mr-3.5 min-w-6"
                  />
                  Dream City, USA
                </li>
              </ul>
              <div class="footsocial text-white mt-4">
                <ul class="socials flex gap-1.5">
                  <li
                    class="facebook border bg-[#333] hover:bg-slate-900 px-1.5 py-[1px] rounded-md overflow-hidden"
                  >
                    <a href="#" target="_blank" class="leading-tight"
                      ><UIcon
                        name="i-fa6-brands-facebook-f"
                        dynamic
                        class="text-sm"
                    /></a>
                  </li>
                  <li
                    class="twitter border bg-[#333] hover:bg-slate-900 px-1.5 py-[1px] rounded-md overflow-hidden"
                  >
                    <a href="#" target="_blank" class="leading-tight"
                      ><UIcon
                        name="i-ri-twitter-x-fill"
                        dynamic
                        class="text-sm"
                    /></a>
                  </li>
                  <li
                    class="google_plus border bg-[#333] hover:bg-slate-900 px-1.5 py-[1px] rounded-md overflow-hidden"
                  >
                    <a href="#" target="_blank" class="leading-tight"
                      ><UIcon
                        name="i-f7-logo-googleplus"
                        dynamic
                        class="text-sm"
                    /></a>
                  </li>
                  <li
                    class="pinterest border bg-[#333] hover:bg-slate-900 px-1.5 py-[1px] rounded-md overflow-hidden"
                  >
                    <a href="#" target="_blank" class="leading-tight"
                      ><UIcon name="i-bi-pinterest" dynamic class="text-sm"
                    /></a>
                  </li>
                </ul>
              </div>
            </div>
          </template>
          <template #services>
            <UVerticalNavigation
              :links="links[1].items"
              :ui="{
                base: 'before:hidden text-white text-sm lg:text-base font-normal hover:text-green-500',
                inactive: 'hover:text-green-300',
              }"
              class="w-full !bg-transparent"
            />
          </template>
          <template #information>
            <UVerticalNavigation
              :links="links[2].items"
              :ui="{
                base: 'before:hidden text-white text-sm lg:text-base font-normal hover:text-green-500',
                inactive: 'hover:text-green-300',
              }"
              class="w-full !bg-transparent"
            />
          </template>
          <template #my-account>
            <UVerticalNavigation
              :links="links[3].items"
              :ui="{
                base: 'before:hidden text-white text-sm lg:text-base font-normal hover:text-green-500',
                inactive: 'hover:text-green-300',
              }"
              class="w-full !bg-transparent"
            />
          </template>
        </UAccordion>
      </ClientOnly>
      <div
        class="flex flex-col sm:flex-row justify-between gap-5 lg:gap-12 sm:items-center px-[7px]"
      >
        <div class="sm:w-1/2 flex gap-12">
          <h4 class="text-white font-bold hidden md:block">Download Our App</h4>
          <ul class="flex gap-2 justify-center flex-1">
            <li class="w-[90px] md:w-[117px]">
              <NuxtImg
                src="/apple.png"
                class="mx-auto w-[90px] md:w-[117px]"
                quality="100"
                format="webp"
                alt="App"
              />
            </li>
            <li class="w-[90px] md:w-[119px]">
              <NuxtImg
                src="/google.png"
                class="mx-auto w-[90px] md:w-[119px]"
                quality="100"
                format="webp"
                alt="App"
              />
            </li>
          </ul>
        </div>
        <div class="sm:w-1/2">
          <NuxtImg
            src="/payment.png"
            quality="100"
            format="webp"
            alt="Payment"
            class="mx-auto md:w-[370px]"
          />
        </div>
      </div>
      <p class="text-white text-center py-6">
        Powered By NextOxy © {{ new Date().getFullYear() }}
      </p>
    </UContainer>
  </div>
</template>

<style></style>
