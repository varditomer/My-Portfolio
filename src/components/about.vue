<template>
  <section id="about" class="about" aria-labelledby="sectionTitle">

    <h2 id="sectionTitle" class="section-title">About me</h2>

    <div class="intro">
      <div class="container">
        <img class="my-img" src="../assets/imgs/me.png" alt="my_img">
      </div>
      <p class="section-intro">
        I am an ambitious and versatile full stack developer with a solid background in project management. I am
        passion for creative and technical programming. My diverse background and eagerness to learn and grow
        makes me confident in my ability to excel in a full stack development role.
      </p>
    </div>

    <div class="time-line-container">
      <div class="time-line-fill"></div>

      <div class="time-line">

        <article class="milestone">

          <div class="milestone-date-container">
            <h4 class="milestone-date">2016</h4>
            <span class="dot" v-svg-icon="'student'"></span>

          </div>


          <p class="milestone-txt">
            Began BSc Degree in Industrial Engineering & Management majoring Information Systems at the Ben-Gurion
            University of the Negev.
          </p>

        </article>

        <article class="milestone">

          <div class="milestone-date-container">
            <h4 class="milestone-date">2021</h4>
            <span class="dot" v-svg-icon="'diploma'"></span>
          </div>


          <p class="milestone-txt">
            Graduated and now I'm officially an IEM Engineer.
            Continued to work in my current position as a project manager and officially promoted to IEM PM.
          </p>

        </article>

        <article class="milestone">

          <div class="milestone-date-container">
            <h4 class="milestone-date">2022</h4>
            <span class="dot" v-svg-icon="'career_break'"></span>

          </div>


          <p class="milestone-txt">
            Took a professional career break to pursue my passion of creativity and technology in programming.
            Therefor enrolled in full-stack development intensive bootcamp at Coding Academy.
          </p>

        </article>

        <article class="milestone">
          <div class="milestone-date-container">
            <h4 class="milestone-date">2023</h4>
            <span class="dot" v-svg-icon="'programmer'"></span>
          </div>

          <p class="milestone-txt">
            Graduated bootcamp and am now eager to take on opportunity as a full-stack developer.
          </p>

        </article>
      </div>


    </div>


  </section>
</template>