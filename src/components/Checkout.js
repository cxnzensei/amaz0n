import React from 'react';
import '../styles/Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {

    // eslint-disable-next-line no-unused-vars
    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className="checkout_left">
                <img className='checkout_ad' src="./images/ad_ama.png" alt="ad_ama" />
                <p className='user'> {user ? `Welcome ${user?.email}` : 'Welcome Guest'} </p>
                <h2> {basket.length === 0 ? `Your cart is empty` : `Your cart`} </h2>
                <div className='cart-items'>
                    {basket.map(item => (
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
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
