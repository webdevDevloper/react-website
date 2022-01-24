import PrimaryButton, { SecondButton } from "components/StyledButton/Button";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { purchaseCart, updateCart } from "redux/reducer/cartSlice";
import ItemCard from "./ItemsCard";

const ShoppingCart = (props) => {
	let navigate = useNavigate();

	const [listItems, setListItems] = useState([]);

	const shoppingCart = useSelector((state) => state.shoppingCart);
	const dispatch = useDispatch();

	const [selectedListItems, setSelectedListItems] = useState([]);

	const [totalProducts, setTotalProducts] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);

	const handleKeepShopping = () => {
		navigate("/");
	};

	const handleCheckout = () => {
		if (selectedListItems.length > 0) {
			const dataToServer = selectedListItems.map((item) => {
				// const newItem = { ...item };
				delete item.price;
				return item;
			});
			const dataWithOuterObject = {
				product: [...dataToServer],
			};
			console.log(dataWithOuterObject);
			dispatch(purchaseCart(dataWithOuterObject));
		}
	};

	const handleDeleteItem = (item) => {
		console.log(item);
		dispatch(updateCart(item));
	};

	const handleSelectItem = (selectedItem, isAdding) => {
		let newSelectedItems = [...selectedListItems];
		if (isAdding) {
			newSelectedItems.push(selectedItem);
		} else {
			newSelectedItems = selectedListItems.filter(
				(item) => item.productId !== selectedItem.productId
			);
		}

		setSelectedListItems(newSelectedItems);
		updateTotalAndQuantity(newSelectedItems);
		// console.log(newSelectedItems);
	};

	const updateTotalAndQuantity = (listItems) => {
		// console.log(listItems);
		setTotalProducts(listItems?.length);
		const total = listItems.reduce(
			(accumulator, currentValue) => accumulator + currentValue.price,
			0
		);
		setTotalPrice(total);
	};

	useEffect(() => {
		if (shoppingCart) {
			// console.log("list cart", shoppingCart?.cartItems);
			setListItems(shoppingCart?.cartItems);
		}
	}, [shoppingCart]);

	return (
		//----------------------------
		//
		<div className="flex flex-col mx-auto items-center w-10/12 md:w-11/12 text-gray-800 md:flex-row">
			<div className="w-full md:w-9/12 md:mr-4">
				<div className="text-2xl mb-4 font-semibold text-center">
					Your cart
				</div>
				<div className="w-full">
					{listItems &&
						listItems.length > 0 &&
						listItems.map((item, index) => (
							<ItemCard
								key={index}
								item={item}
								deleteItem={handleDeleteItem}
								selectItem={handleSelectItem}
							/>
						))}
				</div>
			</div>

			<div className="w-full md:w-1/4">
				<div className="text-2xl mb-4 font-semibold text-center">
					Purchase Information
				</div>
				<div className="w-full border  text-xl mb-4">
					<div className="flex justify-between px-4 py-2">
						<div className="font-semibold">Total products</div>
						<div>{totalProducts}</div>
					</div>
					<hr />
					<div className="flex justify-between px-4 py-2">
						<div className="font-semibold">Total Price</div>
						<div>{totalPrice}</div>
					</div>
					<hr />
				</div>

				<PrimaryButton
					onClick={handleCheckout}
					className="mb-4 shadow-md md:text-lg"
				>
					Proceed to checkout
				</PrimaryButton>
				<SecondButton
					onClick={handleKeepShopping}
					className="mb-4 shadow-md md:text-lg"
				>
					Keep shopping
				</SecondButton>
			</div>
		</div>
	);
};

export default ShoppingCart;
