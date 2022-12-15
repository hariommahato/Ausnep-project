import React from "react";
import Login from "./Admin/Login";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./Admin/Dashboard";
import PackageData from "./components/PackageData";
import Header from "./components/Header";
import Subscription from "./Admin/components/Subscription";
const BasicLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
const AdminLayout = () => {
  return <Outlet />;
};
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<BasicLayout />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} >
          <Route
            path="/admin/dashboard/subscription"
            element={<Subscription />}
          />
          </Route>
          
        </Route>
      </Routes>
      <PackageData />
    </div>
  );
};

export default App;
