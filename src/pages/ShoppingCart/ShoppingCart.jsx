import PrimaryButton, { SecondButton } from "components/StyledButton/Button";
import React from "react";
import { useNavigate } from "react-router-dom";
import ItemCard from "./ItemsCard";

const ShoppingCart = () => {
	let navigate = useNavigate();
	const handleKeepShopping = () => {
		navigate("/");
	};

	return (
		<div className="flex flex-col mx-auto items-center w-10/12 md:w-11/12 text-gray-800 md:flex-row">
			<div className="w-full md:w-9/12 md:mr-4">
				<div className="text-3xl mb-4 font-semibold text-center">
					Your cart
				</div>
				<div className="w-full">
					<ItemCard />
					<ItemCard />
				</div>
			</div>

			<div className="w-full md:w-1/4">
				<div className="text-3xl mb-4 font-semibold text-center">
					Purchase Information
				</div>
				<div className="w-full border  text-xl mb-4">
					<div className="flex justify-between px-4 py-2">
						<div className="font-semibold">Total Quantity</div>
						<div>2</div>
					</div>
					<hr />
					<div className="flex justify-between px-4 py-2">
						<div className="font-semibold">Total</div>
						<div>$10</div>
					</div>
					<hr />
				</div>

				<PrimaryButton className="mb-4 shadow-md md:text-xl">
					Proceed to checkout
				</PrimaryButton>
				<SecondButton
					onClick={handleKeepShopping}
					className="mb-4 shadow-md md:text-xl"
				>
					Keep shopping
				</SecondButton>
			</div>
		</div>
	);
};

export default ShoppingCart;
