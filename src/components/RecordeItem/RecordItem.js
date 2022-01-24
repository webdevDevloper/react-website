import React from "react";
import { useState } from "react";
import "./ReocordItem.scss";
import axiosClient from "../../apis/axiosClient";
function RecordItem({ img, title, category, price, quantity }) {
  const total = price * quantity;
  return (
    <div className="record__item">
      <div className="record__item__container">
        <div className="record__item__container__img">
          <img src={img} alt="" />
        </div>
        <div className="record__item__container__desc">
          <h3 className="record__item__container__desc__title">{title}</h3>
          <p className="record__item__container__desc__classify">{category}</p>
          <span className="record__item__container__desc__quantity">X3</span>
          <span className="record__item__container__desc__price">{price}</span>
        </div>
      </div>
      <div className="record__item__option">
        <h3 className="record__item__option__total">
          <span>Total Money:</span>
          {total}
        </h3>
        <button className="record__item__option__reoder">Mua lai</button>
      </div>
    </div>
  );
}
export default RecordItem;
