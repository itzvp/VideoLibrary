import React from "react";
import { Video } from "@/types/Video";
import VideoItem from "@/components/VideoItem";

interface BookmarkedPageProps {
  videos?: Video[]; // Make videos optional and provide a default empty array
  onToggleBookmark: (id: string) => void;
}

const BookmarkedPage: React.FC<BookmarkedPageProps> = ({
  videos = [], // Default value for videos
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
        <p>No bookmarked videos available</p>
      )}
    </div>
  );
};

export default BookmarkedPage;
