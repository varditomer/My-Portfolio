<template>
  <section class="contact-me full" aria-label="contact options">

    <ul class="contact-opts">
      <li class="contact-opt">
        <a class="icon" v-svg-icon="'whatsapp'" href="https://wa.me/972547721538?text=היי!%20אני%20תומר,%20נעים%20להכיר%20אותך.%20בוא%20ניצור%20קשר%20:-)" target="_blank" title="Contact on whatsapp" aria-label="Chat on WhatsApp"></a>
        <span class="contact-opt-content" @click="this.$copyText(`0547721538`)" title="Copy phone">054-7721538</span>
      </li>
      <li class="contact-opt">
        <a class="icon" v-svg-icon="'mail'" href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=tomer.vardi@gmail.com" target="_blank" title="Contact by mail"></a>
        <span class="contact-opt-content" @click="this.$copyText(`tomer.vardi@gmail.com`)" title="Copy mail">tomer.vardi@gmail.com</span>
      </li>
    </ul>

    <section class="bottom">
      <ul class="social-links">
        <li class="social-link"><a class="linkedin" v-svg-icon="'linkedin'" href="https://www.linkedin.com/in/tomer-vardi/" target="_blank"></a></li>
        <li class="social-link"><a class="github" v-svg-icon="'github'" href="https://github.com/varditomer" target="_blank"></a></li>
        <li class="social-link"><a class="facebook" v-svg-icon="'facebook'" href="https://www.facebook.com/tomerv/" target="_blank"></a></li>
      </ul>
      <small class="copy-rights">Copyright © 2023, Tomer Vardi, <span>All Rights Reserved</span>.</small>
    </section>

  </section>
</template>