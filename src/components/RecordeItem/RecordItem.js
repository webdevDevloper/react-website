import React from "react";
import { useState } from "react";
import "./ReocordItem.scss";
import axiosClient from "../../apis/axiosClient";
function RecordItem() {
  return (
    <div className="record__item">
      <div className="record__item__container">
        <div className="record__item__container__img">
          <img
            src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS1_rG3tYOf8Usyh9KbCNHQUn1xOACLUd9-ANRBqJIAOb0Pl0wVzzGHvo7QEvu41dOrqxSMnBjw4No&usqp=CAc"
            alt=""
          />
        </div>
        <div className="record__item__container__desc">
          <h3 className="record__item__container__desc__title">
            Foam lót bàn phím cơ cao su lưu hóa / 3.5mm / Sẵn lỗ ốc
          </h3>
          <p className="record__item__container__desc__classify">
            Phan loai hang: RK-Red
          </p>
          <span className="record__item__container__desc__quantity">X3</span>
          <span className="record__item__container__desc__price">55.000</span>
        </div>
      </div>
      <div className="record__item__option">
        <h3 className="record__item__option__total">
          <span>Total Money:</span>
          227.000
        </h3>
        <button className="record__item__option__reoder">Mua lai</button>
      </div>
    </div>
  );
}
export default RecordItem;
