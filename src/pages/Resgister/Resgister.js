import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Resgister.module.scss";
function Resgister(props) {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const resgister = () => {
    console.log(data);
  };

  return (
    <div className={styles.resgister}>
      <div className={styles.resgister__overlay}></div>
      <form className={styles.resgister__form}>
        <div className={styles.resgister__form__container}>
          <h2 className={styles.resgister__form__container__heading}>
            Resgister
          </h2>
          <div className={styles.resgister__form__container__gorup}>
            <input
              type="text"
              placeholder="User Name"
              onChange={(e) => setData({ ...data, username: e.target.value })}
              value={data.username}
              autoFocus={true}
            />
          </div>

          <div className={styles.resgister__form__container__gorup}>
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setData({ ...data, email: e.target.value })}
              value={data.email}
              autoFocus={true}
            />
          </div>
          <div className={styles.resgister__form__container__gorup}>
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={(e) => setData({ ...data, password: e.target.value })}
              value={data.password}
            />
          </div>
          <button className={styles.resgister__form__btn} onClick={resgister}>
            Sign Up
          </button>
        </div>
        <p>— Or Sig In With —</p>
        <div className={styles.resgister__form__socials}>
          <button>Facebook</button>
          <button>Tiwiter</button>
        </div>
        <Link className="link" to="/login">
          <button className={styles.resgister__form__container__resgister__btn}>
            Login
          </button>
        </Link>
      </form>
    </div>
  );
}
export default Resgister;
