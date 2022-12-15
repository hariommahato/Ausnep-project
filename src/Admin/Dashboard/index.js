import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../AdminNavbar";
import Sidebar from "../Sidebar";

const index = () => {
  return (
    <div>
      <AdminNavbar />
      <div style={{display:"flex",flexDirection:"row"}}>
        <div  style={{Width:"30rem",border:'1px solid gray',height:'100vh' }}>
          <Sidebar />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default index;
