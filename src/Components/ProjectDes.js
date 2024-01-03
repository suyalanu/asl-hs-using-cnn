import React from "react";
import "../Css/ProjectDes.css";
import shape from "../Img/shape-grid.png";
function ProjectDes() {
  return (
    <div id="background" className="background">
      <img className="bg-img left-img" src={shape} alt="" />
      <img className="bg-img right-img" src={shape} alt="" />

      <div className="content">
        <h2 className="title"></h2>
        <div className="description">
          <p>
            Sign language is manual communication commonly used by people who
            are deaf. Sign language is not universal; people who are deaf from
            different countries speak different sign languages. The gestures or
            symbols in sign language are organized in a linguistic way. Each
            individual gesture is called a sign. Each sign has three distinct
            parts: the handshape, the position of the hands, and the movement of
            the hands. American Sign Language (ASL) is the most commonly used
            sign language around the world
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectDes;
