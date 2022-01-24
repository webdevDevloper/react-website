import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartApi from "apis/cart/cartApi";
import itemApi from "apis/items/itemApi";
import {
	getLocalStorage,
	removeLocalStorage,
	setLocalStorage,
} from "utils/localStorage";

const initialState = {
	cartItems: [],
	cartItemsQuantity: 0,
	cartItemsTotal: 0,
};

export const getCart = createAsyncThunk(
	"cart/getAll",
	async (item, thunkAPI) => {
		try {
			const response = await cartApi.getCart({});
			console.log("all cart", response.data);
			thunkAPI.dispatch(getTotal());
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	}
);

export const addToCart = createAsyncThunk(
	"cart/add",
	async (item, thunkAPI) => {
		try {
			const response = await cartApi.addToCart(item);
			thunkAPI.dispatch(getCart());
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	}
);

export const getTotal = createAsyncThunk(
	"cart/get-total",
	async (item, thunkAPI) => {
		try {
			const response = await cartApi.getTotal({});
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	}
);

export function calcQuantity(cart) {
	if (!cart) return 0;

	let totalQuantity = 0;
	cart.forEach((item) => {
		totalQuantity += item.quantity;
	});
	return totalQuantity;
}

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		setItemQuantity: (state, action) => {
			state.cartItemsQuantity = action.payload;
		},
		cartItemsTotal: (state, action) => {
			state.cartItemsTotal = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(addToCart.fulfilled, (state, action) => {
			// Add user to the state array
			console.log("added status");
			// state.cartItems.push(action.payload);
		});
		builder.addCase(getCart.fulfilled, (state, action) => {
			// Add user to the state array
			state.cartItems.push(action.payload);
			const quantity = calcQuantity(action.payload);
			// console.log(quantity);
			state.cartItemsQuantity = quantity;
		});
		builder.addCase(getTotal.fulfilled, (state, action) => {
			// Add user to the state array
			// console.log(action.payload);
			state.cartItemsTotal.push(action.payload);
		});
	},
});
// Reducers and actions
export const { setItemQuantity, cartItemsTotal } = cartSlice.actions;

export default cartSlice.reducer;
