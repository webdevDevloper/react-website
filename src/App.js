import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";
import Setting from "./pages/Setting/Setting";
import LoginForm from "./pages/Login/LoginForm";
import Resgister from "./pages/Resgister/Resgister";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SinglePost from "./components/SinglePost/SinglePost";
import { routes } from "./routes/routes";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import { useDispatch } from "react-redux";
import { initCart } from "redux/reducer/cartSlice";

function App() {
	const user = false;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(initCart());
	}, []);

	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route
					path="/resgister"
					element={user ? <Home /> : <Resgister />}
				/>
				<Route
					path="/login"
					element={user ? <Home /> : <LoginForm />}
				/>
				<Route
					path="/write"
					element={user ? <Write /> : <Resgister />}
				/>
				<Route
					path="/setting"
					element={user ? <Setting /> : <Resgister />}
				/>
				<Route
					path="/post/:postId"
					element={user ? <SinglePost /> : <LoginForm />}
				/>
				<Route
					path="/private"
					element={
						<PrivateRoute route={routes[0]}>
							<div>This is private route</div>
						</PrivateRoute>
					}
				/>
				<Route path="/product/:id" element={<ProductDetail />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
