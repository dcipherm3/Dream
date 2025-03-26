import React from "react";
import videoFile from "../assets/videos/dreambg.mp4";

function VideoComponent() {
    return (
      <div className="w-screen h-screen fixed inset-0 overflow-hidden -z-10">
        
        <video className="w-full h-full object-cover" autoPlay loop muted>
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      </div>
    );
  }
  export default VideoComponent;
  
