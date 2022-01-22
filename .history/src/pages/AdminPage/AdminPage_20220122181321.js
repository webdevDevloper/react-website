import React from "react";
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

const AdminPage = () => {
  const [data, setData] = useState([]);
  const [_id, set_Id] = useState("");
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
        <div className="course-list"></div>
        <input
          type="text"
          className="
                filter py-[10px] px-[15px] border border-solid rounded-md max-w-[25%] w-full outline-none"
        />
      </div>
    </div>
  );
};

export default AdminPage;
