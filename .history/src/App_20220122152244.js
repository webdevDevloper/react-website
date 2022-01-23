import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";
import { initCart } from "redux/reducer/cartSlice";
import Navbar from "./components/Navbar/Navbar";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import SinglePost from "./components/SinglePost/SinglePost";

import LoginForm from "./pages/Login/LoginForm";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Resgister from "./pages/Resgister/Resgister";
import Setting from "./pages/Setting/Setting";
import Write from "./pages/Write/Write";
import { routes } from "./routes/routes";
// import "react-toastify/dist/ReactToastify.css";
import ShoppingCart from "pages/ShoppingCart/ShoppingCart";
import HomePage from "./pages/HomePage/HomePage";
function App() {
  // const user = false;
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(initCart());
  // }, []);

  return (
    // <BrowserRouter>
    // 	<Navbar />
    // 	<Routes>
    // 		<Route path="/home" element={<HomePage />} />
    // 		<Route
    // 			path="/resgister"
    // 			element={user ? <HomePage /> : <Resgister />}
    // 		/>
    // 		<Route
    // 			path="/login"
    // 			element={user ? <HomePage /> : <LoginForm />}
    // 		/>
    // 		<Route
    // 			path="/write"
    // 			element={user ? <Write /> : <Resgister />}
    // 		/>
    // 		<Route
    // 			path="/setting"
    // 			element={user ? <Setting /> : <Resgister />}
    // 		/>
    // 		<Route
    // 			path="/post/:postId"
    // 			element={user ? <SinglePost /> : <LoginForm />}
    // 		/>
    // 		<Route
    // 			path="/private"
    // 			element={
    // 				<PrivateRoute route={routes[0]}>
    // 					<div>This is private route</div>
    // 				</PrivateRoute>
    // 			}
    // 		/>
    // 		<Route path="/product/:id" element={<ProductDetail />} />
    // 		<Route path="/cart" element={<ShoppingCart />} />
    // 	</Routes>
    // 	<ToastContainer
    // 		position="bottom-right"
    // 		autoClose={5000}
    // 		hideProgressBar={false}
    // 		newestOnTop={false}
    // 		closeOnClick
    // 		rtl={false}
    // 		pauseOnFocusLoss
    // 		draggable
    // 		pauseOnHover
    // 		transition={Slide}
    // 	/>
    // </BrowserRouter>
    // <HomePage></HomePage>
		
  );
}

export default App;
