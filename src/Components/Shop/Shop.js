import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import Header from '../Header/Header'
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    /* useEffect(()=>{
        
    },[]) */
    const handleCart = (product) =>{
        const newProduct = [...carts, product];
        setCarts(newProduct);
    }
    return (
        <>
        <Header></Header>
        <div className='row  mx-auto'>
        <div className='col-md-9 border-end border-4 border-secondary'>
            <div className='row row-cols-1 row-cols-md-2 mt-1 g-4' style={{backgroundColor: 'aliceblue'}}>
                {
                    products.map(product=><Product key={product.id} handleCart={handleCart} product = {product}></Product>)
                }
            
            </div>
        </div>
        <div className="col-md-3 cart-container">
            <Cart cart={carts}></Cart>
        </div>
        </div>
        </>
    );
};

export default Shop;