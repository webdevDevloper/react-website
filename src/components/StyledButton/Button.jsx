import React from "react";

const PrimaryButton = ({ children, className, onClick }) => {
	const handleOnClick = () => {
		if (onClick) {
			onClick(children);
		}
	};

	return (
		<div
			onClick={handleOnClick}
			className={`w-full cursor-pointer bg-gray-900 text-white text-center py-3 hover:bg-black duration-300 ${className}`}
		>
			{children}
		</div>
	);
};

export default PrimaryButton;

export const SecondButton = ({ children, className, onClick }) => {
	const handleOnClick = () => {
		if (onClick) {
			onClick(children);
		}
	};

	return (
		<div
			onClick={handleOnClick}
			className={`w-full cursor-pointer bg-white border text-gray-900 py-3 text-center hover:text-red-500 duration-300 shadow-sm ${className}`}
		>
			{children}
		</div>
	);
};
