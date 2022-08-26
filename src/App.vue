<script>
import NavBar from './components/navBar.vue'
import sideBar from './components/sideBar.vue'
export default {
  components: { sideBar, NavBar },
}
</script>

<template>
  <div>
    <main>
      <div class="" v-if="$route.meta.title">
        <div class="">
          <nav-bar />
          <div class="grid h-screen grid-cols-12">
            <side-bar />
            <router-view />
          </div>
        </div>
      </div>
    </main>
    <!--<div v-if="$route.meta.title"></div>-->
  </div>
</template>
