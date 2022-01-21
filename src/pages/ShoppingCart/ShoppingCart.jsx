import InputNumber from "components/InputNumber/InputNumber";
import React from "react";
import ItemCard from "./ItemsCard";

const ShoppingCart = () => {
	return (
		<div className="flex flex-col mx-auto items-center">
			<div>Your cart</div>
			<div className="w-10/12">
				<ItemCard />
				<ItemCard />
			</div>
			<div>asd</div>
		</div>
	);
};

export default ShoppingCart;
