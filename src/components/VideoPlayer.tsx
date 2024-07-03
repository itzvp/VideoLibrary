// // // src/components/VideoPlayer.tsx
// // import dynamic from "next/dynamic";

// // const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

// // interface VideoPlayerProps {
// //   url: string;
// //   onClose: () => void;
// // }

// // const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, onClose }) => {
// //   return (
// //     <div className="video-player">
// //       <ReactPlayer url={url} playing controls />
// //       <button onClick={onClose}>Close</button>
// //     </div>
// //   );
// // };

// // export default VideoPlayer;

// // src/components/VideoPlayer.tsx
// import React from "react";
// import dynamic from "next/dynamic";

// const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

// interface VideoPlayerProps {
//   url?: string;
//   file?: File;
//   onClose: () => void;
// }

// const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, file, onClose }) => {
//   const videoSrc = file ? URL.createObjectURL(file) : url;

//   return (
//     <div className="video-player">
//       {videoSrc && <ReactPlayer url={videoSrc} playing controls />}
//       <button onClick={onClose}>Close</button>
//     </div>
//   );
// };

// export default VideoPlayer;

import React from "react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface VideoPlayerProps {
  url?: string;
  file?: File;
  onClose: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, file, onClose }) => {
  const videoSrc = file ? URL.createObjectURL(file) : url;

  return (
    <div className="video-player">
      {videoSrc && <ReactPlayer url={videoSrc} playing controls />}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default VideoPlayer;
