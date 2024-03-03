import { NavLink } from "react-router-dom";
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
  return (
    <aside className="bg-blue-950 p-4 lg:p-5 col-span-2 h-[100vh] sticky top-0 left-0 overflow-auto">
      <NavLink>
        <ul className="flex flex-col text-gray-500 font-bold font-mono ">
          <NavLink
            className={`mb-3 hover:text-white flex items-center gap-2  `}
            href={"/"}
          >
            <FaHouseChimneyWindow /> Home
          </NavLink>
          <NavLink
            className={`mb-3 hover:text-white flex items-center gap-2  `}
            href={"/dashboard/development"}
          >
            <FaWhmcs />
            Development
          </NavLink>
          <NavLink
            className={`mb-3 hover:text-white flex items-center gap-2   `}
            href={"/dashboard/ui"}
          >
            <FaWandSparkles />
            UI/UX
          </NavLink>
          <NavLink
            className={`mb-3 hover:text-white flex items-center gap-2  `}
            href={"/dashboard/learn"}
          >
            <FaUserGraduate /> Learning
          </NavLink>
          <NavLink
            className={`mb-3 hover:text-white flex items-center gap-2  `}
            href={"/dashboard/ai"}
          >
            <FaGithubAlt />
            AI
          </NavLink>
          <NavLink
            className={`mb-3 hover:text-white flex items-center gap-2  `}
            href={"/dashboard/github"}
          >
            <FaSquareGithub />
            GitHub
          </NavLink>

          <NavLink
            className={`mb-3 hover:text-white flex items-center gap-2  `}
            href={"/dashboard/news"}
          >
            <FaGlobe /> News
          </NavLink>
          <NavLink
            className={`mb-3 hover:text-white flex items-center gap-2   `}
            href={"/dashboard/google"}
          >
            <FaGoogle />
            Google
          </NavLink>
          <NavLink
            className={`mb-3 hover:text-white flex items-center gap-2  `}
            href={"/dashboard/resume"}
          >
            <FaIdCard />
            Resume
          </NavLink>
          <NavLink
            className={`mb-3 hover:text-white flex items-center gap-2  `}
            href={"/dashboard/search"}
          >
            <FaSistrix /> Search
          </NavLink>
          <NavLink
            className={`mb-3 hover:text-white flex items-center gap-2   `}
            href={"/dashboard/others"}
          >
            <FaTag /> Others
          </NavLink>
          <NavLink
            className={`mb-3 hover:text-white flex items-center gap-2  `}
            href={"/dashboard/add"}
          >
            <FaPlus /> Add website
          </NavLink>
          <NavLink
            className={`mb-3 hover:text-white flex items-center gap-2  `}
            href={"/dashboard/show"}
          >
            <FaRegEye /> Show
          </NavLink>
        </ul>
      </NavLink>
    </aside>
  );
};

export default Sidebar;
