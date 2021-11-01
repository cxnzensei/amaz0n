import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../styles/Login.css";
import { auth } from "../Firebase";

function Login() {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signIn = (e) => {
		e.preventDefault();
		// Firebase Auth
		auth.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				history.push("/");
			})
			.catch((e) => {
				document.getElementById("error").textContent =
					e.message.slice(9, -1) + `. Try again`;
			});
	};

	const register = (e) => {
		e.preventDefault();
		// Firebase Register
		auth.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				history.push("/");
			})
			.catch((e) => {
				document.getElementById("error").textContent =
					e.message.slice(9, -1) + `. Try again`;
			});
	};

	return (
		<div className="login">
			<Link to="/">
				<img
					className="login_logo"
					src="/images/AmazonLogin.png"
					alt="Amazon Logo"
				/>
			</Link>

			<div className="login_container">
				<h1>Sign In</h1>
				<p id="error"></p>
				<form>
					<h5>Email</h5>
					<input
						type="text"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>

					<h5>Password</h5>
					<input
						type="password"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					/>

					<button onClick={signIn} className="logInBtn" type="submit">
						Sign In
					</button>
				</form>
				<p>
					By signing-in you agree to <strong> Damnmazon's </strong>{" "}
					Conditions of Use & Sale. Please see our Privacy Notice, our
					Cookies Notice and our Internet based ads notice.
				</p>
				<button className="signUpBtn" onClick={register}>
					Create your Amazon account
				</button>
			</div>
		</div>
	);
}

export default Login;
