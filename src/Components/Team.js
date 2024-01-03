import React from "react";
import Header from "../Home/Header";
import handsign2 from "../Img/handsign2.png";
import anushka from "../Img/anushka.jpg";
import deepa from "../Img/deepa.jpg";
import Footer from "../Home/Footer";
import "../Css/Team.css";

function Team() {
  return (
    <>
      <Header />
      <div className="container">
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

export default Team;
