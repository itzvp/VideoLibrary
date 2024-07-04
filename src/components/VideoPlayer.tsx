import React from "react";
import ReactPlayer from "react-player";

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
