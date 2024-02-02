import React, { useEffect, useRef } from "react";
import gif from "../Assets/smart-gif.gif"

export default function Video_part() {
  const refvideo = useRef();

  return (
    <div className="main_video_part">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <img   className="w-100" src={gif}></img>
            {/* <video
              autoplay="autoplay"
              ref={refvideo}
              className="w-100"
              controls={"false"}
              loop={"true"}
              muted="true"
            >
              <source src={gif} type="video/mp4" />
         
            </video> */}
          </div>
        </div>
      </div>
    </div>
  );
}
