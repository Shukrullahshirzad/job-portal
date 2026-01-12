import { Link, useLocation } from "react-router-dom";

const Navlinks = () => {
  const links = [
    { name: "Find Jobs", url: "find-jobs" },
    { name: "Find Talent", url: "find-talent" },
    { name: "Post a Job", url: "post-job" },
    { name: "About Us", url: "about" },
  ];
  const location = useLocation();
  return (
    <nav className="flex items-center gap-6">
      {links.map((link, index) => (
        <div
          key={index}
          className={`border-b-2 ${
            location.pathname === `/${link.url}`
              ? "border-bright-sun-500"
              : "border-transparent"
          } hover:border-bright-sun-500`}
        >
          <Link to={`/${link.url}`} className="nav-link">
            {link.name}
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default Navlinks;
