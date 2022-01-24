import React, { useEffect, useState } from "react";
import testImage from "assets/22.jpg";
import PrimaryButton from "components/StyledButton/Button";
import { SecondButton } from "components/StyledButton/Button";
import ProductSmallCard from "./ProductSmallCard";
import Rating from "components/Rating/Rating";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "redux/reducer/cartSlice";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import InputNumber from "components/InputNumber/InputNumber";
import itemApi from "apis/items/itemApi";
import cartApi from "apis/cart/cartApi";
import { getLocalStorage } from "utils/localStorage";

const testData = {
  id: 0,
  name: "Sapiens",
  price: 10,
  description: "Hello ae",
};

function ProductDetail(props) {
  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.shoppingCart);

  const [productDetail, setProductDetail] = useState();
  // console.log(shoppingCart);

  useEffect(() => {
    const getDetail = async () => {
      try {
        const response = await itemApi.getItemById(id, {});
        setProductDetail(response?.data[0]);
        console.log("product detail", response?.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getDetail();
  }, [id]);

  const handleAddItemToCart = async () => {
    if (productDetail) {
      const product = {
        productId: productDetail._id,
        quantity: quantity,
      };
      dispatch(addToCart(product));
    }

    // toast.success("Them vao gio hang thanh cong!", {
    // 	position: toast.POSITION.BOTTOM_RIGHT,
    // });
  };

  return (
    <div className="w-4/5 lg:w-11/12 max-w-md mx-auto md:max-w-none md:mt-10 md:flex">
      <div className="md:mr-10 md:w-1/2 lg:flex lg:w-3/4">
        <div className="w-full flex justify-center mb-4">
          <img
            className="w-52 md:w-56 lg:w-72 object-contain"
            src={productDetail?.imageUrl}
            // src={testImage}
            alt="detail"
          />
        </div>
        <div className="w-full">
          <div className="text-2xl font-semibold mb-2">
            {productDetail?.title}
          </div>
          <div>
            <Rating /> <span>4.5</span>
          </div>
          <div className="text-xl font-semibold mb-2">
            {productDetail?.price}
          </div>
          {/* <div className="mb-2">
						<span className="text-xl font-semibold mr-2">$10</span>
						<del className="text-gray-500">$11</del>
					</div> */}
          <div className="text-sm text-gray-800 mb-4 ">
            {productDetail?.description}
          </div>
          <div className="lg:flex lg:justify-center lg:items-stretch">
            <InputNumber
              className="mb-4 lg:mr-4"
              number={quantity}
              setNumber={setQuantity}
            />
            <PrimaryButton
              onClick={handleAddItemToCart}
              className="mb-2 lg:max-w-md"
            >
              Add to cart
            </PrimaryButton>
          </div>

          <SecondButton className="lg:hidden">Add to wishlist</SecondButton>
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
