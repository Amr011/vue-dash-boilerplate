<script>
import Footer from '@/components/footer.vue'
import feedCard from './../components/feedCard.vue'
import feedDetail from './../components/feedDetail.vue'
import SideBar from '@/components/sideBar.vue'
export default {
  name: 'Home',

  components: {
    feedCard,
    feedDetail,
    Footer,
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
  <div class="bg-yellow-400 text-lg font-semibold">
    <div class="bg-blue-200">
      <div class="bg-red-200">
        <div class="grid h-screen grid-cols-12 bg-indigo-400">
          <side-bar />
          <div class="col-span-4 bg-blue-400 p-5">
            <p class="mb-4">Feeds</p>
            <feed-card v-for="card in cardCount" :key="card" />
          </div>
          <div class="col-span-6 bg-red-400 p-5">
            <p class="mb-4">Content</p>
            <feed-detail />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style></style>
