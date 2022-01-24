import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Resgister.module.scss";
import axiosClient from "../../apis/axiosClient";
function Resgister(props) {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const resgister = async (e) => {
    try {
      e.preventDefault();
      setFormErrors(validate(data));
      setIsSubmit(true);
      const res = await axiosClient.post("/auth/signup", data);
      navigate("/login");
    } catch (err) {
      console.log(err.preview.message);
    }
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(data);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be more than 8 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
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
              onChange={(e) => setData({ ...data, name: e.target.value })}
              value={data.name}
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
          <div className={styles.resgister__form__container__gorup}>
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setData({ ...data, passwordConfirm: e.target.value })
              }
              value={data.passwordConfirm}
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
