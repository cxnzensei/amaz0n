import "./App.css";
import { useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Misc from "./components/Misc";
import Checkout from "./components/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import { auth } from "./Firebase";
import { useStateValue } from "./components/StateProvider";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { stripe } from "./config";
import Orders from "./components/Orders";
import Fakebar from "./components/Fakebar";

const promise = loadStripe(stripe);

function App() {
	// eslint-disable-next-line no-empty-pattern
	const [{}, dispatch] = useStateValue();

	useEffect(() => {
		// runs only once when the components loads
		auth.onAuthStateChanged((authUser) => {
			// If login successful
			if (authUser) {
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/checkout">
						<Header />
						<Fakebar />
						<Misc />
						<Checkout />
					</Route>

					<Route path="/orders">
						<Header />
						<Fakebar />
						<Orders />
					</Route>

					<Route path="/login">
						<Login />
					</Route>

					<Route path="/payment">
						<Header />
						<Fakebar />
						<Elements stripe={promise}>
							<Payment />
						</Elements>
					</Route>

					<Route path="/">
						<Header />
						<Fakebar />
						<Misc />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
