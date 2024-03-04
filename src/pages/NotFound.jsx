import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex h-screen justify-center items-center  flex-col">
      <h1 className="text-5xl text-red-600 font-semibold ">
        404! not found <span className="animate-pulse">😔</span>{" "}
      </h1>
      <NavLink>
        <button className="btn-grad mt-10"> Back to Home</button>
      </NavLink>
    </div>
  );
};

export default NotFound;
