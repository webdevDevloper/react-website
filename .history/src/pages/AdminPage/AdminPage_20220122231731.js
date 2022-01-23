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
  useEffect(() => {
    getAllClient();
  }, []);
  const getAllClient = () => {
    axios
      .get(`http://localhost:3000/courses`)
      .then(({ data }) => {
        setDatas(data);
        // console.log(data);
      })
      .catch((err) => {
        console.error("error");
      });
  };
  // function renderItem(item) {
  //   const template = `<div class="course-item">
  //   <div class="course-image">
  //     <img src="${item.image}" alt="" />
  //     <button class="course-edit" data-id="${
  //       item.id
  //     }"><i class="fa fa-pencil" style="pointer-events: none;"></i></button>
  //     <button class="course-remove" data-id="${
  //       item.id
  //     }"><i class="fa fa-times"></i></button>
  //   </div>
  //   <div class="course-content">
  //     <h3 class="course-title">
  //       ${item.title}
  //     </h3>
  //     <div class="course-author">${item.author}</div>
  //     <div class="course-meta">
  //     <div class="course-price">${item.price}</div>

  //       <div class="course-rating">${item.rating}</div>
  //       <div class="course-enroll">${item.buyAmount}</div>
  //     </div>
  //     ${
  //       item.bestSeller
  //         ? '<div class="course-best-seller">Best seller</div>'
  //         : ""
  //     }
  //   </div>`;
  //   productList.insertAdjacentHTML("beforeend", template);
  // }
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
                name="rating"
                placeholder="Rating"
                min="1"
                max="5"
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
              <div>
                <label for="best-seller">Best Seller?</label>
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
                filter py-[10px] px-[15px] border border-solid rounded-md max-w-[25%] w-full outline-none"
        />
        <div>
          {/* <Row>
            {datas?.map((item) => (
              <Col span={6}>
                <img src={item?.image} alt="" />
                <div className="">
                  <h4 className="">{item?.title}</h4>
                  <span className="">{item?.author}</span>
                  <span className="">{item?.price}</span>
                </div>
              </Col>
            ))}
          </Row> */}
          <Row>
            {datas.map((item) => (
              <Col
                span={6}
                className="iphone:!max-w-[100%] iphone:!flex-ant100 md:!max-w-[50%] md:!flex-ant50
                  lg:!max-w-[25%] lg:!flex-ant"
              >
                <div className="homepage-product z-50 relative h-full p-[30px] border-solid border-[1px] hover:border-black hover:shadow-3xl border-t-0 hover:border-t-1 hover:border">
                  <img
                    src={item?.image}
                    alt=""
                    className="max-w-full w-full cursor-pointer object-cover h-[400px]"
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
                  <div className="cursor-pointer  iphone:m-auto left-2/4 lg:-z-50  bottom-[73px] max-w-[157px] w-full ">
                    <ShoppingOutlined className="p-3 rounded ease-in-out duration-100 hover:bg-[#f75454] hover:text-white text-2xl  w-full 	lg:left-2/4"></ShoppingOutlined>
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
