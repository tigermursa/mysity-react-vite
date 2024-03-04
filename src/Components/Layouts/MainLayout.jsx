import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";

const MainLayout = () => {
  return (
    <div className="grid grid-cols-12 border">
      <Sidebar />
      <div className="col-span-10 flex mx-auto ">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
