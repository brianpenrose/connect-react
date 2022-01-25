import React from 'react'
import { Link } from 'react-router-dom';
import UndrawTech from '../assets/Undraw_Tech.svg';

const Landing = () => {
    return (
        <section id="landing">
            <header>
               <div className="header__container">
                   <div className="header__description">
                       <h1>UK & Irelands biggest tech supplier</h1>
                       <h2>Everything you need here at <span className="purple">Connect</span></h2>
                       <a href="#features">
                           <button className="btn">Browse Products</button>
                       </a>
                    </div>
                    <figure className="header__img--wrapper">
                        <img src={UndrawTech} alt=""/>
                    </figure>
                </div> 
            </header>
        </section>
    );
}
export default Landing;
