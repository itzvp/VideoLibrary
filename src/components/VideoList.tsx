// import React from "react";
// import { Video } from "../types/Video";
// import VideoItem from "./VideoItem";

// interface VideoListProps {
//   videos: Video[];
//   onToggleBookmark: (id: string) => void;
// }

// const VideoList: React.FC<VideoListProps> = ({ videos, onToggleBookmark }) => {
//   return (
//     <div>
//       {videos.map((video) => (
//         <VideoItem
//           key={video.id}
//           video={video}
//           onToggleBookmark={onToggleBookmark}
//         />
//       ))}
//     </div>
//   );
// };

// export default VideoList;

import React from "react";
import { Video } from "../types/Video";
import VideoItem from "./VideoItem";

interface VideoListProps {
  videos: Video[];
  onToggleBookmark: (id: string) => void;
}

const VideoList: React.FC<VideoListProps> = ({ videos, onToggleBookmark }) => {
  return (
    <div>
      {videos.map((video) => (
        <VideoItem
          key={video.id}
          video={video}
          onToggleBookmark={onToggleBookmark}
        />
      ))}
    </div>
  );
};

export default VideoList;
