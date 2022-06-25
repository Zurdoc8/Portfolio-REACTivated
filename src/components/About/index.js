import React from 'react';
import coverImage from '../../assets/cover/cover-image2.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
          Inmensly proud to call myself a FULL STACK WEB DEVEOLPER. This journey began 5 months ago and I am amazed at how far I've come. I have 
          learned multiple technologies and languages that make me a well rounded Developer. I consider myself a stronger back-end than I am front-end, but I 
          keep working to hone my skills. So far the MERN Stack is my favorite way to develop web-applications. 
        </p>
        <p>
          This is mereley the beginning of my journey and I hope that during it, I am able to impact the lives of others in a positive and meaningful way.
          I like to use a creative approach when I deal with problems. I am a self-driven individual ready to take on any challenge, as I continue to grow 
          in this role. I am gifted in both written and verbal communications and great have interpersonal skills. In my professional experience I have been more than 
          capable in managing teams as an effective leader.   
        </p>
        <p>
          Welcome to my Portfolio. If you have any questions feel free to reach out. I hope I get the chance to improve the world through a meaningful contribution in the 
          tech industry.  
        </p>
      </div>
    </section>
  );
}

export default About;
