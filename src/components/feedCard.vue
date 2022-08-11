<script>
export default {
  name: 'feed-card-component',
  props: {
    cardTitle: { type: String, default: 'Hello World Card Title' },
  },
}
</script>
<template>
  <div class="my-2 flex justify-between bg-white px-4 py-2">
    <a href="#"
      ><p>{{ cardTitle }}</p></a
    >
    <div class="flex space-x-5">
      <a href="#">
        <span class="font-serif">-</span>
      </a>
    </div>
  </div>
</template>

<style></style>
