// "use client";
// import dynamic from "next/dynamic";
// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "@/components/Navbar";
// import HomePage from "@/pages/HomePage";
// import BookmarkedPage from "@/pages/BookmarkedPage";
// import { Video } from "@/types/Video";

// const App: React.FC = () => {
//   const [videos, setVideos] = useState<Video[]>([]);

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

//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <HomePage
//               videos={videos}
//               onAddVideo={handleAddVideo}
//               onToggleBookmark={handleToggleBookmark}
//             />
//           }
//         />
//         <Route
//           path="/bookmarked"
//           element={
//             <BookmarkedPage
//               videos={videos}
//               onToggleBookmark={handleToggleBookmark}
//             />
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HomePage from "@/pages/HomePage";
import BookmarkedPage from "@/pages/BookmarkedPage";
import { Video } from "@/types/Video";
import { useRouter } from "next/navigation";

const App: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const router = useRouter();

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

  const renderPage = () => {
    const path = router.pathname;

    switch (path) {
      case "/":
        return (
          <HomePage
            videos={videos}
            onAddVideo={handleAddVideo}
            onToggleBookmark={handleToggleBookmark}
          />
        );
      case "/bookmarked":
        return (
          <BookmarkedPage
            videos={videos}
            onToggleBookmark={handleToggleBookmark}
          />
        );
      default:
        return (
          <HomePage
            videos={videos}
            onAddVideo={handleAddVideo}
            onToggleBookmark={handleToggleBookmark}
          />
        );
    }
  };

  return (
    <div>
      <Navbar />
      {renderPage()}
    </div>
  );
};

export default App;
