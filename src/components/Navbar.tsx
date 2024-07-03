// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar: React.FC = () => {
//   return (
//     <nav>
//       <Link to="/">Home</Link>
//       <Link to="/bookmarked">Bookmarked</Link>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/bookmarked">Bookmarked</Link>
    </nav>
  );
};

export default Navbar;
