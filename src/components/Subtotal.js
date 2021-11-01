import React from "react";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router";
import "../styles/Subtotal.css";
import { useStateValue } from "./StateProvider";

function Subtotal() {
	const history = useHistory();

	// eslint-disable-next-line no-unused-vars
	const [{ basket }, dispatch] = useStateValue();

	const Calculator = () => {
		return basket?.reduce((total, current) => current.price + total, 0);
	};

	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							Subtotal ({basket?.length} items) : &nbsp;
							<strong>{value}</strong>
						</p>
						<small className="subtotal_gift">
							<input id="gift" type="checkbox" />
							<label htmlFor="gift">
								This order contains a gift
							</label>
						</small>
					</>
				)}
				decimalScale={2}
				value={Calculator()}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>
			<button
				disabled={basket.length === 0}
				onClick={(e) => history.push("./payment")}
			>
				Proceed to Checkout
			</button>
		</div>
	);
}

export default Subtotal;
