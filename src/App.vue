<script>
import sideBar from './components/sideBar.vue'
export default {
  components: { sideBar },
}
</script>

<template>
  <div>
    <main>
      <div class="bg-blue-200" v-if="$route.meta.title">
        <div class="bg-red-200">
          <div class="grid h-screen grid-cols-12 bg-indigo-400">
            <side-bar />
            <router-view />
          </div>
        </div>
      </div>
    </main>
    <!--<div v-if="$route.meta.title"></div>-->
  </div>
</template>
