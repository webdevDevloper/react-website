import React from "react";
import axios from "axios";
import Styles from "./AdminPage.module.scss";

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
  // const {image, title, author, rating...addPost.} = course;
  // const {image, title, author, rating...addPost.} = course;
  // const endpoint = "http://localhost:3000/courses";
  // const courseList = document.querySelector(".course-list");
  // const formPost = document.querySelector(".form-post");
  // const formSubmit = document.querySelector(".form-submit");
  // const filterInput = document.querySelector(".filter");
  // let updateId = null;
  // // git clone
  // function debounceFn(func, wait, immediate) {
  //   let timeout;
  //   return function () {
  //     let context = this,
  //       args = arguments;
  //     let later = function () {
  //       timeout = null;
  //       if (!immediate) func.apply(context, args);
  //     };
  //     let callNow = immediate && !timeout;
  //     clearTimeout(timeout);
  //     timeout = setTimeout(later, wait);
  //     if (callNow) func.apply(context, args);
  //   };
  // }

  // filterInput.addEventListener(
  //   "keydown",
  //   debounceFn(function (e) {
  //     let path = endpoint;
  //     if (e.target.value !== "") {
  //       path = `${endpoint}?title_like=${e.target.value}`;
  //     }
  //     getCourses(path);
  //   }, 500)
  // );

  // async function addNewCourse({
  //   image,
  //   title,
  //   author,
  //   rating,
  //   price,
  //   bestSeller,
  //   buyAmount,
  // }) {
  //   await fetch(endpoint, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       image,
  //       title,
  //       author,
  //       rating,
  //       price,
  //       bestSeller,
  //       buyAmount,
  //     }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   });
  // }
  // async function updateCourse({
  //   id,
  //   image,
  //   title,
  //   author,
  //   rating,
  //   price,
  //   bestSeller,
  //   buyAmount,
  // }) {
  //   await fetch(`${endpoint}/${id}`, {
  //     method: "PUT",
  //     body: JSON.stringify({
  //       image,
  //       title,
  //       author,
  //       rating,
  //       price,
  //       bestSeller,
  //       buyAmount,
  //     }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   });
  // }

  // async function deleteCourse(id) {
  //   await fetch(`${endpoint}/${id}`, {
  //     method: "DELETE",
  //   });
  // }
  // async function getSingleCourse(id) {
  //   const response = await fetch(`${endpoint}/${id}`);
  //   const data = await response.json();
  //   return data;
  // }

  // function renderItem(item) {
  //   const template = `<div class="course-item">
  // <div class="course-image">
  //   <img src="${item.image}" alt="" />
  //   <button class="course-edit" data-id="${
  //     item.id
  //   }"><i class="fa fa-pencil" style="pointer-events: none;"></i></button>
  //   <button class="course-remove" data-id="${
  //     item.id
  //   }"><i class="fa fa-times"></i></button>
  // </div>
  // <div class="course-content">
  //   <h3 class="course-title">
  //     ${item.title}
  //   </h3>
  //   <div class="course-author">${item.author}</div>
  //   <div class="course-meta">
  //     <div class="course-rating">${item.rating}</div>
  //     <div class="course-enroll">${item.buyAmount}</div>
  //   </div>
  //   ${
  //     item.bestSeller ? '<div class="course-best-seller">Best seller</div>' : ""
  //   }
  // </div>`;
  //   courseList.insertAdjacentHTML("beforeend", template);
  // }

  // async function getCourses(link = endpoint) {
  //   const response = await fetch(link);
  //   const data = await response.json();
  //   courseList.innerHTML = "";
  //   if (data.length > 0 && Array.isArray(data)) {
  //     data.forEach((item) => renderItem(item));
  //   }
  // }

  // formPost.addEventListener("submit", async function (e) {
  //   e.preventDefault();
  //   const course = {
  //     title: this.elements["title"].value,
  //     author: this.elements["author"].value,
  //     rating: +this.elements["rating"].value,
  //     price: +this.elements["price"].value,
  //     image: this.elements["image"].value,
  //     bestSeller: this.elements["bestSeller"].checked,
  //     buyAmount: +this.elements["buyAmount"].value,
  //   };
  //   console.log(updateId);
  //   updateId
  //     ? await updateCourse({ id: updateId, ...course })
  //     : await addNewCourse(course);
  //   this.reset();
  //   await getCourses();
  //   updateId = null;
  //   formSubmit.textContent = "Add course";
  // });

  // courseList.addEventListener("click", async function (e) {
  //   if (e.target.matches(".course-remove")) {
  //     const id = +e.target.dataset.id;
  //     await deleteCourse(id);
  //     await getCourses();
  //   } else if (e.target.matches(".course-edit")) {
  //     const id = +e.target.dataset.id;
  //     const data = await getSingleCourse(id);
  //     formPost.elements["image"].value = data.image;
  //     formPost.elements["title"].value = data.title;
  //     formPost.elements["author"].value = data.author;
  //     formPost.elements["rating"].value = data.rating;
  //     formPost.elements["price"].value = data.price;
  //     formPost.elements["bestSeller"].checked = data.bestSeller;
  //     formPost.elements["buyAmount"].value = data.buyAmount;
  //     formSubmit.textContent = "Update course";
  //     updateId = id;
  //   }
  // });

  // getCourses();
  // // json-server --watch db.json
  // /**
  //  * Course
  //  * image
  //  * title
  //  * author
  //  * rating
  //  * price
  //  * bestSeller
  //  * buyAmount
  //  */

  return (
    <div>
      <div className="my-3 mx-4 border-2 border-solid rounded-md">
        <div className="p-2 border-b">
          <div className="">Thêm sản phẩm</div>
        </div>
        <form className="form-post p-2" autocomplete="off">
          <Row gutter={(16, 16)} className="mb-6">
            <Col span={8} className="p-2 ">
              <input
                className="py-[10px] px-[15px] border border-solid rounded-md max-w-[100%] w-full outline-none"
                type="text"
                name="image"
                placeholder="Image url"
                required
              />
            </Col>
            <Col span={8} className="p-2 ">
              <input
                className="py-[10px] px-[15px] border border-solid rounded-md max-w-[100%] w-full outline-none"
                type="text"
                name="title"
                placeholder="Enter your title"
                required
              />
            </Col>
            <Col span={8} className="p-2 ">
              <input
                className="py-[10px] px-[15px] border border-solid rounded-md max-w-[100%] w-full outline-none"
                type="text"
                name="author"
                placeholder="Enter your author"
                required
              />
            </Col>
            <Col span={8} className="p-2 ">
              <input
                className="py-[10px] px-[15px] border border-solid rounded-md max-w-[100%] w-full outline-none"
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
                className="py-[10px] px-[15px] border border-solid rounded-md max-w-[100%] w-full outline-none"
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
            <Col span={8} className="p-2 "></Col>
            <Col span={8} className="p-2 "></Col>
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
