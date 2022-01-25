
import React from 'react'
import Product from './ui/Product';
import {products} from '../data';

const Featured = () => {
    
    return (
        <section id="features">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Featured <span className="purple">Products</span>
                    </h2>
                    <div className="products">
                        {products
                        .filter((product) => product.rating === 5)
                        .slice(0,4)
                        .map((product) => (
                        <Product product={product} key={product.id}/>
                        ))}
                        
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Featured

