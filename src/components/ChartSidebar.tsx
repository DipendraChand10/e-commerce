import React, { useState } from "react";
import { RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { AiFillCustomerService } from "react-icons/ai";
import { MdOutlinePayment } from "react-icons/md";
import { Link } from "react-router-dom";
import "../styles/Admin.css";
interface ChartSidebar {
  url: string;
  text: string;
  Icon: React.ComponentType;
}
const chartSidebar: ChartSidebar[] = [
  { url: "/admin/dashboard", text: "Dashboard", Icon: RiDashboardFill },
  { url: "/admin/products", text: "Products", Icon: RiShoppingBag3Fill },
  { url: "/admin/customers", text: "Customers", Icon: AiFillCustomerService },
  { url: "/admin/transaction", text: "Transaction", Icon: MdOutlinePayment },
];
const ChartSidebar = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  
  return (
    <div>  <nav className="icon-section">
    <h5>Chart</h5>
    <ul>
      {chartSidebar.map(({ url, text, Icon }) => (
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
  </nav></div>
  )
}

export default ChartSidebar