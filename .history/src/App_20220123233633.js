import MainLayout from "layout/MainLayout";
import ShoppingCart from "pages/ShoppingCart/ShoppingCart";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { initCart } from "redux/reducer/cartSlice";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import HomePage from "./pages/HomePage/HomePage";
import LoginForm from "./pages/Login/LoginForm";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Resgister from "./pages/Resgister/Resgister";
import AdminPage from "pages/AdminPage/AdminPage";
import RecordOder from "pages/RecordOder/RecordOder";
import itemApi from "apis/items/itemApi";
function App() {
  const user = false;
  const dispatch = useDispatch();
  const [datas, setDatas] = useState([]);
  const products = datas;
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    dispatch(initCart());
  }, []);
  useEffect(() => {
    const controller = new AbortController();

    getData(controller);

    return () => {
      controller.abort();
    };
  }, []);

  const getData = async (controller) => {
    try {
      const res = await itemApi.getAllItems({
        signal: controller.signal,
      });
      // console.log(res);
      setDatas(res.data);
    } catch (err) {}
  };
  // console.log(`products ${products}`);
  // console.log(products);
  // console.log(cartItems);
  const onAdd = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
    // console.log("work");
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={<HomePage product={products} onAdd={onAdd} />}
          />
          <Route path="/home" element={<HomePage />} />
          <Route path="/product/:_id" element={<ProductDetail />} />
          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <ShoppingCart cartItems={cartItems} />
              </PrivateRoute>
            }
          />
          <Route
            path="/resgister"
            element={
              <PrivateRoute>
                <Resgister />
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PrivateRoute>
                <LoginForm />
              </PrivateRoute>
            }
          />
          <Route
            path="/create-product"
            element={
              <PrivateRoute>
                <AdminPage />
              </PrivateRoute>
            }
          />
          <Route path="/history" element={<RecordOder />} />
          <Route path="*" element={<div>Routes not found</div>} />
        </Route>
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
      />
    </BrowserRouter>
  );
}

export default App;
