<template>
  <header class="app-header full" aria-label="welcome to my portfolio - here you can nav to the part that you want">
    <div class="logo">
      <div class="txt">Tomer</div>
      <img src="../assets/imgs/lines.png" alt="" class="logo-img">
    </div>
    <button v-if="!showMenu" class="btn-menu custom-btn" @click="$emit('toggleMenu')">☰</button>
    <nav class="main-nav" :class="{ 'menu-open': showMenu }">
      <ul class="nav-list">
        <li><a href="#projects" @touchend="handleClickToLink('projects')">Projects</a></li>
        <li><a href="#technologies" @touchend="handleClickToLink('projects')">Technologies</a></li>
        <li><a href="#about" @touchend="handleClickToLink('projects')">About</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'cmp-name',
  emits: ['toggleMenu'],
  props: {
    showMenu: {
      props: {},
      type: Boolean,
      required: true
    },
  },
  methods: {
    handleClickToLink(to) {
      this.$emit('toggleMenu')
      var access = document.getElementById(to)
      access.scrollIntoView({ behavior: 'smooth' }, true)
    }
  }
}
</script>
