import MainLayout from "layout/MainLayout";
import ShoppingCart from "pages/ShoppingCart/ShoppingCart";
import React, { useEffect } from "react";
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

function App() {
	const user = false;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(initCart());
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<HomePage />} />
					<Route path="/home" element={<HomePage />} />
					<Route path="/products/:id" element={<ProductDetail />} />
					<Route
						path="/cart"
						element={
							<PrivateRoute>
								<ShoppingCart />
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
