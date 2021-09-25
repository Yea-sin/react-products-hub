import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    console.log(props.product)
    const {title, image, description, price} = props.product;
    const {rate, count} = props.product.rating;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div>
            <div className="card mb-3 p-3" style={{maxWidth: '540px', backgroundColor:'cadetblue'}}>
                <div className="row g-0">
                    <div className="col-md-4 ">
                      <img src={image} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title">{title}</h4>
                            <h5>Price : {price}</h5>
                            <small>Rating {rate} Out of 5</small>
                            <p className="card-text">{description.slice(0, 130)}</p>
                        </div>
                        <button onClick={()=>props.handleCart(props.product)} type="button" className="btn w-75 btn-success">{element}Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;