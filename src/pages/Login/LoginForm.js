import { useState, useEffect } from "react";
import React from "react";
import styles from "./LoginForm.module.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LoginForm(props) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	let navigate = useNavigate();
	useEffect(() => {
		if (localStorage.getItem("user-info")) {
			console.log(localStorage.getItem("user-info"));
			navigate("/");
			console.log("logged");
		}
	}, []);
	async function login(e) {
		e.preventDefault();
		let navigate;
		let item = { email, password };
		let result = await fetch("http://localhost:3004/user", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify(item),
		});
		result = await result.json();
		localStorage.setItem("user-info", JSON.stringify(result));
		navigate("/");
	}

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
							onChange={(e) => setEmail({ ...email, email: e.target.value })}
							value={email.email}
							autoFocus={true}
						/>
					</div>
					<div className={styles.login__form__container__gorup}>
						<input
							name="password"
							type="password"
							placeholder="Password"
							onChange={(e) =>
								setPassword({
									...password,
									password: e.target.value,
								})
							}
							value={password.password}
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
