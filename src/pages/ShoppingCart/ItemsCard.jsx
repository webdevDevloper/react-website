import InputNumber from "components/InputNumber/InputNumber";
import React, { useEffect, useState } from "react";
import testImage from "assets/22.jpg";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";

function ItemCard({ item, deleteItem, selectItem }) {
	const [quantity, setQuantity] = useState(1);

	const handleDeleteItem = () => {
		if (deleteItem) {
			deleteItem(item);
		}
	};

	const hanldeSelectItem = (e) => {
		console.log(e.target.value);
		// if (selectItem) {
		//     selectItem(item);
		// }
	};

	useEffect(() => {
		setQuantity(item?.quantity);
	}, [item]);

	useEffect(() => {
		// console.log("set moi ne");
		// Goi update cart o day
	}, [quantity]);

	return (
		<>
			<div className="mb-6 border md:hidden">
				<div
					onClick={handleDeleteItem}
					className="flex justify-between px-4 py-2 "
				>
					<input
						type="checkbox"
						name=""
						id=""
						onChange={hanldeSelectItem}
					/>
					<ImCross style={{ color: "#dc2626", cursor: "pointer" }} />
				</div>
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
					<InputNumber
						number={quantity}
						setNumber={setQuantity}
						className="w-24 h-8"
						height="h-8"
					/>
				</div>
				<hr />
				<div className="flex justify-between px-4 py-2">
					<div className="font-semibold">Subtotal</div>
					<div>100</div>
				</div>
			</div>

			{/* Middle screen display */}
			<div className="hidden md:grid grid-cols-10 mb-4 text-xl items-center gap-4 px-2">
				<div className="justify-self-center">
					<input type="checkbox" name="" id="" width={"30px"} />
				</div>
				<img
					src={testImage}
					className="w-32 h-24 object-contain justify-self-center"
					alt=""
				/>
				<Link to={`#`} className="col-span-3 justify-self-center">
					{" "}
					Ten san pham asd asd s asd asd asd asd
				</Link>
				<div className="justify-self-center">100000</div>
				<div className="justify-self-center col-span-2">
					<InputNumber number={quantity} setNumber={setQuantity} />
				</div>
				<div className="justify-self-center">1000</div>
				<div className="cursor-pointer justify-self-center">
					<ImCross style={{ color: "#dc2626" }} />
				</div>
			</div>
			<hr className="hidden md:block mb-4" />
		</>
	);
}

export default ItemCard;
