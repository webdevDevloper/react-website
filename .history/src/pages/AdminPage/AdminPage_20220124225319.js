import React, { useState, useEffect } from "react";
import axios from "axios";
import Styles from "./AdminPage.module.scss";
import "../AdminPage/AdminPage.css";
import productApi from "apis/productApi";
// import { axiosInstance } from "../../apis/baseApi";
// import axiosClient from "apis/axiosClient";
import itemApi from "apis/items/itemApi";
import axiosClient from "apis/axiosClient";

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
    thumbnail: "",
    title: "",
    description: "",
    price: "",
    category: "",
  });
  //get thumbnail
  // useEffect(() => {
  //   return () => {
  //     data.thumbnail && URL.revokeObjectURL(data.thumbnail.preview);
  //   };
  // }, [data.thumbnail]);

  const handleRenderthumbnail = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setData({ ...data, thumbnail: file });
    setAvatar(file);
    console.log(file);
  };

  //get fake Api

  //get API from server
  //--------------------add prodcut-------------------------
  // const addProductAdmin = async (post) => {
  //   try {
  //     let response = await axiosClient.post("items", post);
  //     console.log(response);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    let posts = {
      thumbnail: data.thumbnail,
      title: data.title,
      description: data.description,
      price: data.price,
      category: data.category,
    };
    var bodyFormData = new FormData();
    bodyFormData.append("thumbnail", data.thumbnail, data.thumbnail.name);
    bodyFormData.append("title", data.title);
    bodyFormData.append("description", data.description);
    bodyFormData.append("price", data.price);
    bodyFormData.append("category", data.category);
    axios({
      method: "post",
      url: "http://34.225.250.142:3000/api/v1/items",
      data: bodyFormData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWMwZTM3ZGQ4NmJkZGExZGZlYjQ0ZiIsImlhdCI6MTY0Mjg3MTA0MCwiZXhwIjoxNjQ1NDYzMDQwfQ.acSQSZ6Mo2ZVRqQqk4ykqmhHbqbf9HAxPgghBfdrTrQ`,
      },
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
    // const formData = new FormData();
    // formData.append("file", this.state.pictureAsFile);
    // addProductAdmin(posts);
    // fetchProductList();

    setData({
      thumbnail: "",
      title: "",
      category: "",
      price: "",
      description: "",
    });
  };
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
                name="thumbnail"
                id="input-file"
                placeholder="thumbnail url"
                required
                onChange={handleRenderthumbnail}
              />
              {avatar && (
                <div className="h-[200px] flex border border-solid overflow-hidden rounded-md">
                  <img
                    src={avatar.preview}
                    alt=""
                    className="object-contain h-full"
                  />
                </div>
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
                name="description"
                placeholder="Enter your description"
                required
                value={data.description}
                onChange={(e) =>
                  setData({
                    ...data,
                    description: e.target.value,
                  })
                }
              />
            </Col>
            <Col
              span={8}
              className="p-2 iphone:!max-w-[100%] iphone:!flex-ant100"
            >
              <input
                className="py-[10px] px-[15px] border border-solid rounded-md max-w-[100%] w-full outline-none focus:outline-primary"
                type="text"
                name="category"
                placeholder="Enter your category"
                required
                value={data.category}
                onChange={(e) => setData({ ...data, category: e.target.value })}
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
                    src={item?.thumbnail}
                    alt=""
                    className="max-w-full w-full cursor-pointer object-cover h-[100%] max-h-[50%]"
                  />
                  <div className=" ease-out duration-150 text-[16px] mb-1 pt-4 max-h-28 bg-white">
                    <h2 className="mb-0 cursor-pointer h-12 line-clamp-2">
                      {item.title}
                    </h2>
                    <p className="text-[#7c6e65] text-[14px] mb-1 hover:text-[#f75454] cursor-pointer">
                      {item.category}
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
