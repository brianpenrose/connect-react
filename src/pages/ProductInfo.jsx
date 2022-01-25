import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Price from '../components/ui/Price';
import Product from '../components/ui/Product';
import Rating from '../components/ui/Rating';

const ProductInfo = ({ products, addToCart }) => {
    const { id } = useParams();
    const product = products.find((product) => +product.id === +id);

    return (
        <div id="products__body">
            <main id="products__main">
                <div className="products__container">
                    <div className="row">
                        <div className="product__selected--top">
                            <Link to="/products" className="product__link">
                                <FontAwesomeIcon icon="arrow-left" />
                            </Link>
                            <Link to="/products" className="product__link">
                                <h2 className="product__selected--title--top">Products</h2>
                            </Link>
                        </div>
                        <div className="product__selected">
                            <figure className="product__selected--figure">
                                <img src={product.url}
                                    alt=""
                                    className="product__selected--img" />
                            </figure>
                            <div className="product__selected--description">
                                <h2 className="product__selected--title">
                                    {product.title}
                                </h2>
                                <Rating rating={product.rating} />
                                <div className="product__selected--price">
                                    <Price
                                        originalPrice={product.originalPrice}
                                        salePrice={product.salePrice} />
                                </div>
                                <div className="product__summary">
                                    <h3 className="product__summary--title">
                                        Summary
                                    </h3>
                                    <p className="product__summary--para">
                                        {product.description}
                                    </p>

                                </div>
                                <button className="btn" onClick={() => addToCart(product)}>
                                    Add to cart
                                    </button>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="products__container">
                    <div className="row">
                        <div className="product__selected--top">
                            <h2 className="product__selected--title--top">
                                We thought you might like
                            </h2>
                        </div>
                        <div className="products">
                            {
                                products.filter((product) => product.rating === 5 && +product.id !== +id)
                                    .slice(0, 4)
                                    .map(product =>
                                    (<Product product={product} key={product.id} />
                                    ))}
                        </div>
                    </div>

                </div>
            </main>

        </div>
    );
};
export default ProductInfo;
