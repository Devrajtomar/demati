import React from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductDetail } from "./pages";
import { Product } from "./components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/productDetail/:id" element={<ProductDetail />} />
    </Routes>
  </BrowserRouter>,
);
