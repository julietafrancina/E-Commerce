import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import About from "./components/About/About";
import Landing from "./components/Landing/Landing";
import History from "./components/History/History";
import CreateProduct from "./components/CreateProduct/CreateProduct";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart/:id" element={<Cart />} />
        <Route path="/history/:id" element={<History />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<CreateProduct />} />
      </Routes>
    </>
  );
}

export default App;
