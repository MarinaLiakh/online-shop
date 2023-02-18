import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Shop } from "./pages/shop";
import { Product } from "./pages/product";
import { Contacts } from "./pages/contacts";
import { Cart } from "./pages/cart";
import { Login } from "./pages/login";
import { NotFound } from "./pages/notFound";
import { MainMenu } from "./components/mainMenu";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"; 
import { Provider } from "react-redux";
import { store } from "./redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store = {store}>
  <BrowserRouter>
  {/* <MainMenu /> */}
  <Routes>
    <Route  path="/login" element={<Login/>} />
    <Route path="/" element={<MainMenu/>}>
    <Route path="/" element={<Shop />}/>
    <Route path="contacts" element={<Contacts/>}/>
    <Route path="cart" element={<Cart/>}/>
    <Route  path="product" element={<Product/>} />
    <Route  path="/product" element={<Navigate to="/" />} />
    </Route>
    <Route  path="*" element={<NotFound/>} />
   {/* <Route  path="/" element={<Shop />}/>
  <Route  path="/contacts" element={<Contacts/>} />
  <Route  path="/cart" element={<Cart/>} />
  <Route  path="/login" element={<Login/>} />
  <Route  path="/product/:productId" element={<Product/>} />
  <Route  path="/product" element={<Navigate to="/" />} />
  <Route  path="*" element={<NotFound/>} /> */}
  </Routes>
    {/* <Shop />
    <Product /> */}
  </BrowserRouter>
  </Provider>
);
