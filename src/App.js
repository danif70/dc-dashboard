import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Products from "./components/Products"
import ProductDetail from "./components/ProductDetail";
import UserDetail from "./components/UserDetail";
import Users from "./components/Users";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products/:id" element={<ProductDetail/>} />
        <Route path="products" element={<Products />} />
        <Route path="users/:id" element={<UserDetail/>} />
        <Route path="users" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;