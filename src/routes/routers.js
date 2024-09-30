// src/routers.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Protected from "../components/AuthLayout";
import Drafts from "../pages/Drafts";
import AddPost from "../pages/AddPost";
import EditPost from "../pages/EditPost";
import ViewPost from "../pages/ViewPost";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="drafts"
          element={
            <Protected authentication>
              <Drafts />
            </Protected>
          }
        />
        <Route
          path="add-post"
          element={
            <Protected authentication>
              <AddPost />
            </Protected>
          }
        />
        <Route
          path="edit-post/:slug"
          element={
            <Protected authentication>
              <EditPost />
            </Protected>
          }
        />
        <Route path="post/:slug" element={<ViewPost />} />
      </Route>
    </Routes>
  );
};

export default Routers;
