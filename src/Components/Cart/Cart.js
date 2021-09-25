import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart)
    const carts = props.cart;
    // console.log(carts)
    // let total = 0;
    /* for(const product of carts){
        total = total + product.price;
    } */
    const reducer = (prev, current)=>prev+current.price;
    const total = carts.reduce(reducer, 0)
    return (
        <div className='cart-container'>
            <div className='text-center'>
                <h2>Cart</h2>
                <h4>Order summary</h4>
            </div>
            <div>
                <h5>Ordered Items :{carts.length}</h5>
                <h5>Price :{total.toFixed(2)}</h5>
            </div>
        </div>
    );
};

export default Cart;