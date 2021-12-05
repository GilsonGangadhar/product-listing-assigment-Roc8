import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [sizeArr, setSize] = useState([]);
  const [brandArr, setBrand] = useState([]);
  const [genderArr, setGender] = useState([]);

  const handleFilters = (obj) => {
    if (obj.type === "size") {
      setSize(obj.value);
    } else if (obj.type === "brand") {
      setBrand(obj.value);
    } else {
      setGender(obj.value);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="app">
        <Sidebar changeFilters={handleFilters} />
        <Home sizeArr={sizeArr} brandArr={brandArr} genderArr={genderArr} />
      </div>
    </div>
  );
}

export default App;
