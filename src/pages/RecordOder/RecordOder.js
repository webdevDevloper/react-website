import styles from "./RecordOder.module.scss";
import { useState, useEffect } from "react";
import RecordItem from "components/RecordeItem/RecordItem";
import axiosClient from "../../apis/axiosClient";
import prodcutApi from "../../apis/productApi";
import productApi from "../../apis/productApi";
function RecordOder() {
  const [datas, setDatas] = useState();
  const getData = async (controller) => {
    try {
      const res = await axiosClient.get("/purchase", {
        signal: controller.signal,
      });
      console.log(res);
      setDatas(res.item.productId);
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
  console.log(datas);
  return (
    <div>
      {datas.map((item, index) => {
        <RecordItem />;
      })}
      <RecordItem />
    </div>
  );
}
export default RecordOder;
