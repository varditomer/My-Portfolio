<template>
  <section class="main-layout">

    <img class="addon-shape wave full" src="./assets/imgs/background-wave-element.png" alt="">

    <header class="app-header full" aria-label="welcome to my portfolio - here you can nav to the part that you want">
      <div class="logo">
        <span class="txt">Tomer</span>
        <img src="../src/assets/imgs/portfolio_logo2.png" alt="" class="logo-img">
      </div>
      <nav class="main-nav flex">
        <ul class="nav-list flex">
          <li><a href="#">Projects</a></li>
          <li><a href="#">Technologies</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>

    <div class="main-content full">


      <section class="introduction" aria-labelledby="sectionTitle">

        <h1 id="sectionTitle" class="section-title">Introduction</h1>

        <p class="section-intro">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ultricies habitant eget volutpat ut aenean
          in
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
        <section class="projects-content">

          <div class="even-section">
            <article class="project-card">

              <img src="./assets/imgs/proj_2.png" alt="" class="project-img">

              <h3 class="project-title">Lorem ipsum</h3>

              <p class="project-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ultricies habitant eget volutpat ut
                aenean
                in dolor. Praesent mi velit in id hac platea leo vulputate.
              </p>

              <button class="custom-btn more-details">
                <span class="btn-txt">Learn more</span>
              </button>

            </article>
            <!-- <article class="project-card">

                <img src="./assets/imgs/proj_1.png" alt="" class="project-img">


              <h3 class="project-title">Lorem ipsum</h3>

              <p class="project-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ultricies habitant eget volutpat ut
                aenean
                in dolor. Praesent mi velit in id hac platea leo vulputate.
              </p>

              <button class="custom-btn more-details">
                <span class="btn-txt">Learn more</span>
              </button>

            </article> -->

          </div>
          <div class="odd-section">

            <article class="project-card">

              <img src="./assets/imgs/proj_1.png" alt="" class="project-img">

              <h3 class="project-title">Lorem ipsum</h3>

              <p class="project-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ultricies habitant eget volutpat ut
                aenean
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ultricies habitant eget volutpat ut
                aenean
                in dolor. Praesent mi velit in id hac platea leo vulputate.
              </p>

              <button class="custom-btn more-details">
                <span class="btn-txt">Learn more</span>
              </button>

            </article>


          </div>

          <!-- <img src="./assets/imgs/dots.png" alt="" class="addon-shape dots"> -->




        </section>


        <img src="./assets/imgs/rectangles.png" alt="" class="addon-shape rectangles">

      </section>

      <section class="technologies" aria-labelledby="sectionTitle">

        <h2 id="sectionTitle" class="section-title">Technologies</h2>

        <p class="section-intro">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ultricies habitant eget volutpat ut aenean
          in
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
        
        <div class="additional-techs-container">
          <ul class="additional-techs-list">
            <li class="additional-tech-item">Git</li>
            <li class="additional-tech-item">Quick learning</li>
            <li class="additional-tech-item">RWD</li>
            <li class="additional-tech-item">Wordpress</li>
            <li class="additional-tech-item">Engagement</li>
            <li class="additional-tech-item">Teamwork</li>
          </ul>
        </div>

      </section>

      <section class="about full" aria-labelledby="sectionTitle">

        <h2 id="sectionTitle" class="section-title">About me</h2>

        <div class="intro">
          <p class="section-intro">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ultricies habitant eget volutpat ut aenean
            in
            dolor. Praesent mi velit in id hac platea leo vulputate.
          </p>
          <div class="my-img-container">
            <div class="container">
              <img class="my-img" src="./assets/imgs/me.png" alt="my_img">
            </div>
          </div>
        </div>

        <div class="time-line-container">
          <div class="time-line-fill"></div>

          <div class="time-line">

            <article class="milestone">

              <div class="milestone-date-container">
                <h4 class="milestone-date">2018</h4>
                <span class="dot"></span>
              </div>


              <p class="milestone-txt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>

            </article>

            <article class="milestone">

              <div class="milestone-date-container">
                <h4 class="milestone-date">2019</h4>
                <span class="dot"></span>
              </div>


              <p class="milestone-txt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>

            </article>

            <article class="milestone">

              <div class="milestone-date-container">
                <h4 class="milestone-date">2020</h4>
                <span class="dot"></span>
              </div>


              <p class="milestone-txt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>

            </article>

            <article class="milestone">
              <div class="milestone-date-container">
                <h4 class="milestone-date">2021</h4>
                <span class="dot"></span>
              </div>

              <p class="milestone-txt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>

            </article>
          </div>


        </div>


      </section>

      <section class="contact-me full" aria-label="contact options">

        <ul class="contact-opts">
          <li class="contact-opt">
            <h5 class="contact-opt-title">📞 Call</h5>
            <span class="contact-opt-content">054-7721538</span>
          </li>
          <li class="contact-opt">
            <h5 class="contact-opt-title">📧 Email</h5>
            <span class="contact-opt-content">tomer.vardi@gmail.com</span>
          </li>
          <li class="contact-opt">
            <button class="custom-btn contact-me-btn">Contact <span v-svg-icon="'send'"></span></button>
          </li>
        </ul>

        <section class="bottom">
          <ul class="social-links">
            <li class="social-link"><a href="#" class="link" v-svg-icon="'linkedin'"></a></li>
            <li class="social-link"><a href="#" class="link" v-svg-icon="'github'"></a></li>
            <li class="social-link"><a href="#" class="link" v-svg-icon="'facebook'"></a></li>
          </ul>
          <small class="copy-rights">© Tomer Vardi 2022</small>
        </section>

      </section>

    </div>

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