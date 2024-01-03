import React from "react";
import Header from "../Home/Header";
import "../Css/About.css";
import handsign2 from "../Img/handsign2.png";
import anushka from "../Img/anushka.jpg";
import deepa from "../Img/deepa.jpg";
import Footer from "../Home/Footer";

function About() {
  return (
    <>
      <Header />
      <div className="container">
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
        <div id="team" className="team-wrap">
          <div className="container">
            <h2 className="heading text-center mb-5">Meet Our Team</h2>
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                <div className="team-member">
                  <div
                    className="round-image"
                    style={{ backgroundImage: `url(${deepa})` }}
                  ></div>
                  <p className="membername">Akshar Lammichhane</p>
                  <p>BSc. CSIT</p>
                  <p>Ambition College</p>
                  <p className="universityname">Tribhuvan University</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                <div className="team-member">
                  <div
                    className="round-image"
                    style={{ backgroundImage: `url(${anushka})` }}
                  ></div>
                  <p className="membername">Anushka Suyal</p>
                  <p>BSc. CSIT</p>
                  <p>Ambition College</p>
                  <p className="universityname">Tribhuvan University</p>
                </div>
              </div>{" "}
              <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                <div className="team-member">
                  <div
                    className="round-image"
                    style={{ backgroundImage: `url(${deepa})` }}
                  ></div>
                  <p className="membername">Deepa Khanal</p>
                  <p>BSc. CSIT</p>
                  <p>Ambition College</p>
                  <p className="universityname">Tribhuvan University</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
