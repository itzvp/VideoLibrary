import React, { useState } from "react";
import { Video } from "../types/Video";

interface AddVideoProps {
  onAddVideo: (video: Video) => void;
}

const AddVideo: React.FC<AddVideoProps> = ({ onAddVideo }) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const handleAddVideo = () => {
    if (title && url) {
      const newVideo: Video = {
        id: Date.now().toString(),
        title,
        url,
        isBookmarked: false,
      };
      onAddVideo(newVideo);
      setTitle("");
      setUrl("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Video Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Video URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={handleAddVideo}>Add Video</button>
    </div>
  );
};

export default AddVideo;
