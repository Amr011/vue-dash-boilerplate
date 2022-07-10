<script>
export default {}
</script>

<template>
  <div>
    <main>
      <router-view />
    </main>
    <menuFooter v-if="$route.meta.title" />
  </div>
</template>
