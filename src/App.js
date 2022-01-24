import MainLayout from "layout/MainLayout";
import ShoppingCart from "pages/ShoppingCart/ShoppingCart";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToCart, fetchUserById, initCart } from "redux/reducer/cartSlice";
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
		// const controller = new AbortController();
		// getData(controller);
		// return () => {
		// 	controller.abort();
		// };
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
	console.log(cartItems);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<HomePage />} />
					<Route path="/home" element={<HomePage />} />
					<Route path="/product/:id" element={<ProductDetail />} />
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
