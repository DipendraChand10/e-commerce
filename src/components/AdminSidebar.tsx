import React, { useState } from "react";
import { RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { AiFillCustomerService } from "react-icons/ai";
import { MdOutlinePayment } from "react-icons/md";
import { Link } from "react-router-dom";
import "../styles/Admin.css";
import ChartSidebar from "./ChartSidebar";


// Interface for Dashboard Item
interface DashboardItem {
  url: string;
  text: string;
  Icon: React.ComponentType;
}

// Dashboard items array with TypeScript
const dashboardItems: DashboardItem[] = [
  { url: "/admin/dashboard", text: "Dashboard", Icon: RiDashboardFill },
  { url: "/admin/products", text: "Products", Icon: RiShoppingBag3Fill },
  { url: "/admin/customers", text: "Customers", Icon: AiFillCustomerService },
  { url: "/admin/transaction", text: "Transaction", Icon: MdOutlinePayment },
];

const AdminSidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <div className="admin-container"> 
  
      <aside className="sidebar">
        <div className="sidebar-container">
          <div className="logo">
            <h2>Logo.</h2>
          </div>
          <nav className="icon-section">
            <h5>Dashboard</h5>
            <ul>
              {dashboardItems.map(({ url, text, Icon }) => (
                <li
                  key={url}
                  className={`menu-item ${activeItem === url ? "active" : ""}`}
                  onClick={() => setActiveItem(url)} 
                >
                  <Link to={url} className="menu-link">
                    <div className="icon">
                      <Icon />
                    </div>
                    <span>{text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ChartSidebar/>
        </div>
      </aside>  
    </div>
  );
};

export default AdminSidebar;
