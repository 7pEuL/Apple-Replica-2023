import React from 'react'
import YoutubeVideos from "./YoutubeVideos";

function YoutubeVideosTemplate() {
  return (
    <>
      <div className="car">
        <div className="container">
          {/* <h1>Apple Videos</h1> */}
          <div className="row">
            <YoutubeVideos />
          </div>
        </div>
      </div>
    </>
  );
}

export default YoutubeVideosTemplate