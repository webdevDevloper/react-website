import react, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { menuItem } from "./menuItem";
import { useSelector } from "react-redux";
import styles from "./Navbar.module.scss";
import "../../reset.css";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/reducer/userSlice";
function Navbar() {
	const navigate = useNavigate();
	let user = useSelector((state) => state.user.value);
	const dispatch = useDispatch();
	const [click, setClick] = useState(false);

	const handleClick = () => {
		setClick(!click);
	};

	const closeMobile = () => {
		setClick(false);
	};
	const handleLogOut = () => {
		console.log("run.....");
		user = "";
		window.localStorage.removeItem("accessToken");
		dispatch(setUser(user));
		navigate("/login");
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
							<img src="https://cf.shopee.vn/file/c5c6e067395edb3b091f22583e68c013" />
							<span>{user.name}</span>
							<i className="fas fa-caret-down"></i>
							<ul className={styles.nav__container__user__option}>
								<li onClick={closeMobile}>
									<Link to="/history">My Order</Link>
								</li>

								{user.data.role && user.data.role === "admin" ? (
									<li>
										<Link to="/create-product">Add Products</Link>
									</li>
								) : (
									""
								)}
								<li onClick={handleLogOut}>Log Out</li>
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
