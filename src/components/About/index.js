import React from "react";
import "../../index.css";

function About() {
  return (
    <section className="container">
      <h2 class="top-title">
        {" "}
        Welcome! My Name is Andres Garza and I am a Full Stack Web Developer{" "}
      </h2>
      <hr></hr>
      <div>
        <img
          class="mb-5"
          id="about"
          src="https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-developer-picture-id1224500457?k=20&m=1224500457&s=612x612&w=0&h=LpjdY6okVWiKh8LT_LqcXz53kWaXVf47ThXKwMcCoHI="
          alt="Let me introduce myself"
        />
        <p>
          Immensly proud to call myself a FULL STACK WEB DEVEOLPER. This journey
          began 5 months ago and I am amazed at how far I've come. I have
          learned multiple technologies and languages that make me a well
          rounded Developer. I consider myself a stronger back-end than I am
          front-end, but I keep working to hone my skills. So far the MERN Stack
          is my favorite way to develop web-applications.
        </p>
        <p>
          This is mereley the beginning of my journey and I hope that during it,
          I am able to impact the lives of others in a positive and meaningful
          way. I like to use a creative approach when I deal with problems. I am
          a self-driven individual ready to take on any challenge, as I continue
          to grow in this role. I am gifted in both written and verbal
          communications and great have interpersonal skills. In my professional
          experience I have been more than capable in managing teams as an
          effective leader.
        </p>
        <p>
          Welcome to my Portfolio. If you have any questions feel free to reach
          out. I hope I get the chance to improve the world through a meaningful
          contribution in the tech industry.
        </p>
      </div>

      <footer className="footer bg-dark fixed-bottom">
        <a href="https://github.com/Zurdoc8">
          <img
            src="https://img.icons8.com/color/48/000000/github--v1.png"
            alt="Github"
            className="icon"
          />
        </a>
        <a href="www.linkedin.com/in/andres-garza-web-dev/">
          <img
            src="https://img.icons8.com/fluent/48/000000/linkedin.png"
            alt="LinkedIn"
            className="icon"
          />
        </a>
      </footer>
    </section>
  );
}

export default About;
