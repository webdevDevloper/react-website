import InputNumber from "components/InputNumber/InputNumber";
import React from "react";

function ItemCard(props) {
	return (
		<div className="mb-6 border">
			<div className="flex justify-between px-4 py-2">X</div>
			<hr />
			<div className="flex justify-between px-4 py-2">
				<div className="font-semibold">Product name</div>
				<div>Ten san pham</div>
			</div>
			<hr />
			<div className="flex justify-between px-4 py-2">
				<div className="font-semibold">Price</div>
				<div>Ten san pham</div>
			</div>
			<hr />
			<div className="flex justify-between px-4 py-2 items-center">
				<div className="font-semibold">Quantity</div>
				<InputNumber className="w-24 h-8" height="h-8" />
			</div>
			<hr />
			<div className="flex justify-between px-4 py-2">
				<div className="font-semibold">Subtotal</div>
				<div>100</div>
			</div>
		</div>
	);
}

export default ItemCard;
