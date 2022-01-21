import React from "react";

const InputNumber = ({ number, setNumber, className, height }) => {
	const handleNumberChange = (target) => {
		if (setNumber) {
			setNumber(target.value);
			console.log("changed");
		}
	};

	const increase = () => {
		if (setNumber) {
			let newNumber = Number.parseInt(number);
			setNumber(newNumber + 1);
		}
	};

	const descrease = () => {
		if (setNumber) {
			let newNumber = Number.parseInt(number);
			if (newNumber > 1) {
				setNumber(newNumber - 1);
			}
		}
	};

	return (
		<div class={`custom-number-input h-10 w-28 ${className}`}>
			<div
				class={`flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1 ${height}`}
			>
				<button
					onClick={descrease}
					class=" bg-red-100 border-2 text-gray-600 hover:text-gray-700 hover:bg-red-400 h-full w-20 rounded-l cursor-pointer outline-none"
				>
					<span class="m-auto text-2xl font-thin">−</span>
				</button>
				<input
					type="number"
					class="outline-none focus:outline-none text-center w-full bg-gray-100 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
					name="custom-input-number"
					value={number}
					onChange={handleNumberChange}
				></input>
				<button
					onClick={increase}
					class="bg-green-100 text-gray-600 hover:text-gray-700 hover:bg-green-400 h-full w-20 rounded-r cursor-pointer"
				>
					<span class="m-auto text-2xl font-thin">+</span>
				</button>
			</div>
		</div>
	);
};

export default InputNumber;
