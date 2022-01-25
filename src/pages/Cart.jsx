import React from 'react'
import { Link } from "react-router-dom";
import EmptyCart from "../assets/empty_cart.svg";

const Cart = ({ cart, updateCart, removeItem, totals }) => {
    return (
        <div id="products__body">
            <main id="products__main">
                <div className="products__container">
                    <div className="row">
                        <div className="product__selected--top">
                            <h2 className="cart__title">
                                Cart
                            </h2>
                        </div>
                        <div className="cart">
                            <div className="cart__header">
                                <span className="cart__product">Product</span>
                                <span className="cart__quantity">Quantity</span>
                                <span className="cart__total">Price</span>
                            </div>
                            <div className="cart__body">
                                {cart.map((product) => {
                                    const itemPrice = product.salePrice || product.originalPrice;
                                    return (
                                        <div className="cart__item">
                                            <div className="cart__product">
                                                <img
                                                    src={product.url}
                                                    className="cart__product--img"
                                                    alt=""
                                                />
                                                <div className="cart__product--info">
                                                    <span className="cart__product--title">
                                                        {product.title}
                                                    </span>
                                                    <span className="cart__product--price">
                                                        £{itemPrice.toFixed(2)}
                                                    </span>
                                                    <button className="cart__product--remove"
                                                        onClick={() => removeItem(product)}>
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="cart__quantity">
                                                <input type="number"
                                                    className="cart__input"
                                                    min={0}
                                                    max={99}
                                                    value={product.quantity}
                                                    onChange={(event) =>
                                                        updateCart(product, event.target.value)
                                                    } />
                                            </div>
                                            <div className="cart__total">
                                                £{(itemPrice * product.quantity).toFixed(2)}
                                            </div>
                                        </div>
                                    );
                                })}
                                {/* {(!cart || !cart.length) && <img src={EmptyCart}/>} */}
                                {(!cart || !cart.length) && (
                                    <div className="cart__empty">
                                        <img className="cart__empty--img" src={EmptyCart} alt="" />
                                        <h2>You don't have any products in your cart!</h2>
                                        <Link to="/products">
                                            <button className="btn">Browse Products</button>
                                        </Link>
                                    </div>
                                )}

                            </div>
                        </div>
                        {cart && cart.length > 0 && (
                            <div className="total">
                                <div className="total__item total__sub-total">
                                    <span>Subtotal</span>
                                    <span>£{totals.subtotal.toFixed(2)}</span>
                                </div>
                                <div className="total__item total__tax">
                                    <span>Tax</span>
                                    <span>${totals.tax.toFixed(2)}</span>
                                </div>
                                <div className="total__item total__price">
                                    <span>total</span>
                                    <span>£{totals.total.toFixed(2)}</span>
                                </div>
                                <button className="btn btn__checkout no-cursor"
                                    onClick={() => alert(`Havent got around to doing this :(`)}>
                                    Proceed to checkout
                            </button>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Cart;
