import React, { useState } from "react";
import { FaChartBar, FaChartPie, FaChartLine } from "react-icons/fa";

import { Link } from "react-router-dom";
import "../styles/Admin.css";
interface ChartSidebar {
  url: string;
  text: string;
  Icon: React.ComponentType;
}
const chartSidebar: ChartSidebar[] = [
  { url: "/admin/dashboard", text: "Bar", Icon: FaChartBar },
  { url: "/admin/products", text: "Pie", Icon: FaChartPie },
  { url: "/admin/customers", text: "Line", Icon: FaChartLine },
];
const ChartSidebar = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <div>
      {" "}
      <nav className="icon-section">
        <h5>CHARTS</h5>
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
      </nav>
    </div>
  );
};

export default ChartSidebar;
