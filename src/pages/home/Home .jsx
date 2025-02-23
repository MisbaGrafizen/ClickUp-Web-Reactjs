import React, { useState } from "react";
import Header from "../../Component/header/Header";
import Sidebar from "../../Component/sidebar/Sidebar";



export default function Home() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  return (
    <>


      <div className="  w-[100%]  ">
        <Header />
        <Sidebar collapsed={sidebarCollapsed} onCollapse={() => setSidebarCollapsed(!sidebarCollapsed)} />
      </div>
    </>
  );
}
