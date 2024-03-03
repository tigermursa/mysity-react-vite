import { NavLink, useLocation } from "react-router-dom";
import {
  FaGithubAlt,
  FaGlobe,
  FaGoogle,
  FaHouseChimneyWindow,
  FaIdCard,
  FaPlus,
  FaRegEye,
  FaSistrix,
  FaSquareGithub,
  FaTag,
  FaUserGraduate,
  FaWandSparkles,
  FaWhmcs,
} from "react-icons/fa6";

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="bg-blue-950 p-4 lg:p-5 col-span-2 h-[100vh] sticky top-0 left-0 overflow-auto">
      <ul className="flex flex-col text-gray-500 font-bold font-mono ">
        <NavLink
          to="/dashboard"
          className={`mb-3 hover:text-white flex items-center gap-2 ${
            location.pathname.startsWith("/dashboard") ? "text-white" : ""
          }`}
        >
          <FaHouseChimneyWindow /> Home
        </NavLink>
        <NavLink
          to="/dev"
          className={`mb-3 hover:text-white flex items-center gap-2 ${
            location.pathname.startsWith("/dev") ? "text-white" : ""
          }`}
        >
          <FaWhmcs />
          Development
        </NavLink>
        <NavLink
          to="/ui"
          className={`mb-3 hover:text-white flex items-center gap-2 ${
            location.pathname.startsWith("/ui") ? "text-white" : ""
          }`}
        >
          <FaWandSparkles />
          UI/UX
        </NavLink>
        <NavLink
          to="/learn"
          className={`mb-3 hover:text-white flex items-center gap-2 ${
            location.pathname.startsWith("/learn") ? "text-white" : ""
          }`}
        >
          <FaUserGraduate /> Learning
        </NavLink>
        <NavLink
          to="/ai"
          className={`mb-3 hover:text-white flex items-center gap-2 ${
            location.pathname.startsWith("/ai") ? "text-white" : ""
          }`}
        >
          <FaGithubAlt />
          AI
        </NavLink>
        <NavLink 
          to="/git"
          className={`mb-3 hover:text-white flex items-center gap-2 ${
            location.pathname.startsWith("/git") ? "text-white" : ""
          }`}
        >
          <FaSquareGithub />
          GitHub
        </NavLink>
        <NavLink
          to="/news"
          className={`mb-3 hover:text-white flex items-center gap-2 ${
            location.pathname.startsWith("/news") ? "text-white" : ""
          }`}
        >
          <FaGlobe /> News
        </NavLink>
        <NavLink
          to="/google"
          className={`mb-3 hover:text-white flex items-center gap-2 ${
            location.pathname.startsWith("/google") ? "text-white" : ""
          }`}
        >
          <FaGoogle />
          Google
        </NavLink>
        <NavLink
          to="/resume"
          className={`mb-3 hover:text-white flex items-center gap-2 ${
            location.pathname.startsWith("/resume") ? "text-white" : ""
          }`}
        >
          <FaIdCard />
          Resume
        </NavLink>
        <NavLink
          to="/search"
          className={`mb-3 hover:text-white flex items-center gap-2 ${
            location.pathname.startsWith("/search") ? "text-white" : ""
          }`}
        >
          <FaSistrix /> Search
        </NavLink>
        <NavLink
          to="/others"
          className={`mb-3 hover:text-white flex items-center gap-2 ${
            location.pathname.startsWith("/others") ? "text-white" : ""
          }`}
        >
          <FaTag /> Others
        </NavLink>
        <NavLink
          to="/add"
          className={`mb-3 hover:text-white flex items-center gap-2 ${
            location.pathname.startsWith("/add") ? "text-white" : ""
          }`}
        >
          <FaPlus /> Add website
        </NavLink>
        <NavLink
          to="/test"
          className={`mb-3 hover:text-white flex items-center gap-2 ${
            location.pathname.startsWith("/test") ? "text-white" : ""
          }`}
        >
          <FaRegEye /> Show
        </NavLink>
      </ul>
    </aside>
  );
};

export default Sidebar;
