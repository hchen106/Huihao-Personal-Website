import React, { useState } from 'react';
//import { FaTimes, FaBars } from 'react-icons/fa';
import './NavBar.css';
//import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';
import {NavBarData} from './NavBarData';

function NavBar() {
    const [click, setClick] = useState(false);
    const iconHandler = () => setClick(!click);

    const [navbarchange, setNarbarchange] = useState(false);
    
    const changecolor = () => {
        if(window.scrollY >= 80) {
            setNarbarchange(true);
        }else{
            setNarbarchange(false);
        }
    };
    window.addEventListener('scroll', changecolor);
    return (
        
    <>
        
        <nav className = 'nav-menu'>
            <ul className = {navbarchange ? 'nav-list-menu active' : 'nav-list-menu'} >
                {
                    NavBarData.map((val,key) => {
                        return  <li key = {key} className = {val.cName}> 
                                <Link to = {val.link} smooth = {true} duration={1000}>
                                    <div>{val.title}</div>
                                </Link>
                            </li>;  
                    })
                }
                
            </ul>
        </nav>
            
    </>
       
       
        

    );
    
}

export default NavBar;