import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import Img1 from "../images/img1.jpg";
import itemApi from "../../apis/items/itemApi";
import axiosClient from "../../apis/axiosClient";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addToCart } from "redux/reducer/cartSlice";

import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from "utils/localStorage";

import "./HomePage.css";
import {
  MinusOutlined,
  UnorderedListOutlined,
  AppstoreOutlined,
  DownOutlined,
  CaretDownOutlined,
  ShoppingOutlined,
  SearchOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button, Row, Col } from "antd";
// import { useState } from "react/cjs/react.production.min";

const HomePage = (props) => {
  // Wait API use for "name"
  const [datas, setDatas] = useState([]);
  const [plusCategories, setPlusCategories] = useState(false);
  const [plusFeatured, setPlusFeatured] = useState(false);
  const [searchTerm, setSearchTearm] = useState("");
  const [productHomePage, setProductHomePage] = useState();
  const [id, setId] = useState();
  // console.log(datas);
  let navigate = useNavigate();
  useEffect(() => {
    const controller = new AbortController();

    getData(controller);

    return () => {
      controller.abort();
    };
  }, []);

  const getData = async (controller) => {
    try {
      const res = await itemApi.getAllItems({
        signal: controller.signal,
      });
      // console.log(res);
      setDatas(res.data);
    } catch (err) {}
  };
  // console.log(datas[0]);
  const categoriesItem = [
    {
      name: "Arts & Photography",
    },
    {
      name: "Arts & Photography",
    },
    {
      name: "Arts & Photography",
    },
    {
      name: "Arts & Photography",
    },
    {
      name: "Arts & Photography",
    },
    {
      name: "Arts & Photography",
    },
    {
      name: "Arts & Photography",
    },
    {
      name: "Arts & Photography",
    },
  ];

  const handleClickMinusplusCategories = () => {
    setPlusCategories(!plusCategories);
  };
  const handleClickMinusplusFeatured = () => {
    setPlusFeatured(!plusFeatured);
  };
  const navigateProduct = (item) => {
    navigate(`/product/${item}`);
    setId(item);
    console.log(item);
  };
  console.log(id);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const getHomePage = async () => {
      try {
        const response = await itemApi.getItemById(id, {});
        setProductHomePage(response?.data[0]);
        console.log("product HomePage", response?.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getHomePage();
  }, [id]);

  const handleClickCart = async () => {
    if (productHomePage) {
      const product = {
        productId: productHomePage._id,
        quantity: quantity,
      };
      dispatch(addToCart(product));
      console.log("work");
    }
  };

  return (
    <div>
      <div className="iphone:mx-5 lg:ml-[90px] lg:mr-[90px] mt-5">
        <Row gutter={[32, 0]} className="">
          <Col
            span={6}
            className="iphone:!max-w-[100%] iphone:!flex-1 lg:!max-w-[25%] lg:!flex-ant"
          >
            <div className=" p-[35px] border-solid border-[1px]">
              <h3 className="flex justify-between items-center text-lg">
                Categories
                {plusCategories ? (
                  <PlusOutlined
                    className="text-base text-black cursor-pointer"
                    onClick={handleClickMinusplusCategories}
                  />
                ) : (
                  <MinusOutlined
                    className="text-base text-black cursor-pointer"
                    onClick={handleClickMinusplusCategories}
                  />
                )}
              </h3>

              <div
                className={`homepage-accordion ease-in duration-300 overflow-hidden ${
                  plusCategories ? "h-0" : `h-auto`
                }`}
              >
                {categoriesItem.map((item) => (
                  <p
                    className="py-[9px] hover:text-[#f75454]
                            cursor-pointer mb-0  ease-in duration-100"
                  >
                    {item?.name}
                  </p>
                ))}
              </div>
            </div>
            <div className="p-[35px] border-solid border-[1px] border-t-0">
              <h3 className="flex justify-between items-center text-lg">
                Filter by price
                <MinusOutlined className="text-base text-black cursor-pointer" />
              </h3>
            </div>

            <div
              className={`homePage_featured-book p-[35px] border-solid border-[1px] border-t-0  ${
                plusFeatured ? "h-[106px]" : "max-h-[300px] overflow-y-auto"
              }`}
            >
              <h3 className="flex justify-between items-center text-lg mb-4 ">
                Featured Books
                {plusFeatured ? (
                  <PlusOutlined
                    className="text-base text-black cursor-pointer"
                    onClick={handleClickMinusplusFeatured}
                  />
                ) : (
                  <MinusOutlined
                    className="text-base text-black cursor-pointer"
                    onClick={handleClickMinusplusFeatured}
                  />
                )}
              </h3>
              <div className="flex flex-col gap-y-9">
                {datas.map((item) => (
                  <div
                    className={`flex gap-5 items-start  ease-in duration-300 overflow-hidden ${
                      plusFeatured ? "h-0" : `h-auto`
                    }`}
                    key={item._id}
                  >
                    <img
                      src={item?.imageUrl}
                      alt=""
                      className="max-w-[60px] h-auto cursor-pointer"
                      onClick={() => {
                        navigateProduct(item._id);
                      }}
                    />
                    <div
                      className="flex flex-col items-start gap-2 justify-start"
                      onClick={() => {
                        navigateProduct(item._id);
                      }}
                    >
                      <span className="cursor-pointer hover:text-primary">
                        {item?.title}
                      </span>
                      <p className="mb-0">{item?.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
          <Col
            span={18}
            className="iphone:!flex-flexIphone iphone:!max-w-[100%] md:!flex-ant100 md:!max-w-[100%] lg:!flex-ant75 lg:!max-w-[75%] mb-1"
          >
            <div className="flex justify-between items-center text-base text-[#161619] border-b-[1px] pb-8 border-solid iphone:flex-col md:flex-row">
              <div className="flex-1 pr-3 iphone:text-center md:text-left">
                <p className="mb-1">Showing the single result</p>
                <div
                  className="flex border border-solid
                "
                >
                  <input
                    type="text"
                    className="border-r border-solid outline-gray-500 w-full p-1"
                    onChange={(event) => {
                      setSearchTearm(event.target.value);
                      console.log(event.target.value);
                    }}
                  />
                  <Button
                    className="!flex !items-center !cursor-default"
                    type="text"
                  >
                    <SearchOutlined className="" />
                    Search
                  </Button>
                </div>
              </div>
              <div className="">
                <ul className="flex justify-between items-center mb-0 gap-[25px]">
                  <li className="flex justify-between items-center py-3 px-[8px] border-b-[1px] border-solid gap-3">
                    Default sorting
                    <CaretDownOutlined className="text-xs" />
                  </li>
                  <li>
                    <AppstoreOutlined className="text-[24px] border-solid border-[1px] border-r-0  py-2 px-2 cursor-pointer" />
                    <UnorderedListOutlined className="text-[24px] border-solid border-[1px]  py-2 px-2 cursor-pointer" />
                  </li>
                </ul>
              </div>
            </div>

            <Row className="">
              {datas

                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.title.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((item, index) => (
                  <Col
                    span={6}
                    className="iphone:!max-w-[100%] iphone:!flex-ant100 md:!max-w-[50%] md:!flex-ant50
                  lg:!max-w-[25%] lg:!flex-ant"
                    key={item._id}
                  >
                    <div className="homepage-product z-50 relative max-h-[500px] p-[30px] border-solid border-[1px] hover:border-black hover:shadow-3xl border-t-0 hover:border-t-1 hover:border">
                      <div className="p-1">
                        <img
                          src={item?.imageUrl}
                          onClick={() => {
                            navigateProduct(item._id);
                          }}
                          alt=""
                          className="max-w-full w-full cursor-pointer object-contain md:h-[100px]"
                        />
                      </div>
                      <div className="homepage-product-item_content ease-out duration-150 text-[16px] mb-1 pt-4 max-h-28 bg-white ">
                        <h2
                          className="mb-0 cursor-pointer h-12 line-clamp-2 inline-block hover:text-[#f75454]"
                          onClick={() => {
                            navigateProduct(item._id);
                          }}
                        >
                          {item?.title}
                        </h2>
                        <p
                          className="text-[#7c6e65] text-[14px] mb-1 cursor-pointer inline-block"
                          onClick={() => {
                            navigateProduct(item._id);
                          }}
                        >
                          {item.description}
                        </p>
                        <p className=" mb-1 text-[18px] font-semibold">
                          {item?.price}
                        </p>
                      </div>
                      <div className="iphone:text-white lg:text-black cursor-pointer lg:-translate-x-1/2 iphone:m-auto iphone:translate-y-4 lg:translate-y-0 left-2/4 lg:-z-50 lg:absolute bottom-[73px] max-w-[157px] w-full">
                        <ShoppingOutlined
                          className="homePage_button  lg:bg-white iphone:bg-primary p-3 rounded ease-in-out duration-100 hover:bg-[#f75454] hover:text-white text-2xl lg:absolute w-full lg:-translate-x-1/2	lg:left-2/4"
                          onClick={handleClickCart}
                        ></ShoppingOutlined>
                      </div>
                    </div>
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HomePage;
