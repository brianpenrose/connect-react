import React from 'react'

const Price = ({ salePrice, originalPrice }) => {
    return (
        <div className="product__price">
        {salePrice ? (
            <>
                <span className="product__price--normal">£{originalPrice.toFixed(2)}</span>
        £{salePrice.toFixed(2)}
            </>)
             : (
                <>£{originalPrice.toFixed(2)}</>
            )}

    </div>
    );
};

export default Price;
