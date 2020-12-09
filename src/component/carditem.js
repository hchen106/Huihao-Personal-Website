import React from 'react'
import './Card.css'
function carditem(props) {
    return (
        <>
            <li className = 'carditem-item'>
                <div className = 'carditem-link'>
                    <div className = 'carditem-header'>
                        <h5 className = 'carditem-title'>{props.title}</h5>
                        {props.icon}
                    </div>
                    <div className = 'carditem-context'>
                            <figure className = 'carditem-figure'>
                                <img className = 'carditem-img' src = {props.src}/>
                            </figure>
                            <div className = 'carditem-info'>
                                {props.text}
                                {props.button}
                            </div>
                    </div>
                   
                
                    
                </div>
            </li>
        </>
    );
}

export default carditem;