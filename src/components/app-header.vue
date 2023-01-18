<template>
  <header class="app-header full" aria-label="welcome to my portfolio - here you can nav to the part that you want">
    <div class="logo">
      <div class="txt">Tomer</div>
      <img src="../assets/imgs/lines.png" alt="" class="logo-img">
    </div>
    <button v-if="!showMenu" class="btn-menu custom-btn" @click="$emit('toggleMenu')">☰</button>
    <nav class="main-nav" :class="{'menu-open': showMenu}">
      <ul class="nav-list">
        <li><a href="#projects">Projects</a></li>
        <li><a href="#technologies">Technologies</a></li>
        <li><a href="#about">About</a></li>
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
            type: Boolean,
            required: true
        },
  },
}
</script>