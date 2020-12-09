import React from 'react'
import Carditem from './carditem'
import AutomaticCatLitterBoxPoster from '../images/Automatic-Cat-Litter-Box-Poster.jpg'
import CheckandSplitImg from '../images/Check-and-Split-img.jpg'
import CampusFoodBuddyImg from '../images/CampusFoodBuddyImg.jpg'
import OscilloscopeImg from '../images/OscilloscopeImg.png'
import AppointmentSystemImg from '../images/AppointmentSystemImg.jpg'
import PersonalWebsiteImg from '../images/PersonalWebsiteImg.jpg'
import './Card.css'
import IconC from '../icon/c-original.svg';
import IconCpp from '../icon/cplusplus-original.svg';
import IconCs from '../icon/csharp-original.svg';
import IconCss from '../icon/css3-original.svg';
import IconJava from '../icon/java-original.svg';
import IconJs from '../icon/javascript-original.svg';
import IconMsql from '../icon/mysql-original.svg';
import Iconpsql from '../icon/postgresql-original.svg';
import IconPython from '../icon/python-original.svg';
import IconReact from '../icon/react-original.svg';
import { ReactSVG } from 'react-svg';
import { AiFillGithub, AiFillFilePdf } from "react-icons/ai";
import{ useState } from 'react';
import {Redirect} from 'react-router-dom'
import { ImFileVideo, ImNewspaper } from "react-icons/im";




