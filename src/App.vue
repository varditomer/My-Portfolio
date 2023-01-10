<template>
  <section class="app-main">

    <img class="addon-shape wave" src="./assets/imgs/background-wave-element.png" alt="">
    <!-- <app-header /> -->

    <!-- <router-view /> -->

    <header class="app-header" aria-label="welcome to my portfolio - here you can nav to the part that you want">
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


    <section class="introduction" aria-labelledby="sectionTitle">

      <h2 id="sectionTitle" class="section-title">Introduction</h2>
      
      <p class="section-intro">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ultricies habitant eget volutpat ut aenean in
        dolor. Praesent mi velit in id hac platea leo vulputate.
      </p>

      <img src="./assets/imgs/flying_man.png" alt="" class="addon-shape flying-man">


      <img src="./assets/imgs/circle.png" alt="" class="addon-shape circle">


    </section>

    <section class="projects" aria-labelledby="sectionTitle">
      <h2 id="sectionTitle" class="section-title">Projects</h2>
      <p class="section-intro">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <img src="./assets/imgs/rectangles.png" alt="" class="addon-shape rectangles">

      <article class="project-card">

        <img src="./assets/imgs/proj_1.png" alt="" class="project-img">

        <h3 class="project-title">Lorem ipsum</h3>

        <p class="project-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ultricies habitant eget volutpat ut aenean
          in dolor. Praesent mi velit in id hac platea leo vulputate.
        </p>

        <button class="custom-btn more-details">
          <span class="btn-txt">Learn more</span>
        </button>

      </article>

      <img src="./assets/imgs/dots.png" alt="" class="addon-shape dots">

      <article class="project-card">

        <img src="./assets/imgs/proj_2.png" alt="" class="project-img">

        <h3 class="project-title">Lorem ipsum</h3>

        <p class="project-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ultricies habitant eget volutpat ut aenean
          in dolor. Praesent mi velit in id hac platea leo vulputate.
        </p>

        <button class="custom-btn more-details">
          <span class="btn-txt">Learn more</span>
        </button>

      </article>

      <article class="project-card">

        <img src="./assets/imgs/proj_3.png" alt="" class="project-img">

        <h3 class="project-title">Lorem ipsum</h3>

        <p class="project-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ultricies habitant eget volutpat ut aenean
          in dolor. Praesent mi velit in id hac platea leo vulputate.
        </p>

        <button class="custom-btn more-details">
          <span class="btn-txt">Learn more</span>
        </button>

      </article>

      <img src="./assets/imgs/rectangles.png" alt="" class="addon-shape rectangles">

    </section>

    <section class="technologies" aria-labelledby="sectionTitle">

      <h2 id="sectionTitle" class="section-title">Technologies</h2>

      <p class="section-intro">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ultricies habitant eget volutpat ut aenean in
        dolor. Praesent mi velit in id hac platea leo vulputate.
      </p>

      <ul class="main-techs-list">

        <li class="tech-item">
          <div class="tech-labels">
            <h5 class="tech-title">Html</h5>
            <h6 class="tech-lvl">Expert</h6>
          </div>
          <input type="range" class="tech-lvl-range" min="0" max="10" value="10">
        </li>

        <li class="tech-item">
          <div class="tech-labels">
            <h5 class="tech-title">CSS, Sass & Bootstrap</h5>
            <h6 class="tech-lvl">Expert</h6>
          </div>
          <input type="range" class="tech-lvl-range" min="0" max="10" value="10">
        </li>

        <li class="tech-item">
          <div class="tech-labels">
            <h5 class="tech-title">JavaScript, TypeScript, JQuery</h5>
            <h6 class="tech-lvl">Expert</h6>
          </div>
          <input type="range" class="tech-lvl-range" min="0" max="10" value="8">
        </li>

        <li class="tech-item">
          <div class="tech-labels">
            <h5 class="tech-title">UI design in Figma</h5>
            <h6 class="tech-lvl">Advanced</h6>
          </div>
          <input type="range" class="tech-lvl-range" min="0" max="10" value="7">
        </li>

        <li class="tech-item">
          <div class="tech-labels">
            <h5 class="tech-title">Angular</h5>
            <h6 class="tech-lvl">Novice</h6>
          </div>
          <input type="range" class="tech-lvl-range" min="0" max="10" value="2">
        </li>

        <li class="tech-item">
          <div class="tech-labels">
            <h5 class="tech-title">React</h5>
            <h6 class="tech-lvl">Intermediate</h6>
          </div>
          <input type="range" class="tech-lvl-range" min="0" max="10" value="3">
        </li>

        <li class="tech-item">
          <div class="tech-labels">
            <h5 class="tech-title">Vue</h5>
            <h6 class="tech-lvl">Advanced</h6>
          </div>
          <input type="range" class="tech-lvl-range" min="0" max="10" value="8">
        </li>

      </ul>

      <h3 class="section-secondary-title">Additional technologies and skills</h3>

      <ul class="additional-techs-list">
        <li class="additional-tech-item">Git</li>
        <li class="additional-tech-item">Quick learning</li>
        <li class="additional-tech-item">RWD</li>
        <li class="additional-tech-item">Wordpress</li>
        <li class="additional-tech-item">Engagement</li>
        <li class="additional-tech-item">Teamwork</li>
      </ul>

    </section>

    <section class="about" aria-labelledby="sectionTitle">

      <h2 id="sectionTitle" class="section-title">About me</h2>

      <p class="section-intro">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ultricies habitant eget volutpat ut aenean in
        dolor. Praesent mi velit in id hac platea leo vulputate.
      </p>

      <div class="time-line">

        <article class="milestone">

          <h4 class="milestone-date">2021</h4>

          <p class="milestone-txt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

        </article>

        <article class="milestone">

          <h4 class="milestone-date">2019</h4>

          <p class="milestone-txt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

        </article>

        <article class="milestone">

          <h4 class="milestone-date">2018</h4>

          <p class="milestone-txt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

        </article>

        <article class="milestone">

          <h4 class="milestone-date">2020</h4>

          <p class="milestone-txt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

        </article>

      </div>
      

    </section>

    <footer class="contact" aria-label="contact options">

      <section class="contact-details">
        <ul class="contact-opts">
          <li class="contact-opt">
            <h5 class="contact-opt-title">Call me:</h5>
            <span class="contact-opt-content">123-456-789</span>
          </li>
          <li class="contact-opt">
            <h5 class="contact-opt-title">Email:</h5>
            <span class="contact-opt-content">example@gmail.com</span>
          </li>

          <li class="contact-opt">
            <button class="custom-btn contact-me"><span>Contact</span></button>
          </li>

        </ul>
      </section>

      <section class="social">
        <ul class="social-links">
          <li class="social-link"><a href="#" class="link">Linkedin</a></li>
          <li class="social-link"><a href="#" class="link">Github</a></li>
          <li class="social-link"><a href="#" class="link">Facebook</a></li>
        </ul>
      </section>

    </footer>






    <user-msg />
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