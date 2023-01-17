<template>
  <section class="main-layout">

    <app-header />

    <div class="main-content full">
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