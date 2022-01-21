import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/example/counterSlice";
import cartReducer from "redux/reducer/cartSlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		shoppingCart: cartReducer,
	},
});
