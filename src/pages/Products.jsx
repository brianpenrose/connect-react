import React, { useState } from 'react'
import Product from '../components/ui/Product';


const Products = ({ products: initalProducts }) => {
    const [products, setProducts] = useState(initalProducts);

    function filterProducts(filter) {
        console.log(filter)
        if (filter === 'LOW_TO_HIGH') {
            setProducts(products.slice()
            .sort((a, b) => 
            (a.salePrice || a.originalPrice) - 
            (b.salePrice || b.originalPrice)));
        }
        if (filter === 'HIGH_TO_LOW') {
            setProducts(products.slice()
            .sort((a, b) => 
            (b.salePrice || b.originalPrice) - 
            (a.salePrice || a.originalPrice)));
        }
        if (filter === 'RATING'){
            setProducts(products.slice()
            .sort((a, b) => 
                b.rating - a.rating));
        }
    }
    return (
        <div id="products__body">
            <main id="products__main">
                <section>
                    <div className="products __container">
                        <div className="row">
                            <div className="products__header">
                                <h2 className="section__title products__header--title">All Products</h2>
                                <select id="filter" defaultValue="DEFAULT" onChange={(event) => filterProducts(event.target.value)}>
                                    <option value="DEFAULT" disabled>Sort</option>
                                    <option value="LOW_TO_HIGH">Price, Low to High</option>
                                    <option value="HIGH_TO_LOW">Price, High to Low</option>
                                    <option value="RATING">Rating</option>
                                </select>
                            </div>
                            <div className="products">
                                {
                                    products.map(product => (<Product product={product} key={product.id} />

                                    ))}

                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div >
    );
};
export default Products;
