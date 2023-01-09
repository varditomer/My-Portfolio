<template>
  <section>
    <user-msg/>
    <app-header />
    <router-view/>
  </section>
</template>

<script>


import appHeader from './components/app-header.vue'
import userMsg from './components/user-msg.vue'

export default {

  created() {
    console.log('Vue App created')
  },
  components: {
    appHeader,
    userMsg
  },
}
</script>