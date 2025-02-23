import { Home, Inbox, BarChart2, Clock, Star, Layout, Users, ChevronLeft } from "react-feather";
import "../sidebar/Sidebar.css";

export default function Sidebar({ collapsed, onCollapse }) {
  return (
    <aside className={` font-Poppins h-[93vh] sidebar ${collapsed ? "collapsed" : ""}`}>
      <button className="collapse-button !border-[1px] border-[#000]" onClick={onCollapse}>
        <ChevronLeft size={20} />
      </button>
<div className=" flex ">

</div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <a href="#" className="nav-item">
              <Home size={20} />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#" className="nav-item">
              <Inbox size={20} />
              <span>Inbox</span>
            </a>
          </li>
          <li>
            <a href="#" className="nav-item">
              <BarChart2 size={20} />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#" className="nav-item">
              <Clock size={20} />
              <span>Recent</span>
            </a>
          </li>
        </ul>

        <div className="sidebar-section">
          <h3>Favorites</h3>
          <ul>
            <li>
              <a href="#" className="nav-item">
                <Star size={20} />
                <span>Boss Routine</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="sidebar-section">
          <h3>Workspaces</h3>
          <ul>
            <li>
              <a href="#" className="nav-item">
                <Layout size={20} />
                <span>Project Alpha</span>
              </a>
            </li>
            <li>
              <a href="#" className="nav-item">
                <Users size={20} />
                <span>Team Tasks</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}
