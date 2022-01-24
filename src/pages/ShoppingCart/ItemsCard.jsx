import InputNumber from "components/InputNumber/InputNumber";
import React, { useEffect, useState } from "react";
import testImage from "assets/22.jpg";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import { updateCart } from "redux/reducer/cartSlice";

function ItemCard({ item, deleteItem, selectItem }) {
	const dispatch = useDispatch();

	const [quantity, setQuantity] = useState(1);
	const [thisItem, setThisItem] = useState(null);
	const [checkedItem, setCheckedItem] = useState(false);

	const handleDeleteItem = () => {
		if (deleteItem) {
			const reducedItem = {
				productId: thisItem?._id,
				newQuantity: 0,
			};
			deleteItem(reducedItem);
		}
	};

	const hanldeSelectItem = () => {
		const newCheckedItem = !checkedItem;
		setCheckedItem(newCheckedItem);
		passSelectedDataToParrent(newCheckedItem);
	};

	const passSelectedDataToParrent = (isChecked) => {
		if (selectItem) {
			const item = {
				productId: thisItem?._id,
				price: thisItem?.price,
				quantity: quantity,
			};
			selectItem(item, isChecked);
		}
	};

	useEffect(() => {
		setQuantity(item?.quantity);
		setThisItem(item?.productId);
	}, [item]);

	useEffect(() => {
		if (thisItem && checkedItem) {
			console.log("update ne");

			const newUpdatedItem = {
				productId: thisItem._id,
				newQuantity: quantity,
			};
			dispatch(updateCart(newUpdatedItem));
			passSelectedDataToParrent(true);
		}
	}, [quantity]);

	return (
		<>
			<div className="mb-6 border md:hidden">
				<div className="flex justify-between px-4 py-2 ">
					<input
						type="checkbox"
						name=""
						id=""
						checked={checkedItem}
						onChange={hanldeSelectItem}
					/>
					<div onClick={handleDeleteItem}>
						<ImCross
							style={{ color: "#dc2626", cursor: "pointer" }}
						/>
					</div>
				</div>
				<hr />
				<div className="flex justify-between px-4 py-2">
					<div className="font-semibold">Product name</div>
					<div>{thisItem?.title}</div>
				</div>
				<hr />
				<div className="flex justify-between px-4 py-2">
					<div className="font-semibold">Price</div>
					<div>{thisItem?.price}</div>
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
					<div>{thisItem?.price * quantity}</div>
				</div>
			</div>

			{/* Middle screen display */}
			<div className="hidden md:grid grid-cols-10 mb-4 text-xl items-center gap-4 px-2">
				<div className="justify-self-center">
					<input type="checkbox" name="" id="" width={"30px"} />
				</div>
				<img
					src={`${thisItem?.imageUrl}`}
					className="w-32 h-24 object-contain justify-self-center"
					alt=""
				/>
				<Link to={`#`} className="col-span-3 justify-self-center">
					{" "}
					{thisItem?.title}
				</Link>
				<div className="justify-self-center">{thisItem?.price}</div>
				<div className="justify-self-center col-span-2">
					<InputNumber number={quantity} setNumber={setQuantity} />
				</div>
				<div className="justify-self-center">
					{thisItem?.price * quantity}
				</div>
				<div
					className="cursor-pointer justify-self-center"
					onClick={handleDeleteItem}
				>
					<ImCross style={{ color: "#dc2626" }} />
				</div>
			</div>
			<hr className="hidden md:block mb-4" />
		</>
	);
}

export default ItemCard;
