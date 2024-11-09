import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import { ToastContainer } from "react-toastify";

const Main = () => {
  return (
    <div>
      <Header />

      <Outlet />
    </div>
  );
};

export default Main;
