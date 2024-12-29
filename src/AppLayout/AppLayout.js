import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { ToastContainer } from "react-toastify";

function AppLayout() {
  return (
    <div>
      <Header />
      <NavBar />
      <Outlet />
      <Footer />
      <ToastContainer position="top-center" />
    </div>
  );
}

export default AppLayout;
