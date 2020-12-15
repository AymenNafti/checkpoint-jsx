import React from "react";
import "./style.css";
import srcImage from "../src/image/imageInSrc.jpg";

function App() {
  return (
    <div>
      <div
        style={{
          border: "solid 1px black",
          "max-width": "100vw",
        }}
      >
        <h1 className="title-red"> Your name here </h1> <br />
        <img src={srcImage} alt="srcImage" />
        <br />
        <img src="/imageInPublic.jpg" alt="publicImage" />
      </div>{" "}
      <video width={320} height={240} controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>{" "}
    </div>
  );
}
export default App;
