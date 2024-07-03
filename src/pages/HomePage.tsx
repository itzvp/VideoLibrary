// // src/pages/HomePage.tsx
// import React, { useState } from "react";
// import { Video } from "@/types/Video";
// import VideoItem from "@/components/VideoItem";

// interface HomePageProps {
//   videos: Video[];
//   onAddVideo: (video: Video) => void;
//   onToggleBookmark: (id: string) => void;
// }

// const HomePage: React.FC<HomePageProps> = ({
//   videos,
//   onAddVideo,
//   onToggleBookmark,
// }) => {
//   const [title, setTitle] = useState("");
//   const [url, setUrl] = useState("");

//   const handleAddVideo = () => {
//     const newVideo: Video = {
//       id: Math.random().toString(36).substr(2, 9),
//       title,
//       url,
//       isBookmarked: false,
//     };
//     onAddVideo(newVideo);
//     setTitle("");
//     setUrl("");
//   };

//   return (
//     <div>
//       <h1>All Videos</h1>
//       <div>
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="URL"
//           value={url}
//           onChange={(e) => setUrl(e.target.value)}
//         />
//         <button onClick={handleAddVideo}>Add Video</button>
//       </div>
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

// export default HomePage;

// src/pages/HomePage.tsx
// "use client";
// import React, { useState } from "react";
// import { Video } from "@/types/Video";
// import VideoItem from "@/components/VideoItem";

// interface HomePageProps {
//   videos: Video[];
//   onAddVideo: (video: Video) => void;
//   onToggleBookmark: (id: string) => void;
// }

// const HomePage: React.FC<HomePageProps> = ({
//   videos,
//   onAddVideo,
//   onToggleBookmark,
// }) => {
//   const [title, setTitle] = useState("");
//   const [url, setUrl] = useState("");
//   const [file, setFile] = useState<File | undefined>(undefined);

//   const handleAddVideo = () => {
//     const newVideo: Video = {
//       id: Math.random().toString(36).substr(2, 9),
//       title,
//       url,
//       file,
//       isBookmarked: false,
//     };
//     onAddVideo(newVideo);
//     setTitle("");
//     setUrl("");
//     setFile(undefined);
//   };

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files && event.target.files[0]) {
//       setFile(event.target.files[0]);
//       setUrl(""); // Clear the URL if a file is selected
//     }
//   };

//   return (
//     <div>
//       <h1>All Videos</h1>
//       <div>
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="URL"
//           value={url}
//           onChange={(e) => setUrl(e.target.value)}
//         />
//         <input type="file" accept="video/*" onChange={handleFileChange} />
//         <button onClick={handleAddVideo}>Add Video</button>
//       </div>
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

// export default HomePage;

import React, { useState } from "react";
import { Video } from "@/types/Video";
import VideoItem from "@/components/VideoItem";

interface HomePageProps {
  videos?: Video[]; // Make videos optional and provide a default empty array
  onAddVideo: (video: Video) => void;
  onToggleBookmark: (id: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({
  videos = [], // Default value for videos
  onAddVideo,
  onToggleBookmark,
}) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [file, setFile] = useState<File | undefined>(undefined);

  const handleAddVideo = () => {
    const newVideo: Video = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      url,
      file,
      isBookmarked: false,
    };
    onAddVideo(newVideo);
    setTitle("");
    setUrl("");
    setFile(undefined);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
      setUrl("");
    } else {
      setFile(undefined);
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
          disabled={!!file}
        />
        <input type="file" accept="video/*" onChange={handleFileChange} />
        <button onClick={handleAddVideo}>Add Video</button>
      </div>
      {videos.length > 0 ? (
        videos.map((video) => (
          <VideoItem
            key={video.id}
            video={video}
            onToggleBookmark={onToggleBookmark}
          />
        ))
      ) : (
        <p>No videos available</p>
      )}
    </div>
  );
};

export default HomePage;
