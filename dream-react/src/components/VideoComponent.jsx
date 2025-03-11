import React from "react";
import videoFile from "../assets/videos/dreambg.mp4";

function VideoComponent() {
    return (
      <video width="100%" height="100%" autoPlay loop muted>
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }
  export default VideoComponent;
  
