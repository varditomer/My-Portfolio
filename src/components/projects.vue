<template>
  <section id="projects" class="projects full" aria-labelledby="sectionTitle">

    <h2 id="sectionTitle" class="section-title">Projects</h2>
    <p class="section-intro">
      Checkout my latest projects.
    </p>

    <img src="../assets/imgs/rectangles.png" alt="" class="addon-shape left rectangles">



    <section class="projects-content">

      <article class="project-card">
        <div>
          <img src="../assets/imgs/project_imgs/retwitt-app.png" alt="" class="project-img">
          <div class="proj-txt">

            <h3 class="project-title">Retwitt</h3>

            <p class="project-description">
              An end-to-end Twitter clone web application built using the Typescript with React&Redux for the fronted & Express-Node.JS for the backend,
              Including AtlasDB and Cloudinary for storing data.
            </p>

          </div>
        </div>

        <button class="custom-btn watch-demo">
          <a href="https://someday.onrender.com" target="_blank" class="btn-txt">Try it</a>
        </button>

        <img src="../assets/imgs/dots.png" alt="" class="addon-shape dots">


      </article>

      <article class="project-card">
        <div>
          <img src="../assets/imgs/project_imgs/someday.png" alt="" class="project-img">
          <div class="proj-txt">

            <h3 class="project-title">Someday</h3>

            <p class="project-description">
              An end-to-end Monday clone web application built using the Vue\x for the frontend and Node.js for the
              backend, with a MongoDB database to store data and web sockets using Socket.IO to support live updates.
            </p>

          </div>
        </div>

        <button class="custom-btn watch-demo">
          <a href="https://someday.onrender.com" target="_blank" class="btn-txt">Try it</a>
        </button>
      
        

      </article>

      <article class="project-card">
        <div>
          <img src="../assets/imgs/project_imgs/bitcoinnect.png" alt="" class="project-img">
          <div class="proj-txt">

            <h3 class="project-title">Bitcoinnect</h3>

            <p class="project-description">
              React & Angular web applications to handle Bitcoin transfers from the user to his contacts. including
              BitCoin statistics API, and designed to learn and fulfill each frameworks technologies and advantages.
            </p>
          </div>
        </div>
        <button class="custom-btn watch-demo">
          <a class="btn-txt" href="https://varditomer.github.io/bitcoinnect" target="_blank">Try it</a>
        </button>

      </article>


    </section>
    <img src="../assets/imgs/rectangles.png" alt="" class="addon-shape right-bottom rectangles">

  </section>

</template>