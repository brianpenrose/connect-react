import React from 'react'
import {products} from '../data';
import Product from "./ui/Product"

const Discounted = () => {
    return (
        <section id="recent">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Discounted <span className="purple">Products</span>
                    </h2>
                    <div className="products">
                        {products
                        .filter(product => product.salePrice > 0)
                        .slice(0, 8)
                        .map((product) =>
                        (<Product product={product} key={product.id} />
                        ))}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Discounted
