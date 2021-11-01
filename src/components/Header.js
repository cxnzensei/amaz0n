import React from "react";
import "../styles/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "../Firebase";

function Header() {
	const handleAuth = () => {
		if (user) {
			auth.signOut();
		}
	};

	// eslint-disable-next-line no-unused-vars
	const [{ basket, user }, dispatch] = useStateValue();

	return (
		<div className="header">
			<Link to="/">
				<img
					className="logo"
					src="/images/AmazonLogo.png"
					alt="Amazon Logo"
				/>
			</Link>
			<div className="search">
				<input className="searchInput" type="text" />
				<SearchIcon className="searchIcon" />
			</div>

			<div className="nav">
				<Link to={!user && "/login"}>
					<div onClick={handleAuth} className="option">
						<span className="opt-1">
							{user ? `${user?.email}` : `Hello Guest`}
						</span>
						<span className="opt-2">
							{user ? "Sign Out" : "Sign In"}
						</span>
					</div>
				</Link>

				<Link to="/orders">
					<div className="option">
						<span className="opt-1">Returns</span>
						<span className="opt-2">&#38; Orders</span>
					</div>
				</Link>

				<div className="option">
					<span className="opt-1">Your</span>
					<span className="opt-2">Prime</span>
				</div>
			</div>

			<Link to="/checkout">
				<div className="option basket">
					<ShoppingCartIcon />
					<span className="opt-2 basketCount">{basket?.length}</span>
				</div>
			</Link>
		</div>
	);
}

export default Header;
