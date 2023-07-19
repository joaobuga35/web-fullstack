import { Route, Routes } from "react-router-dom";
import Register from "../pages/register";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
    </Routes>
  );
};
