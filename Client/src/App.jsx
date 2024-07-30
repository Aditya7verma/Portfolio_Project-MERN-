import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Loader from "./components/Header/Loader";

function App() {
  const [showLoading, setShowLoading] = useState(false);

  const getPortfolioData = async () => {
    try {
      const response = await axios.get("/api/portfolio/get-portfolio-data");
      console.log("This is a String", response);
    } catch (error) {
      console.error("Error fetching portfolio data:", error);
    }
  };

  useEffect(() => {
    getPortfolioData();
  }, []);
  return (
    <BrowserRouter>
      {showLoading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
