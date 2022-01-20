import React from "react";
import testImage from "assets/22.jpg";
import PrimaryButton from "components/StyledButton/Button";
import { SecondButton } from "components/StyledButton/Button";

function ProductDetail(props) {
	return (
		<div className="w-full p-6">
			<div className="">
				<div className="w-full flex justify-center p-6">
					<img className="w-52" src={testImage} alt="detail" />
				</div>
				<div>
					<div className="text-2xl font-semibold mb-2">
						Angry God (All Saints High Book 3)
					</div>
					<div>
						Rating <span>9.5</span>
					</div>
					<div className="text-xl font-semibold mb-2">$10</div>
					<div className="mb-2">
						<span className="text-xl font-semibold mr-2">$10</span>
						<del className="text-gray-500">$11</del>
					</div>
					<div className="text-sm text-gray-800">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Explicabo, adipisci. Lorem ipsum dolor sit amet,
						consectetur adipisicing elit. Cumque, perspiciatis!
					</div>
					<input type="number" value="" />
					<PrimaryButton className="mb-2">Add to cart</PrimaryButton>
					<SecondButton>Add to wishlist</SecondButton>
				</div>
			</div>
			<hr />
			<div>Ben phai</div>
		</div>
	);
}

export default ProductDetail;