function Card() {
    const [click, setClick] = useState(false);
    const iconHandler = () => setClick(true);
    const renderedirect = () => {
        if(click) {
            return  <a href="https://github.com/pochong/AutomaticCatLitterBox" target="_blank">CSV</a>
        }
    }
    return (
        <div className = 'card'>
            <div className = 'card-container'>
                <div className = 'card-wrapper'>
                    <ul className = 'card-list'>
                        
                        
                        
                    <Carditem
                            title = 'Personal Website'
                            src = {PersonalWebsiteImg}
                            text = { <ul className = 'card-desc'>
                                        <li className = 'card-desc-list'>
                                           Used React hook and CSS to design and build a responsive website to introduce myself and showcase my projects and skills over the years
                                        </li>
                                    </ul>
                            }
                            icon = { <div className = 'card-icons'>
                                        <ReactSVG src={IconCss} className = 'card-icon'/>
                                        <ReactSVG src={IconJs} className = 'card-icon'/>
                                        <ReactSVG src={IconReact} className = 'card-icon'/>
                                    </div>
                            
                            }
                            button = {
                                <div className = 'card-button'>
                                    <ImNewspaper className = 'card-button-icon' onClick={()=> window.open("http://localhost:3000/", "_blank")}/>
                                    <AiFillGithub className = 'card-button-icon' onClick={()=> window.open("https://github.com/hchen106/Huihao-Personal-Website", "_blank")}/>   
                                </div>
                            }
                       
                       />
                        
                        <Carditem
                            title = 'Automatic Litter Box'
                            src = {AutomaticCatLitterBoxPoster}
                            text = { <ul className = 'card-desc'>
                                        <li className = 'card-desc-list'>
                                            A capstone project to design and build a cat litter box that automatically cleans up and separates litters
                                            and cat waste while it is affordable for cat owners and safe for cats
                                        </li>
                                        <li className = 'card-desc-list'>
                                            Designed and implemented state machine by Python in Raspberry Pi 3 Model B+
                                        </li>
                                        <li className = 'card-desc-list'>
                                            Programmed in C in PSoC5 (microcontroller)
                                        </li>
                                        <li className = 'card-desc-list'>
                                            Tested sensors’ functionalities and state machine
                                        </li>
                                    </ul>
                            }
                            icon = { <div className = 'card-icons'>
                                        <ReactSVG src={IconPython} className = 'card-icon'/>
                                        <ReactSVG src={IconC} className = 'card-icon'/>
                                    </div>
                            
                            }
                            button = {
                                <div className = 'card-button'>
                                    <ImNewspaper className = 'card-button-icon' onClick={()=> window.open("https://drive.google.com/file/d/1CudKE9eUeUszb27NoWyZoaYdFV4DNWTn/view?usp=sharing", "_blank")}/>
                                    <ImFileVideo className = 'card-button-icon' onClick={()=> window.open("https://drive.google.com/file/d/1dVp_fCMaISxneIn7ZyU-yJZ8p8HuSrGE/view?usp=sharing", "_blank")}/>
                                    <AiFillFilePdf className = 'card-button-icon' onClick={()=> window.open("https://drive.google.com/file/d/1iMiCAD8SSpPbzNV7E-KCamHj1GY8YvUh/view?usp=sharing", "_blank")}/>
                                    <AiFillGithub className = 'card-button-icon' onClick={()=> window.open("https://github.com/pochong/AutomaticCatLitterBox", "_blank")}/>   
                                </div>
                            }
                       
                       />
                         

                        <Carditem
                            title = 'Appointment System'
                            src = {AppointmentSystemImg}
                            text = { <ul className = 'card-desc'>
                                        <li className = 'card-desc-list'>
                                            An in-store appointment system targeted for small businesses services
                                        </li>
                                        <li className = 'card-desc-list'>
                                            Implemented a suitable database for clients and service providers by SQLite3
                                        </li>
                                        <li className = 'card-desc-list'>
                                            Designed front-end user interface by using QT5
                                        </li>
                                        <li className = 'card-desc-list'>
                                            Managed to store and retrieve data depends on user input by C++
                                        </li>
                                    </ul>
                                    }
                                    icon = { <div className = 'card-icons'>
                                        <ReactSVG src={IconCpp} className = 'card-icon'/>
                                        </div>
                        
                                    }
                                    button = {
                                        <div className = 'card-button'>
                                            <AiFillGithub className = 'card-button-icon' onClick={()=> window.open("https://github.com/pochong/AutomaticCatLitterBox", "_blank")}/>   
                                        </div>
                                    }
                    
                        />

                        <Carditem
                            title = 'Checklist and Split'
                            src = {CheckandSplitImg}
                            text = { <ul className = 'card-desc'>
                                        <li className = 'card-desc-list'>
                                             A mobile application that allows users to create checklists and share tasks to other users in a group
                                        </li>
                                        <li className = 'card-desc-list'>
                                            Designed and implemented a front-end user interface by using Java in Android Studio
                                        </li>
                                        <li className = 'card-desc-list'>
                                             Using agile development methodology
                                        </li>
                                        <li className = 'card-desc-list'>
                                            Defined stories and Iterations during the development
                                        </li>
                                    </ul>
                                    }
                                    icon = { <div className = 'card-icons'>
                                        <ReactSVG src={IconJava} className = 'card-icon'/>
                                        </div>
                        
                                    }
                                    button = {
                                        <div className = 'card-button'>
                                            <AiFillGithub className = 'card-button-icon' onClick={()=> window.open("https://github.com/pochong/AutomaticCatLitterBox", "_blank")}/>   
                                        </div>
                                    }
                    
                        />

                        <Carditem
                            title = 'CampusFoodBuddy'
                            src = {CampusFoodBuddyImg}
                            text = { <ul className = 'card-desc'>
                                        <li className = 'card-desc-list'>
                                            A mobile application that displays pictures, menus, locations and directions of all eateries at the
                                            University of California Santa Cruz developed by using Android Studio
                                        </li>
                                        <li className = 'card-desc-list'>
                                            Implemented eateries locations and directions functionalities by using Google API in Java
                                        </li>
                                        <li className = 'card-desc-list'>
                                             Designed the map page user interface
                                        </li>
                                        <li className = 'card-desc-list'>
                                            Using agile development methodology
                                        </li>
                                    </ul>
                                    }
                                    icon = { <div className = 'card-icons'>
                                        <ReactSVG src={IconJava} className = 'card-icon'/>
                                        </div>
                        
                                    }
                                    button = {
                                        <div className = 'card-button'>
                                            <AiFillFilePdf className = 'card-button-icon' onClick={()=> window.open("https://drive.google.com/file/d/1iMiCAD8SSpPbzNV7E-KCamHj1GY8YvUh/view?usp=sharing", "_blank")}/>
                                            <AiFillGithub className = 'card-button-icon' onClick={()=> window.open("https://github.com/KevinRNelson/CampusFoodBuddy", "_blank")}/>   
                                        </div>
                                    }
                    
                        />

                        <Carditem
                            title = 'Oscilloscope'
                            src = {OscilloscopeImg}
                            text = { <ul className = 'card-desc'>
                                        <li className = 'card-desc-list'>
                                            Implemented a basic oscilloscope that visualizes waveforms from input voltages and has phase shift
                                            functionality
                                        </li>
                                        <li className = 'card-desc-list'>
                                            Coded in C on Raspberry Pi 3 Model B+ and PSoC5 (microcontroller)
                                        </li>
                                        <li className = 'card-desc-list'>
                                            Soldered and wired parts and components on the system
                                        </li>
                                        <li className = 'card-desc-list'>
                                            Used USB, I2C, and UART for data transfer and communication
                                        </li>
                                        <li className = 'card-desc-list'>
                                            Resolved issues regarding data loss, wire connection, and voltage differences
                                        </li>
                                    </ul>
                                    }
                                    icon = { <div className = 'card-icons'>
                                        <ReactSVG src={IconC} className = 'card-icon'/>
                                        </div>
                        
                                    }
                                    button = {
                                        <div className = 'card-button'>
                                            <ImFileVideo className = 'card-button-icon' onClick={()=> window.open("https://drive.google.com/file/d/1rd6-botouRCsE9xH9edfO9picKeJtUNp/view?usp=sharing", "_blank")}/>
                                        </div>
                                    }
                    
                        />
                    </ul>
                   
                    
                </div>
            </div>
        </div>
    );
}

export default Card;