<script>
export default {
  props: {
    title: { type: String, default: 'Penne Salmon a la Vodka' },
    price: { type: Number, default: 1.99 },
    currency: { type: String, default: '$' },
    description: {
      type: String,
      default:
        'This Resturant the best option youn option younoption younoption younoption younoption younoption younoption younoption younoption younoption youn you w-screen w-screen w-screen w-screen w-screenw-screen the option youn you the best option you over here',
    },
  },
}
</script>
<template>
  <div class="px-2">
    <div class="mb-1 grid grid-flow-col gap-4 text-sm">
      <h1 class="flex justify-start text-base font-semibold">{{ title }}</h1>
      <p class="flex justify-end text-base font-bold">{{ price }}{{ currency }}</p>
    </div>
    <div class="font-sans text-sm text-gray-600">
      <p>
        {{ description }}
      </p>
    </div>
  </div>
</template>
