<script>
export default {
  data() {
    return {}
  },
  props: {
    title: { type: String, default: 'coffee & tea' },
  },
}
</script>
<template>
  <div class="flex w-full items-center justify-center gap-4 p-2 text-lg font-bold uppercase">
    <p class="text-center">{{ title }}</p>
  </div>
</template>
