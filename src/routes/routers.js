import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";
import Layout from "../pages/Layout";
// import * as routes from "./routes";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
