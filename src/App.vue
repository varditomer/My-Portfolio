<template>
  <section class="main-layout">

    <app-header :showMenu="showMenu" @toggleMenu="showMenu=!showMenu" />

    <div class="main-content full">
      <div v-if="showMenu" class="main-screen" @click="showMenu=!showMenu"></div>
      <introduction />
      <projects />
      <technologies />
      <about />
      <contact />
    </div>

    <img class="addon-shape wave full" src="./assets/imgs/background-wave-element.png" alt="">

  </section>
</template>

<script>


import appHeader from './components/app-header.vue'
import introduction from './components/introduction.vue'
import projects from './components/projects.vue'
import technologies from './components/technologies.vue'
import about from './components/about.vue'
import contact from './components/contact.vue'
import userMsg from './components/user-msg.vue'

export default {
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    closeScreen() {
      this.showScreen = false
      this.closeMenu = true
    }
  },
  components: {
    appHeader,
    introduction,
    projects,
    technologies,
    about,
    contact,
    userMsg
  },
}
</script>