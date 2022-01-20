import React from "react";
import testImage from "assets/22.jpg";

const ProductSmallCard = ({ item }) => {
	return (
		<div className="flex mb-3">
			<img src={testImage} alt="" className="w-20 px-3 object-contain" />
			<div>
				<div className="text-xs text-gray-900 mb-2  hover:text-red-500">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Sint, nulla.
				</div>
				<div className="text-sm">$10</div>
			</div>
		</div>
	);
};

export default ProductSmallCard;
