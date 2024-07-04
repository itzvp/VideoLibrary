// import React from "react";
// // import { Link } from "react-router-dom";
// import Link from "next/link";

// const Navbar: React.FC = () => {
//   return (
//     <nav>
//       <Link href="/">Home</Link>
//       <Link href="/bookmarked">Bookmarked</Link>
//     </nav>
//   );
// };

// export default Navbar;

// src/components/Navbar.tsx
import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      {/* <Link href="/bookmarked">Bookmarked</Link> */}
    </nav>
  );
};

export default Navbar;

// import React from "react";
// // import { Link, useNavigate } from "react-router-dom";
// import { Link, useNavigate } from "next/navigation";

// interface NavbarProps {
//   onViewChange: (view: "all" | "bookmarked") => void;
// }

// const Navbar: React.FC<NavbarProps> = ({ onViewChange }) => {
//   const navigate = useNavigate();

//   const handleNavigation = (view: "all" | "bookmarked") => {
//     onViewChange(view);
//     navigate(view === "all" ? "/" : "/bookmarked");
//   };

//   return (
//     <nav className="bg-gray-800 py-4">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-center items-center space-x-8">
//           <button
//             className="text-white hover:text-gray-300"
//             onClick={() => handleNavigation("all")}
//           >
//             Home
//           </button>
//           <button
//             className="text-white hover:text-gray-300"
//             onClick={() => handleNavigation("bookmarked")}
//           >
//             Bookmarked
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar: React.FC = () => {
//   return (
//     <nav className="bg-gray-800 py-4">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-center items-center space-x-8">
//           <Link to="/" className="text-white hover:text-gray-300">
//             Hom
//           </Link>
//           <Link to="/bookmarked" className="text-white hover:text-gray-300">
//             Bookmarked
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React from "react";
// import { usePathname } from "next/navigation";
// import Link from "next/link";

// const Navbar: React.FC = () => {
//   const pathname = usePathname();
//   return (
//     <nav>
//       <Link href="/" className={`link ${pathname === "/" ? "active" : ""}`}>
//         Home
//       </Link>
//       <Link
//         href="/bookmarked"
//         className={`link ${pathname === "/bookmarked" ? "active" : ""}`}
//       >
//         Bookmarked
//       </Link>
//     </nav>
//   );
// };

// export default Navbar;
