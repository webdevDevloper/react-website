import React, { useState, useEffect } from "react";
import axios from "axios";
import Styles from "./AdminPage.module.scss";
import "../AdminPage/AdminPage.css";
import productApi from "apis/productApi";
import { axiosInstance } from "../../apis/baseApi";

import {
  MinusOutlined,
  UnorderedListOutlined,
  AppstoreOutlined,
  DownOutlined,
  CaretDownOutlined,
  ShoppingOutlined,
  SearchOutlined,
  PlusOutlined,
  EditOutlined,
  CloseSquareOutlined,
} from "@ant-design/icons";
import { Button, Row, Col } from "antd";
import { data } from "autoprefixer";

const AdminPage = () => {
  const [datas, setDatas] = useState([]);
  const [avatar, setAvatar] = useState();
  const [data, setData] = useState({
    image: "",
    title: "",
    amount: "",
    price: "",
  });
  const endpoint = "http://localhost:3000/courses";
  //get Image
  useEffect(() => {
    return () => {
      data.image && URL.revokeObjectURL(data.image.preview);
    };
  }, [data.image]);
  const handleRenderImage = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setData({ ...data, image: file.preview });
    setAvatar(file);
  };

  //get fake Api
  useEffect(() => {
    fetchProductList();
  }, []);
  const fetchProductList = async () => {
    try {
      const response = await productApi.getAll();
      setDatas(response);
    } catch (error) {
      console.log("Failed to fetch product list: ", error);
    }
  };
  //get API from server
  // useEffect(() => {
  //   const controller = new AbortController();

  //   getData(controller);

  //   return () => {
  //     controller.abort();
  //   };
  // }, []);

  const getData = async (controller) => {
    try {
      const res = await axiosInstance.get("", {
        signal: controller.signal,
      });
      // console.log(res);
      setDatas(res.data);
    } catch (err) {}
  };
  console.log(datas);

  console.log(data);
  async function addProduct(post) {
    try {
      await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });
    } catch (err) {
      console.log(err);
    }
  }
  async function handleSubmit(e) {
    e.preventDefault();
    let posts = {
      image: data.image,
      title: data.title,
      amount: data.amount,
      price: data.price,
    };
    addProduct(posts);
    fetchProductList();

    setData({ image: "", title: "", amount: "", price: "" });
  }
  return (
    <div>
      <div className="my-3 mx-4 border-2 border-solid rounded-md p-2">
        <div className="p-2 border-b">
          <div className="">Thêm sản phẩm</div>
        </div>
        <form className="form-post" autocomplete="off" method="post">
          <Row gutter={(16, 16)} className="mb-6">
            <Col span={12} className="p-2 ">
              <input
                className="py-[10px] px-[15px] border border-solid rounded-md max-w-[100%] w-full outline-none focus:outline-primary"
                type="file"
                name="image"
                id="input-file"
                placeholder="Image url"
                required
                onChange={handleRenderImage}
              />
              {avatar && (
                <img
                  src={avatar.preview}
                  alt=""
                  className="object-cover h-auto"
                />
              )}
            </Col>
            <Col
              span={8}
              className="p-2 iphone:!max-w-[100%] iphone:!flex-ant100"
            >
              <input
                className="py-[10px] px-[15px] border border-solid rounded-md max-w-[100%] w-full outline-none focus:outline-primary"
                type="text"
                name="title"
                placeholder="Enter your title"
                required
                value={data.title}
                onChange={(e) => setData({ ...data, title: e.target.value })}
              />
            </Col>
            <Col
              span={8}
              className="p-2 iphone:!max-w-[100%] iphone:!flex-ant100"
            >
              <input
                className="py-[10px] px-[15px] border border-solid rounded-md max-w-[100%] w-full outline-none focus:outline-primary"
                type="text"
                name="amount"
                placeholder="Enter your amount"
                required
                value={data.amount}
                onChange={(e) => setData({ ...data, amount: e.target.value })}
              />
            </Col>
            <Col
              span={8}
              className="p-2 iphone:!max-w-[100%] iphone:!flex-ant100"
            >
              <input
                className="py-[10px] px-[15px] border border-solid rounded-md max-w-[100%] w-full outline-none focus:outline-primary"
                type="text"
                name="price"
                placeholder="Price"
                min="1"
                required
                value={data.price}
                onChange={(e) => setData({ ...data, price: e.target.value })}
              />
            </Col>
            <Col span={8} className="p-2 ">
              <div className="flex items-start gap-1 ">
                <label
                  for="best-seller"
                  className="inline-block leading-[1] cursor-pointer"
                >
                  Best Seller?
                </label>
                <input type="checkbox" name="bestSeller" id="best-seller" />
              </div>
            </Col>
          </Row>
          <button
            type="submit"
            className={`${Styles.form_submit} py-[10px] px-[15px] border border-solid rounded-md max-w-[100%] w-full outline-none`}
            onClick={handleSubmit}
          >
            Add Your Product
          </button>
        </form>
        <div className="product-list"></div>

        <input
          type="text"
          className="
                filter py-[10px] px-[15px] border border-solid rounded-md lg:max-w-[25%] w-full outline-none my-5 iphone:max-w-[25%] "
          placeholder="Search your product"
        />
        <div>
          <Row className="relative">
            {datas.map((item) => (
              <Col
                key={item.id}
                span={6}
                className="iphone:!max-w-[100%] iphone:!flex-ant100 md:!max-w-[50%] md:!flex-ant50
                  lg:!max-w-[25%] lg:!flex-ant"
              >
                <div className="homepage-product relative h-full max-h-[500px] p-[30px] border-solid border-[1px] hover:border-black hover:shadow-3x hover:border-t-1 hover:border rounded-md overflow-hidden">
                  <img
                    src={item?.image}
                    alt=""
                    className="max-w-full w-full cursor-pointer object-cover h-[100%] max-h-[50%]"
                  />
                  <div className=" ease-out duration-150 text-[16px] mb-1 pt-4 max-h-28 bg-white">
                    <h2 className="mb-0 cursor-pointer h-12 line-clamp-2">
                      {item.title}
                    </h2>
                    <p className="text-[#7c6e65] text-[14px] mb-1 hover:text-[#f75454] cursor-pointer">
                      {item.amount}
                    </p>
                    <p className=" mb-1 text-[18px] font-semibold">
                      {item.price}
                    </p>
                  </div>
                  <div className="cursor-pointer  iphone:m-auto bottom-[73px] max-w-[157px] w-full text-white">
                    <EditOutlined className="p-3 rounded ease-in-out duration-100 bg-[#f75454] hover:bg-[#f31616] text-2xl  w-full"></EditOutlined>
                  </div>
                </div>
                <div className="close-button cursor-pointer absolute right-0 top-0 p-2 text-white bg-primary flex justify-center items-center rounded-[10px] hover:bg-[#f31616]">
                  <CloseSquareOutlined className="" />
                </div>
              </Col>
            ))}
          </Row>
        </div>
        {/* <div>{JSON.stringify(datas)}</div> */}
      </div>
    </div>
  );
};

export default AdminPage;
