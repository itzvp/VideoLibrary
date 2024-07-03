import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/bookmarked">Bookmarked</Link>
    </nav>
  );
};

export default Navbar;

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
