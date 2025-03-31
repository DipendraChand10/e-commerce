import AdminSidebar from "../components/AdminSidebar";
import "../styles/dashboard.css";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import userImage from "../assets/user.webp";
const dashboard = () => {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users docs" />
          <FaRegBell />
          <img src={userImage} alt="User" />
        </div>
      </main>
    </div>
  );
};

export default dashboard;
