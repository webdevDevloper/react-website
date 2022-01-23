import React, { useState, useEffect } from "react";
import axios from "axios";
import Styles from "./AdminPage.module.scss";
import "../AdminPage/AdminPage.css";

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
import { data } from "autoprefixer";

const AdminPage = () => {
  const [datas, setDatas] = useState([]);
  const [_id, set_Id] = useState("");
  //getEffect
  // useEffect(() => {
  //   getAllClient();
  // }, []);
  // const getAllClient = () => {
  //   axios
  //     .get(`http://localhost:3000/courses`)
  //     .then(({ data }) => {
  //       setDatas(data);
  //       // console.log(data);
  //     })
  //     .catch((err) => {
  //       console.error("error");
  //     });
  // };
  //addPost
  // useState(() => {
  //   addPost();
  // }, []);

  const endpoint = "http://localhost:3000/courses";
  const courseList = document.querySelector(".course-list");
  const formPost = document.querySelector(".form-post");
  const formSubmit = document.querySelector(".form-submit");
  const filterInput = document.querySelector(".filter");

  // useEffect(() => {
  //   // addProduct();
  // }, []);
  function addProduct(image, title, author, price) {
    fetch(endpoint, {
      method: "POST",
      body: JSON.stringify({
        image,
        title,
        author,
        price,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
  //formPostFunction
  useEffect(() => {
    const formPostFunction = function (e) {
      e.preventDefault();
      const course = {
        title: this.elements["title"].value,
        author: this.elements["author"].value,
        price: +this.elements["price"].value,
        image: this.elements["image"].value,
      };
    };
    formPost.addEventListener("submit", formPostFunction);
    return () => {
      formPost.removeEventListener("submit", formPostFunction);
    };
  }, []);
  return (
    <div>
      <div className="my-3 mx-4 border-2 border-solid rounded-md p-2">
        <div className="p-2 border-b">
          <div className="">Thêm sản phẩm</div>
        </div>
        <form className="form-post" autocomplete="off">
          <Row gutter={(16, 16)} className="mb-6">
            <Col span={8} className="p-2 ">
              <input
                className="py-[10px] px-[15px] border border-solid rounded-md max-w-[100%] w-full outline-none focus:outline-primary"
                type="text"
                name="image"
                placeholder="Image url"
                required
              />
            </Col>
            <Col span={8} className="p-2 ">
              <input
                className="py-[10px] px-[15px] border border-solid rounded-md max-w-[100%] w-full outline-none focus:outline-primary"
                type="text"
                name="title"
                placeholder="Enter your title"
                required
              />
            </Col>
            <Col span={8} className="p-2 ">
              <input
                className="py-[10px] px-[15px] border border-solid rounded-md max-w-[100%] w-full outline-none focus:outline-primary"
                type="text"
                name="author"
                placeholder="Enter your author"
                required
              />
            </Col>
            <Col span={8} className="p-2 ">
              <input
                className="py-[10px] px-[15px] border border-solid rounded-md max-w-[100%] w-full outline-none focus:outline-primary"
                type="text"
                name="price"
                placeholder="Price"
                min="1"
                required
              />
            </Col>
            <Col span={8} className="p-2 ">
              <div className="flex items-start gap-1 ">
                <label for="best-seller" className="leading-[1] cursor-pointer">
                  Best Seller?
                </label>
                <input type="checkbox" name="bestSeller" id="best-seller" />
              </div>
            </Col>
          </Row>
          <button
            type="submit"
            className={`${Styles.form_submit} py-[10px] px-[15px] border border-solid rounded-md max-w-[100%] w-full outline-none`}
          >
            Add Your Product
          </button>
        </form>
        <div className="product-list"></div>

        <input
          type="text"
          className="
                filter py-[10px] px-[15px] border border-solid rounded-md max-w-[25%] w-full outline-none my-5"
          placeholder="Search your product"
        />
        <div>
          <Row>
            {datas.map((item) => (
              <Col
                span={6}
                className="iphone:!max-w-[100%] iphone:!flex-ant100 md:!max-w-[50%] md:!flex-ant50
                  lg:!max-w-[25%] lg:!flex-ant"
              >
                <div className="homepage-product z-50 relative h-full max-h-[100%] p-[30px] border-solid border-[1px] hover:border-black hover:shadow-3x hover:border-t-1 hover:border">
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
                      {item.author}
                    </p>
                    <p className=" mb-1 text-[18px] font-semibold">
                      {item.price}
                    </p>
                  </div>
                  <div className="cursor-pointer  iphone:m-auto  lg:-z-50  bottom-[73px] max-w-[157px] w-full ">
                    <ShoppingOutlined className="p-3 rounded ease-in-out duration-100 hover:bg-[#f75454] hover:text-white text-2xl  w-full"></ShoppingOutlined>
                  </div>
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
