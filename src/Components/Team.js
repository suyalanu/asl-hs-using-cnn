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
        <h2 className="heading ">Meet Our Project Team Members</h2>
        <div className="ambassador1">
          <div className="ambassador-div">
            <div className="am-img">
              <img className="imgam" src={deepa} alt="" />
            </div>
            <div className="am-description">
              <div className="desc">
                <p className="ambassadorname">Akshar Lamichhane</p>
                <p>BSC CSIT</p>
                <p>Ambition College </p>
                <p className="universityname">Tribhuvan University</p>
              </div>
              <p>Anushka Suyal</p>
            </div>
          </div>
        </div>
        <div className="ambassador2">
          <div className="ambassador-div">
            <div className="am-img">
              <img className="imgam" src={anushka} alt="" />
            </div>
            <div className="am-description">
              <div className="desc">
                <p className="ambassadorname">Anushka Suyal</p>
                <p>BSC CSIT</p>
                <p>Ambition College </p>
                <p className="universityname">Tribhuvan University</p>
              </div>
              <p>Anushka Suyal</p>
            </div>
          </div>
        </div>
        <div className="ambassador3">
          <div className="ambassador-div">
            <div className="am-img">
              <img className="imgam" src={deepa} alt="" />
            </div>
            <div className="am-description">
              <div className="desc">
                <p className="ambassadorname">Deepa Khana</p>
                <p>BSC CSIT</p>
                <p>Ambition College </p>
                <p className="universityname">Tribhuvan University</p>
              </div>
              <p>Anushka Suyal</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Team;
