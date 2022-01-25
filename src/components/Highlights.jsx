import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Highlight from './ui/Highlight';

const Highlights = () =>{
        return (
           <section id="highlights">
               <div className="container">
                   <div className="row">
                       <h2 className="section__title">
                           Why choose <span className="purple">Connect</span>
                       </h2>
                       <div className="highlight__wrapper">
                           <Highlight 
                           icon={<FontAwesomeIcon icon="truck"/>} 
                           title="Easy and Quick"
                           para=" Get your product the next working day."/>
                           
                           <Highlight 
                           icon={<FontAwesomeIcon icon="mobile"/>} 
                           title="Over 5,000+ Products"
                           para="  Connect has technology to suit all your needs."/>
                           
                           <Highlight 
                           icon={<FontAwesomeIcon icon="tags"/>} 
                           title="Affordable"
                           para=" Get your hands on the lastest smartphones for as little as £20.99 per month."/>
                        </div>
                   </div>
               </div>

           </section>
        )
    
}

export default Highlights

