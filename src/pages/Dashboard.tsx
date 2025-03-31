import AdminSidebar from "../components/AdminSidebar";
import "../styles/dashboard.css";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import userImage from "../assets/user.webp";
import { HiTrendingUp ,HiTrendingDown } from "react-icons/hi";
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
        <section className="widgetContainer">
          <WidgetItem  percent={40}  value={34000} heading="Revenue" color="rgb(0,115,255)"/>
          <WidgetItem  percent={-15}  value={400} heading="Users" color="rgb(0,198,202)"/>
          <WidgetItem  percent={80}  value={340000} heading="Transaction" color="rgb(255,197,0)"/>
          <WidgetItem  percent={30}  value={340000} heading="Products" color="rgb(76,0,255  )"/>
        </section>
        <section className="graphContainer">
          <div className="revenue-chart">
            <h2>
              Revenue & Transaction
            </h2>
            {/* Grapph here */}
          </div>
          <div className="dashboard-categories">
          <h2>
              Inventory
            </h2>
            <div>
              <CategoryItem heading="Laptops" value={70} color="hsl(169,100%,50%)"/>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

interface WidgetItemProps{
  heading:string;
  value:number;
  percent:number;
  color:string;
  amount ?: false;
}
const WidgetItem = ({heading,value,percent,color,amount}:WidgetItemProps) => <article className="widget">
  <div className="widegetInfo">
    <p>{heading}</p>
    <h4>{amount? `$${value}`:value}</h4>
    {
      percent >0?( <span className="green"><HiTrendingUp /> +{percent}%{" "}</span>):(<span className="red"><HiTrendingDown  /> {percent}%{" "}</span>
    )}
  </div>
  <div className="widgetCircle" style={{
    background:`conic-gradient(
    ${color} ${Math.abs(percent)/100*360}deg,
    rgb(255,255,255)0
    )`
  }}>
    <span style={{
      color,
    }}> {percent}%</span>

  </div>
</article>;
interface CategoryItemProps{
  color: string;
  value: number;
  heading:string;
}
const CategoryItem=({color,value,heading}:CategoryItemProps)=> 
<div className="category-item">
<h5>{heading}</h5>
<div>
  <div style={{
    backgroundColor:color,
    width: `${value}%`
  }}></div>
</div>
<span>{value}%</span>
</div>

export default dashboard;
