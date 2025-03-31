import React, { useState } from "react";
import { FaStopwatch, FaToggleOff } from "react-icons/fa";
import { RiCoupon3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "../styles/Admin.css";
interface AppSidebar {
  url: string;
  text: string;
  Icon: React.ComponentType;
}
const appSidebar: AppSidebar[] = [
  { url: "/admin/dashboard", text: "Stopwatch", Icon: FaStopwatch },
  { url: "/admin/products", text: "Coupon", Icon: RiCoupon3Fill },
  { url: "/admin/customers", text: "Toss", Icon: FaToggleOff },
];
const AppSidebar = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <div>
      {" "}
      <nav className="icon-section">
        <h5>APPS</h5>
        <ul>
          {appSidebar.map(({ url, text, Icon }) => (
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
    </div>
  );
};

export default AppSidebar;
