/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
import "../styles/Payment.css";
import { Link } from "react-router-dom";
import { CardElement } from "@stripe/react-stripe-js";
import { useHistory } from "react-router";
import { db } from "../Firebase";
import uniqid from "uniqid";

function Payment() {
	// eslint-disable-next-line no-unused-vars
	const [{ basket, user }, dispatch] = useStateValue();

	const Calculator = () => {
		return basket?.reduce((total, current) => current.price + total, 0);
	};

	const handleChange = (e) => {
		setDisabled(e.empty);
		setError(e.error ? e.error.message : "");
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setProcessing(true);

		let bucket = { basket: basket, amount: Calculator(), created: Date() };

		setTimeout(() => {
			setProcessing(false);
			history.replace("/orders");
			dispatch({
				type: "EMPTY_BASKET",
			});
			db.collection("users")
				.doc(user?.uid)
				.collection("orders")
				.doc(uniqid())
				.set(bucket);
		}, 2000);
	};

	const history = useHistory();

	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);
	const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState(false);

	return (
		<div className="payment">
			<div className="payment_container">
				<h2>
					Checkout (
					{<Link to="/checkout">{basket?.length} items</Link>})
				</h2>
				<div className="section">
					<div className="pay_title">
						<h3>Delivery Address</h3>
					</div>
					<div className="pay_address">
						<strong>
							<p>{user?.email}</p>
						</strong>
						<p>DCD/ABC, Choir of the Noir,</p>
						<p>Gotham City, DC.</p>
					</div>
				</div>

				<div className="section review_items">
					<div className="pay_title">
						<h3>Review items and delivery details</h3>
					</div>
					<div className="pay_items">
						{basket.map((item) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								imgSrc={item.image}
								price={item.price}
								rating={item.rating}
								num={item.num}
							/>
						))}
					</div>
				</div>

				<div className="section" id="pay_section">
					<div className="pay_title">
						<h3>Payment Method</h3>
					</div>
					<div className="pay_details">
						{basket?.length === 0 ? history.replace("/") : ""}
						<form onSubmit={handleSubmit}>
							<CardElement id="details" onChange={handleChange} />
							<div className="pay_price">
								<CurrencyFormat
									renderText={(value) => (
										<h3> Order Total: {value}</h3>
									)}
									decimalScale={2}
									value={Calculator()}
									displayType={"text"}
									thousandSeparator={true}
									prefix={"$"}
								/>
								<button
									disabled={
										disabled || succeeded || processing
									}
								>
									{processing ? <p>Processing</p> : "Buy Now"}
								</button>
							</div>
						</form>
					</div>
					{error && <div>{error}</div>}
				</div>
			</div>
		</div>
	);
}

export default Payment;
