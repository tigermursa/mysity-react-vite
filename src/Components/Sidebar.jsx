import { NavLink, useLocation } from "react-router-dom";
import {
  FaGear,
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
    <aside className="bg-blue-950 p-4 lg:p-5 col-span-2 h-[100vh] sticky top-0 left-0 overflow-auto w-[70px] md:w-[200px] lg:w-[250px]">
      <ul className="flex flex-col text-gray-500 font-bold font-mono text-3xl md:text-lg">
        <NavLink
          to="/dashboard"
          className={`  mb-3 hover:text-white flex items-center gap-2 ${
            location.pathname.startsWith("/dashboard") ? "text-white" : ""
          }`}
        >
          <FaHouseChimneyWindow /> <span className="hidden md:block">Home</span>
        </NavLink>
        <NavLink
          to="/dev"
          className={`mb-3 hover:text-white flex items-center gap-2 ${
            location.pathname.startsWith("/dev") ? "text-white" : ""
          }`}
        >
          <FaWhmcs />
          <span className="hidden md:block">Development</span>
        </NavLink>
        <NavLink
          to="/ui"
          className={`mb-3 hover:text-white flex items-center gap-2 ${
            location.pathname.startsWith("/ui") ? "text-white" : ""
          }`}
        >
          <FaWandSparkles />
          <span className="hidden md:block">UI/UX</span>
        </NavLink>
        <NavLink
          to="/learn"
          className={`mb-3 hover:text-white flex items-center gap-2 ${
            location.pathname.startsWith("/learn") ? "text-white" : ""
          }`}
        >
          <FaUserGraduate /> <span className="hidden md:block"> Learning</span>
        </NavLink>
        <NavLink
          to="/ai"
          className={`mb-3 hover:text-white flex items-center gap-2 ${
            location.pathname.startsWith("/ai") ? "text-white" : ""
          }`}
        >
          <FaGithubAlt />
          <span className="hidden md:block"> AI</span>
        </NavLink>
        <NavLink
          to="/git"
          className={`mb-3 hover:text-white flex items-center gap-2 ${
            location.pathname.startsWith("/git") ? "text-white" : ""
          }`}
        >
          <FaSquareGithub />
          <span className="hidden md:block"> GitHub</span>
        </NavLink>
        <NavLink
          to="/news"
          className={`mb-3 hover:text-white flex items-center gap-2 ${
            location.pathname.startsWith("/news") ? "text-white" : ""
          }`}
        >
          <FaGlobe /> <span className="hidden md:block">News</span>
        </NavLink>
        <NavLink
          to="/google"
          className={`mb-3 hover:text-white flex items-center gap-2 ${
            location.pathname.startsWith("/google") ? "text-white" : ""
          }`}
        >
          <FaGoogle />
          <span className="hidden md:block">Google</span>
        </NavLink>
        <NavLink
          to="/resume"
          className={`mb-3 hover:text-white flex items-center gap-2 ${
            location.pathname.startsWith("/resume") ? "text-white" : ""
          }`}
        >
          <FaIdCard />
          <span className="hidden md:block">Resume</span>
        </NavLink>
        <NavLink
          to="/search"
          className={`mb-3 hover:text-white flex items-center gap-2 ${
            location.pathname.startsWith("/search") ? "text-white" : ""
          }`}
        >
          <FaSistrix /> <span className="hidden md:block">Search</span>
        </NavLink>
        <NavLink
          to="/others"
          className={`mb-3 hover:text-white flex items-center gap-2 ${
            location.pathname.startsWith("/others") ? "text-white" : ""
          }`}
        >
          <FaTag /> <span className="hidden md:block"> Others</span>
        </NavLink>
        <NavLink
          to="/add"
          className={`mb-3 hover:text-white flex items-center gap-2 ${
            location.pathname.startsWith("/add") ? "text-white" : ""
          }`}
        >
          <FaPlus className="" /> <span className="hidden md:block ">Add website</span>
        </NavLink>
        <NavLink
          to="/test"
          className={`mb-3 hover:text-white flex items-center gap-2 ${
            location.pathname.startsWith("/test") ? "text-white" : ""
          }`}
        >
          <FaRegEye />
          <span className="hidden md:block"> All</span>
        </NavLink>
        <NavLink
          to="/control"
          className={`mb-3 hover:text-white flex items-center gap-2 ${
            location.pathname.startsWith("/control") ? "text-white " : ""
          }`}
        >
          <FaGear
            className={`${
              location.pathname.startsWith("/control") ? "animate-spin " : ""
            }`}
          />
          <span className="hidden md:block"> Control Room</span>
        </NavLink>
      </ul>
    </aside>
  );
};

export default Sidebar;
