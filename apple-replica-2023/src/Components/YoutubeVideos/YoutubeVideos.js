import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import './YoutubeVideos.css'

const YoutubeVideos = () => {
    const [youTubeVideos, setYouTubeVideos] = useState([]);

    useEffect(() => {
        const fetchYouTubeVideos = async () => {
            try {
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&channelId=${process.env.REACT_APP_CHANNEL_ID}&part=snippet,id&order=date&maxResults=12`);
                const youTubeVideos = await response.json();

                setYouTubeVideos(youTubeVideos.items);
            } catch (error) {
                throw error
            }
        }
        fetchYouTubeVideos();
    }, []);

    return (
        <>
            <div className="container YouTube">
                <h1 className="text-center m-5 boldTitle">Apple Videos</h1>
                <div className="row">
                    {youTubeVideos &&
                        youTubeVideos.map((singleVideo, index) => {
                            console.log(singleVideo);
                            let vidId = singleVideo.id.videoId;
                            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;

                            return (
                                <div key={index} className="col-sm-12 col-md-4 col-xl-3">
                                    <div className="card-body width">
                                        <a
                                            href={vidLink}
                                            target="_blank"
                                            className="btn btn-light"
                                            rel="noReferrer"
                                        >
                                            <img
                                                src={singleVideo.snippet.thumbnails.high.url}
                                                alt=""
                                            />
                                        </a>
                                        <div className="p-3">
                                            <a
                                                href={vidLink}
                                                target="_blank"
                                                className="fontSize1"
                                                rel="noReferrer"
                                            >
                                                {singleVideo.snippet.title}
                                            </a>
                                            <p className="card-text fontSize2">
                                                {singleVideo.snippet.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </>
    );
};

export default YoutubeVideos;

=======
import "./YoutubeVideos.css";

const YoutubeVideos = () => {
  const [youTubeVideos, setYouTubeVideos] = useState([]);

  useEffect(() => {
    const fetchYouTubeVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&channelId=${process.env.REACT_APP_CHANNEL_ID}&part=snippet,id&order=date&maxResults=12`
        );
        const youTubeVideos = await response.json();

        setYouTubeVideos(youTubeVideos.items);
      } catch (error) {
        throw error;
      }
    };
    fetchYouTubeVideos();
  }, []);

  return (
    <>
      <div className="container YouTube">
        <h1 className="text-center m-5 boldTitle">Apple Videos</h1>
        <div className="row">
          {youTubeVideos &&
            youTubeVideos.map((singleVideo, index) => {
              console.log(singleVideo);
              let vidId = singleVideo.id.videoId;
              let vidLink = `https://www.youtube.com/watch?v=${vidId}`;

              return (
                <div key={index} className="col-sm-12 col-md-4 col-xl-3">
                  <div className="card-body width">
                    <a
                      href={vidLink}
                      target="_blank"
                      className="btn btn-light"
                      rel="noReferrer"
                    >
                      <img
                        src={singleVideo.snippet.thumbnails.high.url}
                        alt=""
                      />
                    </a>
                    <div className="p-3">
                      <a
                        href={vidLink}
                        target="_blank"
                        className="fontSize1"
                        rel="noReferrer"
                      >
                        {singleVideo.snippet.title}
                      </a>
                      <p className="card-text fontSize2">
                        {singleVideo.snippet.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default YoutubeVideos;
>>>>>>> 3b6a624e92541562bbad5f8862a09284f5148050
