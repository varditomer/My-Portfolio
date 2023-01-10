<template>
  <section class="app-main">

    <img class="wave" src="./assets/imgs/background-wave-element.png" alt="">
    <!-- <app-header /> -->

    <!-- <router-view /> -->

    <header class="app-header">
      <div class="logo">
        <span class="txt">COMPANY</span>
        <img src="../src/assets/imgs/portfolio_logo.png" alt="" class="logo-img">
      </div>
      <nav class="main-nav">
        <ul class="nav-list">
          <li><a href="#">Projects</a></li>
          <li><a href="#">Technologies</a></li>
          <li><a href="#">About me</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <section class="social">
        <ul class="social-links">
          <li class="social-link"><a href="#" class="link">Linkedin</a></li>
          <li class="social-link"><a href="#" class="link">Github</a></li>
          <li class="social-link"><a href="#" class="link">Facebook</a></li>
        </ul>
      </section>
    </header>

    



    <user-msg/>
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