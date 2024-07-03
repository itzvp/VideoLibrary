"use client";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HomePage from "@/pages/HomePage";
import BookmarkedPage from "@/pages/BookmarkedPage";
import { Video } from "@/types/Video";

const App: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  const handleAddVideo = (video: Video) => {
    setVideos([...videos, video]);
  };

  const handleToggleBookmark = (id: string) => {
    setVideos(
      videos.map((video) =>
        video.id === id
          ? { ...video, isBookmarked: !video.isBookmarked }
          : video
      )
    );
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              videos={videos}
              onAddVideo={handleAddVideo}
              onToggleBookmark={handleToggleBookmark}
            />
          }
        />
        <Route
          path="/bookmarked"
          element={
            <BookmarkedPage
              videos={videos}
              onToggleBookmark={handleToggleBookmark}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
