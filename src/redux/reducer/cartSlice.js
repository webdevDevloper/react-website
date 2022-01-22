import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
	getLocalStorage,
	removeLocalStorage,
	setLocalStorage,
} from "utils/localStorage";

const CART_STORAGE = "bookstore-cart";

const initialState = {
	cartItems: [],
	cartItemsQuantity: 0,
	cartItemsTotal: 0,
};

export function calcQuantity(cart) {
	if (!cart) return 0;

	let totalQuantity = 0;
	cart.forEach((item) => {
		totalQuantity += item.quantity;
	});
	return totalQuantity;
}

export function calcCartCost(cart) {
	if (!cart) return 0;
	let total = cart.reduce(
		(accumulator, item) => accumulator + item.price * item.quantity,
		0
	);
	return total;
}

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		initCart: (state) => {
			let cart = [];
			try {
				cart = getLocalStorage(CART_STORAGE)
					? getLocalStorage(CART_STORAGE)
					: [];
			} catch (e) {
				cart = [];
			}
			state.cartItems = cart;
			state.cartItemsQuantity = calcQuantity(cart);
			state.cartItemsTotal = calcCartCost(cart);
		},

		addItem: (state, action) => {
			const itemInfo = action.payload;
			if (itemInfo) {
				let newCart = [...state.cartItems];
				let exsitedItemIndex = newCart.findIndex(
					(e) => e.id === itemInfo.id
				);
				if (exsitedItemIndex >= 0) {
					newCart[exsitedItemIndex] = {
						...newCart[exsitedItemIndex],
						quantity:
							Number.parseInt(
								newCart[exsitedItemIndex].quantity
							) + Number.parseInt(itemInfo.quantity),
					};
				} else {
					newCart.push({ ...itemInfo });
				}
				state.cartItems = newCart;
				state.cartItemsQuantity = calcQuantity(newCart);
				state.cartItemsTotal = calcCartCost(newCart);
				setLocalStorage(CART_STORAGE, newCart);
			} else {
				console.warn("Empty item");
			}
		},

		updateItem: (state, action) => {
			const itemInfo = action.payload;
			if (itemInfo) {
				let newCart = [...state.cartItems];
				let exsitedItemIndex = newCart.findIndex(
					(e) => e.id === itemInfo.id
				);
				if (exsitedItemIndex >= 0) {
					newCart[exsitedItemIndex] = {
						...newCart[exsitedItemIndex],
						quantity: itemInfo.quantity,
					};

					state.cartItems = newCart;
					state.cartItemsQuantity = calcQuantity(newCart);
					state.cartItemsTotal = calcCartCost(newCart);
					setLocalStorage(CART_STORAGE, newCart);
				}
			} else {
				console.warn("Empty item");
			}
		},

		removeItem: (state, action) => {
			const item = action.payload;
			let newCart = [...state.cartItems];
			newCart = state.cartItems.filter((e) => e.id !== item?.id);
			state.cartItems = newCart;
			state.cartItemsQuantity = calcQuantity(newCart);
			state.cartItemsTotal = calcCartCost(newCart);

			setLocalStorage(CART_STORAGE, newCart);
		},

		emptyCart: (state) => {
			removeLocalStorage(CART_STORAGE);
			state.cartItemsQuantity = 0;
			state.cartItems = [];
		},
	},
});
// Reducers and actions
export const { removeItem, setItem, initCart, setError, emptyCart, addItem } =
	cartSlice.actions;

export default cartSlice.reducer;
