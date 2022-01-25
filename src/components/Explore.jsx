import React from 'react'
import { Link } from 'react-router-dom';

const Explore = () => {
    return (
        <section id="explore">
            <div className="container">
                <div className="row row__column">

                    <h2>
                        Explore more <span className="purple"></span>
                    </h2>
                    <Link to="/products">
                        <button className="btn">Explore Products </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Explore;





