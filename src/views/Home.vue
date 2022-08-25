<script>
import feedCard from './../components/feedCard.vue'
import feedDetail from './../components/feedDetail.vue'
import SideBar from '@/components/sideBar.vue'
export default {
  name: 'Home',

  components: {
    feedCard,
    feedDetail,
    SideBar,
  },

  data() {
    return {
      cardCount: 10,
    }
  },
}
</script>
cd
<template>
  <div class="col-span-4 bg-blue-400 p-5">
    <p class="mb-4">Feeds</p>
    <feed-card v-for="card in cardCount" :key="card" />
  </div>
  <div class="col-span-6 bg-red-400 p-5">
    <p class="mb-4">Content</p>
    <feed-detail />
  </div>
</template>

<style></style>
