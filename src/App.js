import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/home/Home";
import Products from "./component/listing/Products";
import Services from "./component/services/Services";
import Subscription from "./component/subscription/Subscription";
import Discussion from "./component/forum/Discussion";
import Navbar from "./component/header/Navbar";
import SellWithUs from "./component/sellwithus/sellWithUs";
import MyProducts from "./component/listing/myProduct";
import CartPage from "./component/cart/cart"
import Footer from "./component/footer/footer";
// import {AuthProvider } from './firebase/userAuthContext'
import "./App.css"


function App() {
  return (
    // <AuthProvider>
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Products/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/subscription" element={<Subscription/>} />
          <Route path="/Discussion" element={<Discussion/>} />
          <Route path="/sellwithus" element={<SellWithUs/>} />
          <Route path="/My Products" element={<MyProducts/>}></Route>
          <Route path="/cart" element={<CartPage/>}></Route>
        </Routes>
        <Footer/>
      </div>
    </Router>
    // </AuthProvider>
  );
}

export default App;
