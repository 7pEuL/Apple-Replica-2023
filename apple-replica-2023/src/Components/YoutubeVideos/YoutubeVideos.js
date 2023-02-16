// import React, { useState, useEffect } from "react";
// import './YoutubeVideos.css'

// const YoutubeVideos = () => {
//     const [youTubeVideos, setYouTubeVideos] = useState([]);

//     useEffect(() => {
//         const fetchYouTubeVideos = async () => {
//             try {
//                 const response = await fetch(
//                     `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&channelId=${process.env.REACT_APP_CHANNEL_ID}&part=snippet,id&order=date&maxResults=12`);
//                 const youTubeVideos = await response.json();

//                 setYouTubeVideos(youTubeVideos.items);
//             } catch (error) {
//                 throw error
//             }
//         }
//         fetchYouTubeVideos();
//     }, []);

//     return (
//         <>
//             <div className="container YouTube">
//                 <h1 className="text-center m-5 boldTitle">Apple Videos</h1>
//                 <div className="row">
//                     {youTubeVideos &&
//                         youTubeVideos.map((singleVideo, index) => {
//                             console.log(singleVideo);
//                             let vidId = singleVideo.id.videoId;
//                             let vidLink = `https://www.youtube.com/watch?v=${vidId}`;

//                             return (
//                                 <div key={index} className="col-sm-12 col-md-4 col-xl-3">
//                                     <div className="card-body width">
//                                         <a
//                                             href={vidLink}
//                                             target="_blank"
//                                             className="btn btn-light"
//                                             rel="noReferrer"
//                                         >
//                                             <img
//                                                 src={singleVideo.snippet.thumbnails.high.url}
//                                                 alt=""
//                                             />
//                                         </a>
//                                         <div className="p-3">
//                                             <a
//                                                 href={vidLink}
//                                                 target="_blank"
//                                                 className="fontSize1"
//                                                 rel="noReferrer"
//                                             >
//                                                 {singleVideo.snippet.title}
//                                             </a>
//                                             <p className="card-text fontSize2">
//                                                 {singleVideo.snippet.description}
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default YoutubeVideos;

// // Making an API request using the channel name and get the channel ID
// //
// // https://www.googleapis.com/youtube/v3/channels?key=AIzaSyAwp292F_QzErRzloyT0PntsKtt3bFFlAU&forUsername=Apple&part=id

// // Apple channel ID
// // {
// //   "kind": "youtube#channelListResponse",
// //   "etag": "mz69kTl4eTWQ_DNpITJReTTsCDY",
// //   "pageInfo": {
// //     "totalResults": 1,
// //     "resultsPerPage": 5
// //   },
// //   "items": [
// //     {
// //       "kind": "youtube#channel",
// //       "etag": "YBIB3kIgzFGk1Uu42kfTJsfeA4w",
// //       "id": "UCE_M8A5yxnLfW0KghEeajjw"
// //     }
// //   ]
// // }

// // API request URL
// // https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&channelId=${process.env.REACT_APP_CHANNEL_ID}&part=snippet,id&order=date&maxResults=12
// //  https://www.googleapis.com/youtube/v3/search?key=AIzaSyAwp292F_QzErRzloyT0PntsKtt3bFFlAU&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=8

//   //   useEffect(() => {
//   //     fetch(
//   //       "https://www.googleapis.com/youtube/v3/search?key=AIzaSyAwp292F_QzErRzloyT0PntsKtt3bFFlAU&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=12"
//   //     )
//   //       .then((response) => response.json())
//   //       .then((data) => {
//   //         console.log(data);
//   //         const youTubeVideos = data.items;
//   //         setYouTubeVideos(youTubeVideos);
//   //       });
//   //   }, []);

// // {
// //   "kind": "youtube#searchListResponse",
// //   "etag": "QHDIE4vweMPLNLxcFueqx7baBXg",
// //   "nextPageToken": "CAgQAA",
// //   "regionCode": "US",
// //   "pageInfo": {
// //     "totalResults": 234,
// //     "resultsPerPage": 8
// //   },
// //   "items": [
// //     {
// //       "kind": "youtube#searchResult",
// //       "etag": "gAHyxVbHQJUm0DyyUgrJ3PR13JE",
// //       "id": {
// //         "kind": "youtube#video",
// //         "videoId": "oMf_i1YBuMk"
// //       },
// //       "snippet": {
// //         "publishedAt": "2023-01-18T14:44:48Z",
// //         "channelId": "UCE_M8A5yxnLfW0KghEeajjw",
// //         "title": "Introducing the all-new HomePod | Apple",
// //         "description": "A powerful, high-excursion woofer and beamforming tweeters create room-filling sound. HomePod senses its surroundings and ...",
// //         "thumbnails": {
// //           "default": {
// //             "url": "https://i.ytimg.com/vi/oMf_i1YBuMk/default.jpg",
// //             "width": 120,
// //             "height": 90
// //           },
// //           "medium": {
// //             "url": "https://i.ytimg.com/vi/oMf_i1YBuMk/mqdefault.jpg",
// //             "width": 320,
// //             "height": 180
// //           },
// //           "high": {
// //             "url": "https://i.ytimg.com/vi/oMf_i1YBuMk/hqdefault.jpg",
// //             "width": 480,
// //             "height": 360
// //           }
// //         },
// //         "channelTitle": "Apple",
// //         "liveBroadcastContent": "none",
// //         "publishTime": "2023-01-18T14:44:48Z"
// //       }
// //     }

// // // 1. Import *useState* and *useEffect*
// // import React, {useState, useEffect} from 'react';
// // import './App.css';

// // function App() {
// //     // 2. Create our *dogImage* variable as well as the *setDogImage* function via useState
// //     // We're setting the default value of dogImage to null, so that while we wait for the
// //     // fetch to complete, we dont attempt to render the image
// //   let [dogImage, setDogImage] = useState(null)

// //     // 3. Create out useEffect function
// //   useEffect(() => {
// //     fetch("https://dog.ceo/api/breeds/image/random")
// //     .then(response => response.json())
// //         // 4. Setting *dogImage* to the image url that we received from the response above
// //     .then(data => setDogImage(data.message))
// //   },[])

// //   return (
// //     <div className="App">
// //         {/* 5. Using *dogImage as* the *src* for our image*/}
// //     {dogImage && <img src={dogImage}></img>}
// //     </div>
// //   );
// // }

// // export default App;
