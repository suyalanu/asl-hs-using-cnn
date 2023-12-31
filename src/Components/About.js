import React from "react";
import Header from "../Home/Header";
import "../Css/About.css";
import handsign2 from "../Img/handsign2.png";
import Footer from "../Home/Footer";
function About() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="image-container">
          <img src={handsign2} alt="handsign2" />
        </div>
        <p className="about">
          Sign language is manual communication commonly used by people who are
          deaf. Sign language is not universal; people who are deaf from
          different countries speak different sign languages. The gestures or
          symbols in sign language are organized in a linguistic way. Each
          individual gesture is called a sign. Each sign has three distinct
          parts: the handshape, the position of the hands, and the movement of
          the hands. American Sign Language (ASL) is the most commonly used sign
          language around the world
        </p>
      </div>
      <Footer />
    </>
  );
}

export default About;
