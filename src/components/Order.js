import "../styles/Order.css";
import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import moment from "moment";

function Order({ order }) {
  let dateTime = moment(order.data.created).format("MMMM Do YYYY, h:mma");

  return (
    <div className="order">
      <div className="order_item">
        <h3>Order ID - {order.id}</h3>
        <p>{dateTime}</p>
        {order.data.basket?.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            imgSrc={item.image}
            price={item.price}
            rating={item.rating}
            num={item.num}
            hideButton={true}
          />
        ))}
        <CurrencyFormat
          renderText={(value) => (
            <h3 className="order_total"> Order Total: {value}</h3>
          )}
          decimalScale={2}
          value={order.data.amount}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </div>
    </div>
  );
}

export default Order;
