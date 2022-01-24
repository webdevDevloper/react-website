import { useState, useEffect } from "react";
import React from "react";
import styles from "./LoginForm.module.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axiosClient from "../../apis/axiosClient";
import { setUser } from "../../redux/reducer/userSlice";
function LoginForm(props) {
	// const user = userSelector((state) => state.user.value);

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [data, setData] = useState({ email: "", password: "" });
	const login = async (e) => {
		try {
			e.preventDefault();
			const res = await axiosClient.post("auth/login?", data);
			console.log(res);
			dispatch(setUser(data));
			window.localStorage.setItem("token", res.token);
			navigate("/");
		} catch (err) {
			console.log(err);
		}
		setData({ email: "", password: "" });
	};

	return (
		<div className={styles.login}>
			<div className={styles.login__overlay}></div>
			<form className={styles.login__form}>
				<div className={styles.login__form__container}>
					<h2 className={styles.login__form__container__heading}>Login</h2>
					<h3 className={styles.login__form__container__title}>
						Well Come Back
					</h3>
					<div className={styles.login__form__container__gorup}>
						<input
							type="text"
							placeholder="Email"
							onChange={(e) => setData({ ...data, email: e.target.value })}
							value={data.email}
							autoFocus={true}
						/>
					</div>
					<div className={styles.login__form__container__gorup}>
						<input
							name="password"
							type="password"
							placeholder="Password"
							onChange={(e) =>
								setData({
									...data,
									password: e.target.value,
								})
							}
							value={data.password}
						/>
					</div>
					<button className={styles.login__form__btn} onClick={login}>
						Sign In
					</button>
					<div className={styles.login__form__container__gorup}>
						<div className={styles.login__form__container__gorup__checkbox}>
							<input type="checkbox" />
							<span>Remember Me</span>
						</div>
						<span>Forget Password</span>
					</div>
				</div>
				<p>— Or Sign In With —</p>
				<div className={styles.login__form__socials}>
					<button>Facebook</button>
					<button>Tiwiter</button>
				</div>
				<Link className="link" to="/resgister">
					<button className={styles.login__form__container__resgister__btn}>
						Resgister
					</button>
				</Link>
			</form>
		</div>
	);
}
export default LoginForm;
