import styles from "./RecordOder.module.scss";
import { useState, useEffect } from "react";
import RecordItem from "components/RecordeItem/RecordItem";
import axiosClient from "../../apis/axiosClient";
import prodcutApi from "../../apis/productApi";
import productApi from "../../apis/productApi";
import { data } from "autoprefixer";
function RecordOder() {
  const [datas, setDatas] = useState([]);
  const getData = async (controller) => {
    try {
      const res = await axiosClient.get("/purchase", {
        signal: controller.signal,
      });
      setDatas(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const controller = new AbortController();
    getData(controller);
    return () => {
      controller.abort();
    };
  }, []);
  const products = datas.map((item) => {
    return item.items;
  });
  const listItem = products.flat();
  console.log(listItem);
  return (
    <div className="record__container">
      {listItem.map((item, index) => {
        return (
          <RecordItem
            img={item.productId.imageUrl}
            title={item.productId.title}
            category={item.productId.category}
            price={item.productId.price}
            quantity={item.quantity}
          />
        );
      })}
    </div>
  );
}
export default RecordOder;
