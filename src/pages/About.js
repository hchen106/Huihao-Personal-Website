import React from 'react';

import './About.css';

//import { Link } from 'react-router-dom';
import profile_picture from '../images/profile-picture.jpg';
import {SkillData} from '../component/SkillData';
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import{ useState } from 'react';



function About() {
    const [click, setClick] = useState(false);
    const iconHandler = () => setClick(!click);
    const copy = () => {
       
           alert("My Email was copied to your Clipbord!");
        
    }
    return (
        <div className = 'about'>
           <div className = 'row'>
               
                <div className = 'about-top-desc-wrapper'>
                    <div className = 'about-top-desc-container'>
                        <h4 className = 'about-title'>About me</h4>
                        <p className = 'about-desc'>
                        I am a recent graduate of 2020 from University of California, Santa Cruz with a B.S.
                        in computer engineering who enjoys using my skills and thought to build professional 
                        and interesting applications and projects.     
                        </p>
                    </div>
                     <img className = 'top-pic' src = {profile_picture}></img>
                </div> 
               
                <div className = 'bottom-contact-container'>
                    <div className = 'skill-container'>
                        <h5 className = 'skill-header'>My Skills</h5>
                        <ul className = 'skill-list'>
                            {SkillData.map((item, index)  => {
                                return <li key = {index} className = {item.cName}>
                                    <div className = "skill-item-container">
                                            <div className ='skill-icon'>
                                                {item.icon}
                                            </div>
                                            <div className = 'skill-name'>
                                                {item.Name}
                                            </div>
                                    </div>
                                </li>
                            })}
                        </ul>
                    </div>
                    <div className = 'bottom-contact-icons'>
                    
                            <CopyToClipboard text={"852165175andy@gmail.com"}>
                                <AiOutlineMail className = 'bottom-contact-icon' onClick={copy}/>
                            </CopyToClipboard>
                            <AiFillLinkedin className = 'bottom-contact-icon' onClick={()=> window.open("https://www.linkedin.com/in/huihao-chen/", "_blank")} />
                            <AiFillGithub className = 'bottom-contact-icon' onClick={()=> window.open("https://github.com/hchen106", "_blank")}/>
                            <button className = 'bottom-contact-button' onClick={()=> window.open("https://drive.google.com/file/d/17duJNkHHiIRI4nnfwwIQhmh3rY2ojVBe/view?usp=sharing", "_blank")}>Resume</button>

                    </div>
                </div>
                    
               
               
           </div>
           
        </div>
    );
}

export default About;