import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Main = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Outlet />
    </div>
  );
};

export default Main;
