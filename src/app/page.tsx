"use client";
import dynamic from "next/dynamic";
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
// "use client";
// import React, { useState } from "react";
// import Navbar from "@/components/Navbar";
// import HomePage from "@/pages/HomePage";
// import BookmarkedPage from "@/pages/BookmarkedPage";
// import { Video } from "@/types/Video";
// import { usePathname } from "next/navigation";

// const App: React.FC = () => {
//   const [videos, setVideos] = useState<Video[]>([]);
//   const path = usePathname(); // Access path directly in the component

//   const handleAddVideo = (video: Video) => {
//     setVideos([...videos, video]);
//   };

//   const handleToggleBookmark = (id: string) => {
//     setVideos(
//       videos.map((video) =>
//         video.id === id
//           ? { ...video, isBookmarked: !video.isBookmarked }
//           : video
//       )
//     );
//   };

//   // Render content based on the path directly in the component
//   let pageContent;
//   switch (path) {
//     case "/":
//       pageContent = (
//         <HomePage
//           videos={videos}
//           onAddVideo={handleAddVideo}
//           onToggleBookmark={handleToggleBookmark}
//         />
//       );
//       break;
//     case "/bookmarked":
//       pageContent = (
//         <BookmarkedPage
//           videos={videos}
//           onToggleBookmark={handleToggleBookmark}
//         />
//       );
//       break;
//     default:
//       pageContent = (
//         <HomePage
//           videos={videos}
//           onAddVideo={handleAddVideo}
//           onToggleBookmark={handleToggleBookmark}
//         />
//       );
//       break;
//   }

//   return (
//     <div>
//       <Navbar />
//       {pageContent}
//     </div>
//   );
// };

// export default App;
