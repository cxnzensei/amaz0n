import React from "react";
import "../styles/Product.css";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { useStateValue } from "./StateProvider";

function Product({ title, imgSrc, price, rating, num }) {
	// eslint-disable-next-line no-unused-vars
	const [{ basket }, dispatch] = useStateValue();

	const addToBasket = () => {
		// Dispact an item into data layer
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				title: title,
				image: imgSrc,
				price: price,
				rating: rating,
				num: num,
			},
		});
	};

	return (
		<div className="product">
			<div className="product-info">
				<p className="title">{title.substr(0, 50)}...</p>
				<p className="price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="rating">
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

					<small> &nbsp; {num} ratings</small>
				</div>
			</div>
			<img className="prodImg" src={imgSrc} alt="" />

			<button onClick={addToBasket}> Add to cart </button>
		</div>
	);
}

export default Product;
