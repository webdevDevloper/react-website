import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/example/counterSlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
});
