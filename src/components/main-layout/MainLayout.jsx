import { Outlet } from "react-router-dom";
import Navbar from "../menu/Navbar";

const MainLayout = () => {
  return (
    <div className="mx-5 lg:max-w-7xl lg:mx-auto worksans mt-10 mb-20">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
