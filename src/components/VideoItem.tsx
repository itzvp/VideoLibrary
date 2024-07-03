// // src/components/VideoItem.tsx
// import React, { useState } from "react";
// import { Video } from "@/types/Video";
// import VideoPlayer from "./VideoPlayer";

// interface VideoItemProps {
//   video: Video;
//   onToggleBookmark: (id: string) => void;
// }

// const VideoItem: React.FC<VideoItemProps> = ({ video, onToggleBookmark }) => {
//   const [isPlaying, setIsPlaying] = useState(false);

//   return (
//     <div>
//       <h3>{video.title}</h3>
//       <button onClick={() => setIsPlaying(true)}>Play</button>
//       <button onClick={() => onToggleBookmark(video.id)}>
//         {video.isBookmarked ? "Unbookmark" : "Bookmark"}
//       </button>
//       {isPlaying && (
//         <VideoPlayer url={video.url} onClose={() => setIsPlaying(false)} />
//       )}
//     </div>
//   );
// };

// export default VideoItem;

// src/components/VideoItem.tsx
import React, { useState } from "react";
import { Video } from "@/types/Video";
import VideoPlayer from "./VideoPlayer";

interface VideoItemProps {
  video: Video;
  onToggleBookmark: (id: string) => void;
}

const VideoItem: React.FC<VideoItemProps> = ({ video, onToggleBookmark }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <h3>{video.title}</h3>
      <button onClick={() => setIsPlaying(true)}>Play</button>
      <button onClick={() => onToggleBookmark(video.id)}>
        {video.isBookmarked ? "Unbookmark" : "Bookmark"}
      </button>
      {isPlaying && (
        <VideoPlayer
          url={video.url}
          file={video.file}
          onClose={() => setIsPlaying(false)}
        />
      )}
    </div>
  );
};

export default VideoItem;
