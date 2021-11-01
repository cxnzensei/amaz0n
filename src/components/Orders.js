import React, { useEffect, useState } from "react";
import "../styles/Orders.css";
import { db } from "../Firebase";
import { useStateValue } from "./StateProvider";
import Order from "./Order";

function Orders() {
	const [{ user }] = useStateValue();

	const [orders, setOrders] = useState([]);

	useEffect(() => {
		if (user) {
			db.collection("users")
				.doc(user?.uid)
				.collection("orders")
				.orderBy("created", "desc")
				.onSnapshot((snapshot) => {
					setOrders(
						snapshot.docs.map((doc) => ({
							id: doc.id,
							data: doc.data(),
						}))
					);
				});
		} else {
			setOrders([]);
		}
	}, [user]);

	return (
		<div className="orders">
			<h2>Your order History {user ? "" : "(Sign in to continue)"}</h2>
			<div className="order">
				{orders?.map((order) => (
					<Order order={order} />
				))}
			</div>
		</div>
	);
}

export default Orders;
