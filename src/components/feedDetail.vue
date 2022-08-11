<script>
export default {
  name: 'feed-detail-component',
  props: {
    cardTitle: { type: String, default: 'Hello World Card Title' },
    cardDescription: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur commodi maiores velit dignissimos excepturi nemo corporis nulla, libero quo incidunt molestiae nisi expedita rem ratione dolor rerum. Possimus, vitae neque.',
    },
  },
}
</script>
<template>
  <div class="my-2 min-h-[500px] space-y-5 bg-white px-4 py-2">
    <a href="#"
      ><p class="text-xl">{{ cardTitle }}</p></a
    >
    <p class="font-normal text-gray-600">{{ cardDescription }}</p>
  </div>
</template>

<style></style>
