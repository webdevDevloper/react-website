import React from "react";
import testImage from "assets/22.jpg";
import PrimaryButton from "components/StyledButton/Button";
import { SecondButton } from "components/StyledButton/Button";
import ProductSmallCard from "./ProductSmallCard";
import Rating from "components/Rating/Rating";

function ProductDetail(props) {
	return (
		<div className="w-4/5 lg:w-11/12 max-w-md mx-auto md:max-w-none md:mt-10 md:flex">
			<div className="md:mr-10 md:w-1/2 lg:flex lg:w-3/4">
				<div className="w-full flex justify-center mb-4">
					<img
						className="w-52 md:w-56 lg:w-72 object-contain"
						src={testImage}
						alt="detail"
					/>
				</div>
				<div>
					<div className="text-2xl font-semibold mb-2">
						Angry God (All Saints High Book 3)
					</div>
					<div>
						<Rating /> <span>4.5</span>
					</div>
					{/* <div className="text-xl font-semibold mb-2">$10</div> */}
					<div className="mb-2">
						<span className="text-xl font-semibold mr-2">$10</span>
						<del className="text-gray-500">$11</del>
					</div>
					<div className="text-sm text-gray-800">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Explicabo, adipisci. Lorem ipsum dolor sit amet,
						consectetur adipisicing elit. Cumque, perspiciatis!
					</div>
					<div className="lg:flex">
						<input
							type="number"
							value=""
							className="border lg:w-16"
						/>
						<PrimaryButton className="mb-2 lg:max-w-md">
							Add to cart
						</PrimaryButton>
					</div>

					<SecondButton className="lg:hidden">
						Add to wishlist
					</SecondButton>
					<div className="hidden lg:block">Add to wishlist</div>
				</div>
			</div>
			<hr className="md:hidden mb-4" />
			<div className="md:border md:p-4 md:w-1/2 lg:w-1/5">
				<ProductSmallCard />
				<ProductSmallCard />
				<ProductSmallCard />
			</div>
		</div>
	);
}

export default ProductDetail;
