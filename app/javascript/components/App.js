import React from "react";
import { Routes, Route } from "react-router-dom"; // eslint-disable-line import/no-extraneous-dependencies
import Editor from "./Editor";
// import "../App.css";

const App = () => (
  <Routes>
    <Route path="persons/*" element={<Editor />} />
  </Routes>
);
export default App;
