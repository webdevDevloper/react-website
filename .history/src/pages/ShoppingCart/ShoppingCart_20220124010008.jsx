import PrimaryButton, { SecondButton } from "components/StyledButton/Button";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ItemCard from "./ItemsCard";
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from "utils/localStorage";
const testData = {
  id: 0,
  name: "Sapiens",
  price: 10,
  quantity: 1,
  description: "Hello ae",
};

const ShoppingCart = (props) => {
  let navigate = useNavigate();
  const { cartItems } = props;
  let testCartItems = [...cartItems];
  let testItems = getLocalStorage("listItem") || [];
  console.log(testItems.qty);
  // console.log("testItems");
  const [listItems, setListItems] = useState([]);
  setLocalStorage("listItem", testCartItems);
  const shoppingCart = useSelector((state) => state.shoppingCart);

  const handleKeepShopping = () => {
    navigate("/");
  };
  useEffect(() => {
    if (shoppingCart) {
      // console.log(shoppingCart);
      setListItems(shoppingCart?.cartItems);
    }
  }, [shoppingCart]);

  return (
    //Test add method
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>{testItems.length === 0 && <div>Cart Is Empty</div>}</div>
      {testItems.flat(2).map((item) => (
        <div key={item._id} className="row">
          <div>{item._id}</div>
          <div></div>
          <div></div>
        </div>
      ))}
    </aside>
    //
    // <div className="flex flex-col mx-auto items-center w-10/12 md:w-11/12 text-gray-800 md:flex-row">

    //   <div className="w-full md:w-9/12 md:mr-4">
    //     <div className="text-2xl mb-4 font-semibold text-center">Your cart</div>
    //     <div className="w-full">
    //       <ItemCard item={listItems[0]} />
    //       <ItemCard item={testData} />
    //     </div>
    //   </div>

    //   <div className="w-full md:w-1/4">
    //     <div className="text-2xl mb-4 font-semibold text-center">
    //       Purchase Information
    //     </div>
    //     <div className="w-full border  text-xl mb-4">
    //       <div className="flex justify-between px-4 py-2">
    //         <div className="font-semibold">Total Quantity</div>
    //         <div>2</div>
    //       </div>
    //       <hr />
    //       <div className="flex justify-between px-4 py-2">
    //         <div className="font-semibold">Total</div>
    //         <div>$10</div>
    //       </div>
    //       <hr />
    //     </div>

    //     <PrimaryButton className="mb-4 shadow-md md:text-lg">
    //       Proceed to checkout
    //     </PrimaryButton>
    //     <SecondButton
    //       onClick={handleKeepShopping}
    //       className="mb-4 shadow-md md:text-lg"
    //     >
    //       Keep shopping
    //     </SecondButton>
    //   </div>

    // </div>
  );
};

export default ShoppingCart;
