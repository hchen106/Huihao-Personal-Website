import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './Contact.css'
function contact() {
    const copy = () => {
       
        alert("My Email was copied to your Clipbord!");
     
    }
    return (
        <div className = 'contact'>
           <div className = 'contact-page-header'>
                <h1 className = 'contact-page-title'>What's NEXT</h1>
           </div>
           <div className = 'contact-page-container'> 
                <div className = 'contact-page-container-left'>
                    <p className = 'contact-page-info'>
                        Thanks for your time to see my personal website. <b>I am currently looking for entry level software engineering job opportunities.</b> 
                        If you have any questions or thoughts, please feel free to Email me. 
                        I would happy to answer any questions regarding on this website.
                    </p>
                </div>
                <div className = 'contact-page-container-right'>
                    <CopyToClipboard text={"852165175andy@gmail.com"}>
                        <AiOutlineMail className = 'bottom-contact-icon' onClick={copy}/>
                    </CopyToClipboard>
                    <AiFillLinkedin className = 'bottom-contact-icon' onClick={()=> window.open("https://www.linkedin.com/in/huihao-chen/", "_blank")} />
                    <AiFillGithub className = 'bottom-contact-icon' onClick={()=> window.open("https://github.com/hchen106", "_blank")}/>
                    <button className = 'bottom-contact-button' onClick={()=> window.open("https://drive.google.com/file/d/17duJNkHHiIRI4nnfwwIQhmh3rY2ojVBe/view?usp=sharing", "_blank")}>Resume</button>
                </div>
           </div>
        </div>
    );
}

export default contact;