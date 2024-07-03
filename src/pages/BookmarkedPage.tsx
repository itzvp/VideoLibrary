// src/pages/BookmarkedPage.tsx
import React from "react";
import { Video } from "@/types/Video";
import VideoItem from "@/components/VideoItem";

interface BookmarkedPageProps {
  videos: Video[];
  onToggleBookmark: (id: string) => void;
}

const BookmarkedPage: React.FC<BookmarkedPageProps> = ({
  videos,
  onToggleBookmark,
}) => {
  const bookmarkedVideos = videos.filter((video) => video.isBookmarked);

  return (
    <div>
      <h1>Bookmarked Videos</h1>
      {bookmarkedVideos.length > 0 ? (
        bookmarkedVideos.map((video) => (
          <VideoItem
            key={video.id}
            video={video}
            onToggleBookmark={onToggleBookmark}
          />
        ))
      ) : (
        <p>No bookmarked videos</p>
      )}
    </div>
  );
};

export default BookmarkedPage;
