import React from "react";
import axios from "axios";

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
  return (
    <div>
      <form class="form-post" autocomplete="off">
        <input type="text" name="image" placeholder="Image url" required />
        <input
          type="text"
          name="title"
          placeholder="Enter your title"
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Enter your author"
          required
        />
        <input
          type="text"
          name="rating"
          placeholder="Rating"
          min="1"
          max="5"
          required
        />
        <input type="text" name="price" placeholder="Price" min="1" required />
        <div>
          <label for="best-seller">Best Seller?</label>
          <input type="checkbox" name="bestSeller" id="best-seller" />
        </div>
        <input
          type="text"
          name="buyAmount"
          placeholder="Buy amount"
          value="0"
        />
        <button type="submit" class="form-submit">
          Add course
        </button>
      </form>
      <input type="text" class="filter" name="filter" />
      <div class="course-list"></div>;
    </div>
  );
};

export default AdminPage;
