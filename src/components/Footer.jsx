import React from 'react'
import { Link } from 'react-router-dom';
import connect1 from '../assets/connect1.svg';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row row__column">
                    <Link to="/">
                        <figure className="footer__logo">
                            <img src={connect1} className="footer__logo--img" alt="" />
                        </figure>
                    </Link>
                    <div className="footer__list">
                        <Link to="/" className="footer__link">
                            Home
                            </Link>
                        <span className="footer__link no cursor">
                            About</span>
                        <Link to="/products" className="footer__link">
                            Products
                            </Link>
                        <Link to="/cart" className="footer__link">
                            Cart
                            </Link>
                    </div>
                    <div className="footer__copyright">
                        Copyright &copy; 2022 Connect
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer
