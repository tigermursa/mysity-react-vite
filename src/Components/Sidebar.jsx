import { NavLink, useLocation } from "react-router-dom";
import {
  FaCloudArrowUp,
  FaGear,
  FaGithubAlt,
  FaGlobe,
  FaGoogle,
  FaHeartCircleCheck,
  FaHouseChimneyWindow,
  FaIdCard,
  FaPlus,
  FaRegEye,
  FaRocket,
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
          <FaHouseChimneyWindow
            className={`${
              location.pathname.startsWith("/dashboard") ? "animate-pulse " : ""
            }`}
          />
          <span className="hidden md:block">Home</span>
        </NavLink>
        <NavLink
          to="/dev"
          className={`mb-3 hover:text-white flex items-center gap-2 ${
            location.pathname.startsWith("/dev") ? "text-white" : ""
          }`}
        >
          <FaWhmcs
            className={`${
              location.pathname.startsWith("/dev") ? "animate-pulse " : ""
            }`}
          />
          <span className="hidden md:block">Development</span>
        </NavLink>
        <NavLink
          to="/deploy"
          className={`mb-3 hover:text-white flex items-center gap-2 ${
            location.pathname.startsWith("/deploy") ? "text-white" : ""
          }`}
        >
          <FaCloudArrowUp
            className={`${
              location.pathname.startsWith("/deploy") ? "animate-pulse " : ""
            }`}
          />
          <span className="hidden md:block">Deployment</span>
        </NavLink>
        <NavLink
          to="/ui"
          className={`mb-3 hover:text-white flex items-center gap-2 ${
            location.pathname.startsWith("/ui") ? "text-white" : ""
          }`}
        >
          <FaWandSparkles
            className={`${
              location.pathname.startsWith("/ui") ? "animate-pulse " : ""
            }`}
          />
          <span className="hidden md:block">UI/UX</span>
        </NavLink>
        <NavLink
          to="/learn"
          className={`mb-3 hover:text-white flex items-center gap-2 ${
            location.pathname.startsWith("/learn") ? "text-white" : ""
          }`}
        >
          <FaUserGraduate
            className={`${
              location.pathname.startsWith("/learn") ? "animate-pulse " : ""
            }`}
          />{" "}
          <span className="hidden md:block"> Learning</span>
        </NavLink>
        <NavLink
          to="/ai"
          className={`mb-3 hover:text-white flex items-center gap-2 ${
            location.pathname.startsWith("/ai") ? "text-white" : ""
          }`}
        >
          <FaGithubAlt
            className={`${
              location.pathname.startsWith("/ai") ? "animate-pulse " : ""
            }`}
          />
          <span className="hidden md:block"> AI</span>
        </NavLink>
        <NavLink
          to="/git"
          className={`mb-3 hover:text-white flex items-center gap-2 ${
            location.pathname.startsWith("/git") ? "text-white" : ""
          }`}
        >
          <FaSquareGithub
            className={`${
              location.pathname.startsWith("/git") ? "animate-pulse " : ""
            }`}
          />
          <span className="hidden md:block"> GitHub</span>
        </NavLink>
        <NavLink
          to="/news"
          className={`mb-3 hover:text-white flex items-center gap-2 ${
            location.pathname.startsWith("/news") ? "text-white" : ""
          }`}
        >
          <FaGlobe
            className={`${
              location.pathname.startsWith("/news") ? "animate-pulse " : ""
            }`}
          />{" "}
          <span className="hidden md:block">News</span>
        </NavLink>
        <NavLink
          to="/google"
          className={`mb-3 hover:text-white flex items-center gap-2 ${
            location.pathname.startsWith("/google") ? "text-white" : ""
          }`}
        >
          <FaGoogle
            className={`${
              location.pathname.startsWith("/google") ? "animate-pulse " : ""
            }`}
          />
          <span className="hidden md:block">Google</span>
        </NavLink>
        <NavLink
          to="/resume"
          className={`mb-3 hover:text-white flex items-center gap-2 ${
            location.pathname.startsWith("/resume") ? "text-white" : ""
          }`}
        >
          <FaIdCard
            className={`${
              location.pathname.startsWith("/resume") ? "animate-pulse " : ""
            }`}
          />
          <span className="hidden md:block">Resume</span>
        </NavLink>
        <NavLink
          to="/my-hosted"
          className={`mb-3 hover:text-white flex items-center gap-2 ${
            location.pathname.startsWith("/my-hosted") ? "text-white" : ""
          }`}
        >
          <FaRocket
            className={`${
              location.pathname.startsWith("/my-hosted") ? "animate-pulse " : ""
            }`}
          />{" "}
          <span className="hidden md:block">My Hosted</span>
        </NavLink>
        <NavLink
          to="/cool"
          className={`mb-3 hover:text-white flex items-center gap-2 ${
            location.pathname.startsWith("/cool") ? "text-white" : ""
          }`}
        >
          <FaHeartCircleCheck
            className={`${
              location.pathname.startsWith("/cool") ? "animate-pulse " : ""
            }`}
          />{" "}
          <span className="hidden md:block">Cool sites</span>
        </NavLink>
        <NavLink
          to="/others"
          className={`mb-3 hover:text-white flex items-center gap-2 ${
            location.pathname.startsWith("/others") ? "text-white" : ""
          }`}
        >
          <FaTag
            className={`${
              location.pathname.startsWith("/others") ? "animate-pulse " : ""
            }`}
          />{" "}
          <span className="hidden md:block"> Others</span>
        </NavLink>
        <NavLink
          to="/add"
          className={`mb-3 hover:text-white flex items-center gap-2 ${
            location.pathname.startsWith("/add") ? "text-white" : ""
          }`}
        >
          <FaPlus
            className={`${
              location.pathname.startsWith("/add") ? "animate-pulse " : ""
            }`}
          />
          <span className="hidden md:block ">Add website</span>
        </NavLink>
        <NavLink
          to="/test"
          className={`mb-3 hover:text-white flex items-center gap-2 ${
            location.pathname.startsWith("/test") ? "text-white" : ""
          }`}
        >
          <FaRegEye
            className={`${
              location.pathname.startsWith("/test") ? "animate-pulse " : ""
            }`}
          />
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
