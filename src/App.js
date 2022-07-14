import React from "react";
import { Routes, Route } from "react-router-dom";
import Amazon from "./pages/Amazon";
import "./app.css";

const App = () => {
  return (
    <div className="app-area ">
      {/* routing  */}
      <Routes>
        <Route path="/" element={<Amazon />} />
      </Routes>
    </div>
  );
};

export default App;
