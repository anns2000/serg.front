import React from "react";
import './contact.css';
import {faMapLocation , faEnvelope , faMobile} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
export default function Contact(){
    return (
        <>
            <p className = 'header contact-data'>How To Find Us</p>
            <div className="contact">
            <div className = 'location'>
                <div className='icon-design'><FontAwesomeIcon icon={faMapLocation} className = 'icon'/></div>
                <div className ='data'>
                    <h2>Location</h2>
                    <p>Faculty of Computers & Artificial Intelligence</p>
                    <p>Cairo University</p>
                    <p>5 Ahmed Zewal St., Orman, Giza,</p>
                    <p>office box# 12613</p>
                </div>
            </div>
            <div className = 'location'>
                <div className='icon-design'><FontAwesomeIcon icon={faEnvelope} className = 'icon'/></div>
                <div className ='data'>
                    <h2>Email</h2>
                    <p>aboitcairo@fci.cu.edu.eg</p>
                </div>
            </div>
            <div className = 'location'>
                <div className='icon-design'><FontAwesomeIcon icon={faMobile} className = 'icon'/></div>
                <div className ='data'>
                    <h2>Call</h2>
                    <p>+1 5589 55488 55s</p>
                </div>
            </div>
        </div>
        </>
        
    )
}