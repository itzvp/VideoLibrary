"use client";
import React, { useState } from "react";
import { Video } from "../types/Video";
import VideoItem from "../components/VideoItem";

interface HomePageProps {
  videos: Video[];
  onAddVideo: (video: Video) => void;
  onToggleBookmark: (id: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({
  videos,
  onAddVideo,
  onToggleBookmark,
}) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [file, setFile] = useState<File | undefined>(undefined);
  const [error, setError] = useState<string>("");

  const handleAddVideo = () => {
    if (!url && !file) {
      setError("Please add a video URL or file");
      return;
    }

    const newVideo: Video = {
      id: Math.random().toString(36).substring(2, 11),
      title,
      url,
      file,
      isBookmarked: false,
    };
    onAddVideo(newVideo);
    setTitle("");
    setUrl("");
    setFile(undefined);
    setError("");
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
      setUrl(""); // Clear the URL if a file is selected
    }
  };

  return (
    <div>
      <h1>All Videos</h1>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <input type="file" accept="video/*" onChange={handleFileChange} />
        <button onClick={handleAddVideo}>Add Video</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
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

export default HomePage;
