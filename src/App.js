import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddPost from "./components/AddPost";
import Post from "./components/Post";
import PostsList from "./components/PostList";


import EventBus from "./common/EventBus";

const App = () => {

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            Jamrio
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<PostsList />} />
            <Route path="/post" element={<Post />} />
            <Route path="/posts" element={<PostsList />} />
            <Route path="/add" element={<AddPost />} />
            <Route path="/posts/:id" element={<Post />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
