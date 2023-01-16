<template>
  <section class="main-layout">

    <header class="app-header full" aria-label="welcome to my portfolio - here you can nav to the part that you want">
      <div class="logo">
        <div class="txt">Tomer</div>
        <img src="../src/assets/imgs/portfolio_logo2.png" alt="" class="logo-img">
      </div>
      <nav class="main-nav">
        <ul class="nav-list">
          <li><a href="#projects">Projects</a></li>
          <li><a href="#technologies">Technologies</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
    </header>

    <div class="main-content full">


      <section class="introduction" aria-labelledby="sectionTitle">

        <div class="intro-content">
          <h1 id="sectionTitle" class="section-title">Introduction</h1>

          <p class="section-intro">
            A motivated and adaptable full stack developer with a background in project management seeking to utilize my
            diverse skillset and passion for technology to grow and make an impact.
          </p>

          <img src="./assets/imgs/circle.png" alt="" class="addon-shape circle">
        </div>

        <img src="./assets/imgs/flying_man.png" alt="" class="addon-shape flying-man">

      </section>

      <section id="projects" class="projects full" aria-labelledby="sectionTitle">

        <h2 id="sectionTitle" class="section-title">Projects</h2>
        <p class="section-intro">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <img src="./assets/imgs/rectangles.png" alt="" class="addon-shape left rectangles">

        <section class="projects-content">

          <article class="project-card">

            <img src="./assets/imgs/proj_1.png" alt="" class="project-img">
            <div class="proj-txt">

              <h3 class="project-title">Someday</h3>

              <p class="project-description">
                An end-to-end Monday clone web application built using the Vue\x for the frontend and Node.js for the
                backend, with a MongoDB database to store data and web socket using Socket.IO to support live updates.
              </p>

            </div>

            <button class="custom-btn more-details">
              <span class="btn-txt">Learn more</span>
            </button>

            <img src="./assets/imgs/dots.png" alt="" class="addon-shape dots">

          </article>

          <article class="project-card">

            <img src="./assets/imgs/proj_2.png" alt="" class="project-img">
            <div class="proj-txt">

              <h3 class="project-title">Lorem ipsum</h3>

              <p class="project-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ultricies habitant eget volutpat ut
                aenean
                in dolor. Praesent mi velit in id hac platea leo vulputate.
              </p>
            </div>
            <button class="custom-btn more-details">
              <span class="btn-txt">Learn more</span>
            </button>

          </article>

          <article class="project-card">
            <img src="./assets/imgs/proj_3.png" alt="" class="project-img">

            <div class="proj-txt">

              <h3 class="project-title">Lorem ipsum</h3>

              <p class="project-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ultricies habitant eget volutpat ut
                aenean
                in dolor. Praesent mi velit in id hac platea leo vulputate.
              </p>
            </div>

            <button class="custom-btn more-details">
              <span class="btn-txt">Learn more</span>
            </button>

          </article>


        </section>

        <img src="./assets/imgs/rectangles.png" alt="" class="addon-shape right-bottom rectangles">

      </section>

      <section id="technologies" class="technologies" aria-labelledby="sectionTitle">

        <h2 id="sectionTitle" class="section-title">Technologies</h2>

        <p class="section-intro">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ultricies habitant eget volutpat ut aenean
          in
          dolor. Praesent mi velit in id hac platea leo vulputate.
        </p>

        <div class="main-techs-list">

          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="javascript" width="40" height="40" /> </a>
          <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
              alt="html5" width="40" height="40" /> </a>
          <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
              alt="css3" width="40" height="40" /> </a>
          <a href="https://vuejs.org/" target="_blank" rel="noreferrer"> <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg"
              alt="vuejs" width="40" height="40" /> </a>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="react" width="40" height="40" /> </a>
          <a href="https://redux.js.org" target="_blank" rel="noreferrer"> <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux"
              width="40" height="40" /> </a>
          <a href="https://angular.io" target="_blank" rel="noreferrer"> <img
              src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" width="40" height="40" />
          </a>
          <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
              alt="typescript" width="40" height="40" /> </a>
          <a href="https://sass-lang.com" target="_blank" rel="noreferrer"> <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass"
              width="40" height="40" /> </a>
          <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
              alt="bootstrap" width="40" height="40" /> </a>
          <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img
              src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40" />
          </a>
          <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
              alt="nodejs" width="40" height="40" /> </a>
          <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
              alt="mongodb" width="40" height="40" /> </a>
          <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
              alt="express" width="40" height="40" /> </a>
          <a href="https://postman.com" target="_blank" rel="noreferrer"> <img
              src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40"
              height="40" />
          </a>
          <a href="https://www.java.com" target="_blank" rel="noreferrer"> <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java"
              width="40" height="40" /> </a>
          <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
              alt="mysql" width="40" height="40" /> </a>
        </div>

      </section>

      <section id="about" class="about" aria-labelledby="sectionTitle">

        <h2 id="sectionTitle" class="section-title">About me</h2>

        <div class="intro">
          <p class="section-intro">
            I am an ambitious and versatile full stack developer with a solid background in project management and a
            passion for creative and technical programming. I seek a position where I can utilize my skills and
            knowledge, to contribute to the success of a team. My diverse background and eagerness to learn and grow
            makes me confident in my ability to excel in a full stack development role.
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
            <span class="icon" v-svg-icon="'whatsapp'" title="Contact on whatsapp"></span>
            <span class="contact-opt-content" title="Copy phone">054-7721538</span>
          </li>
          <li class="contact-opt">
            <span class="icon" v-svg-icon="'mail'" title="Contact by mail"></span>
            <span class="contact-opt-content" title="Copy address">tomer.vardi@gmail.com</span>
          </li>
        </ul>

        <section class="bottom">
          <ul class="social-links">
            <li class="social-link"><a href="#" class="linkedin" v-svg-icon="'linkedin'"></a></li>
            <li class="social-link"><a href="#" class="github" v-svg-icon="'github'"></a></li>
            <li class="social-link"><a href="#" class="facebook" v-svg-icon="'facebook'"></a></li>
          </ul>
          <small class="copy-rights">©Developed by: Tomer Vardi 2023</small>
        </section>

      </section>

    </div>

    <img class="addon-shape wave full" src="./assets/imgs/background-wave-element.png" alt="">

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