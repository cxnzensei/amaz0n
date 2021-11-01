import React from "react";
import "../styles/CheckoutProduct.css";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({
  id,
  imgSrc,
  title,
  price,
  rating,
  num,
  hideButton,
}) {
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkout_img" src={imgSrc} alt={id} />
      <div className="checkout_info">
        <p className="checkout_title">{title}</p>
        <p className="checkout_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout_rating">
          {rating % 1 === 0 ? (
            Array(Math.floor(rating / 1))
              .fill()
              .map((element) => <StarIcon />)
          ) : (
            <span>
              {Array(Math.floor(rating / 1))
                .fill()
                .map((element) => (
                  <StarIcon />
                ))}
              <StarHalfIcon />
            </span>
          )}
          <small>
            &nbsp;
            {num}
            &nbsp;
            {num === 1 ? "rating" : "ratings"}
          </small>
        </div>
        {!hideButton && (
          <button id="noDisplay" onClick={removeFromBasket}>
            Remove from Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
