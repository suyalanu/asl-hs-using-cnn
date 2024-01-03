import React from "react";
import Header from "../Home/Header";
import "../Css/About.css";
import Footer from "../Home/Footer";
import handsign1 from "../Img/handsign1.png";

function About() {
  return (
    <>
      <Header />

      <div className="containers">
        <div className="row">
          <div className="col-6">
            <p className="about">
              Sign languages (also known as signed languages) are languages that
              use the visual-manual modality to convey meaning, instead of
              spoken words. Sign languages are expressed through manual
              articulation in combination with non-manual markers. Sign
              languages are full-fledged natural languages with their own
              grammar and lexicon.Sign languages are not universal and are
              usually not mutually intelligible,although there are also
              similarities among different sign languages.
              <br></br>
              Linguists consider both spoken and signed communication to be
              types of natural language, meaning that both emerged through an
              abstract, protracted aging process and evolved over time without
              meticulous planning.This is supported by the fact that there is
              substantial overlap between the neural substrates of sign and
              spoken language processing, despite the obvious differences in
              modality.Sign language should not be confused with body language,
              a type of nonverbal communication.
            </p>
          </div>
          <div className="col-6">
            <img src={handsign1} alt="handsign2" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
