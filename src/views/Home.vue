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
  <div class="col-span-8 bg-blue-400 p-5">
    <form action="" class="w-full bg-blue-400" method="">
      <div class="w-full">
        <input class="w-full p-2" type="text" placeholder="search..." name="search" id="" />
      </div>
    </form>

    <p class="my-4">Feeds</p>
    <div class="grid grid-cols-3 gap-4">
      <feed-card v-for="card in cardCount" :key="card" />
    </div>
  </div>

  <div class="col-span-2 bg-red-400">
    <div class="sticky top-0 p-4">
      <p class="mb-4">Content</p>
      <feed-detail />
    </div>
  </div>
</template>

<style></style>
