import React, { useState, useEffect, useRef }  from 'react'

import { Link } from 'react-router-dom';
import Price from './Price';
import Rating from './Rating';

const Product = ({ product }) => {

    const [img, setImg] = useState();

    const mountedRef = useRef(true);

    useEffect(() => {
        const image = new Image();
        image.src = product.url;
        image.onload = () => {
            setTimeout(() => {
                if (mountedRef.current) {
                    setImg(image);
                }
            }, 300);
        };
        return () => {
            // When the component unmounts 
            mountedRef.current = false;
        };
    }, [product.url]);


    return (
        <div className="product">
            {!img ? (
                <>
                    <div className="product__img--skeleton"></div>
                    <div className="skeleton product__title--skeleton"></div>
                    <div className="skeleton product__rating--skeleton"></div>
                    <div className="skeleton product__price--skeleton"></div>
                </>
            ) : (
                    <>
                        <Link to={`/products/${product.id}`}>
                            <figure className="product--wrapper">
                                <img src={product.url} alt="" className="product__img" />
                            </figure>
                        </Link>
                        <div className="product__title">
                            <Link to={`/products/${product.id}`} className="product__title--link">
                                {product.title}
                            </Link>
                        </div>
                        <Rating rating={product.rating} />
                        <Price salePrice={product.salePrice} originalPrice={product.originalPrice}
                        />
                    </>
                )}
        </div>
    );
};

export default Product


