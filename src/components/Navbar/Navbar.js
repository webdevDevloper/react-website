import react, { useState } from "react";
import { Link } from "react-router-dom";
import { menuItem } from "./menuItem";
import styles from "./Navbar.module.scss";
import "../../reset.css";

function Navbar() {
  // const user = "";
  const user = {
    avatar:
      "https://gudlogo.com/wp-content/uploads/2019/05/logo-con-cho-soi-14.png",
    name: "loc pham",
    role: "admin",
  };
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobile = () => {
    setClick(false);
  };

  return (
    <div className={styles.nav}>
      <div className={styles.nav__container}>
        <div className={styles.nav__container__icon} onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <Link to="/" className={styles.nav__container__logo}>
          Book Store
          <i className="fas fa-book-open"></i>
        </Link>
        <ul
          className={
            click
              ? styles.nav__container__menu__active
              : styles.nav__container__menu
          }
        >
          {menuItem.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  to={item.url}
                  className={styles.nav__container__menu__link}
                  onClick={closeMobile}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className={styles.nav__container__user}>
          {user ? (
            <>
              <img src={user.avatar} alt="" />
              <span>{user.name}</span>
              <i className="fas fa-caret-down"></i>
              <ul className={styles.nav__container__user__option}>
                <li onClick={closeMobile}>
                  <Link to="/history">My Order</Link>
                </li>

                {user.role === "admin" ? (
                  <li>
                    <Link to="/addproducts">Add Products</Link>
                  </li>
                ) : (
                  ""
                )}
                <li onClick={closeMobile}>Log Out</li>
              </ul>
            </>
          ) : (
            <ul className={styles.nav__container__user__null}>
              <li>
                <Link to="/login">Sign In</Link>
              </li>
              <li>
                <Link to="/resgister">Sign Up</Link>
              </li>
            </ul>
          )}
        </div>
        <div className={styles.nav__container__cart}>
          <Link to={user ? "/cart" : "/resgister"}>
            <i className="fas fa-shopping-bag"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
