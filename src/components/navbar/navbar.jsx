import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import logo from '../../images/logo.png'
export default function Navbar() {
  const [active, setActive] = useState(false);
 
  return (
    <nav className="nav" id="nav">
      <NavLink to="/" onClick={() => {setActive(false)}}>
        <div className = 'logo'><img src= {logo} style={{width: '40px'}} alt='logo'/><p>SRGE</p></div>
      </NavLink>
      <ul className={`menu ${active ? "active" : "notactive"}`}>
        <li className="nav-item" onClick={() => {active ? setActive(false) : setActive(true)}}>
          <NavLink activeStyle={{ color: "#BDA175" }} to="/" exact className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className='dropdown-text' href='#'>About <FontAwesomeIcon icon={faChevronDown} /></a>
          <ul className='dropdown-list'>
            <li>
            <NavLink activeStyle={{ color: "#BDA175" }} to="/about" className="nav-link">
              About
            </NavLink>
            </li>
            <li>
            <NavLink activeStyle={{ color: "#BDA175" }} to="/members" className="nav-link">
              Members
            </NavLink>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className='dropdown-text' href='#'>Activities <FontAwesomeIcon icon={faChevronDown} /></a>
          <ul className='dropdown-list'>
            <li>
              <NavLink activeStyle={{ color: "#BDA175" }} to="/" className="nav-link">
              Academic Activities
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ color: "#BDA175" }} to="/" className="nav-link">
              Social Activities
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown" >
        <a className='dropdown-text' href='#'>Publications <FontAwesomeIcon icon={faChevronDown} /></a>
        <ul className='dropdown-list'>
          <li>
          <NavLink activeStyle={{ color: "#BDA175" }} to="/books" className="nav-link">
           Books
            </NavLink>
          </li>
            <li>
            <NavLink activeStyle={{ color: "#BDA175" }} to="/bookchapters" className="nav-link">
            Book Chapters
            </NavLink>
            </li>
           <li>
           <NavLink activeStyle={{ color: "#BDA175" }} to="/journal" className="nav-link">
            Journal Papers
            </NavLink>
           </li>
           <li>
           <NavLink activeStyle={{ color: "#BDA175" }} to="/intconf" className="nav-link">
            International Conference papers
            </NavLink>
           </li>
           <li>
           <NavLink activeStyle={{ color: "#BDA175" }} to="/national" className="nav-link">
            National Conference papers
            </NavLink>
           </li>
            
          </ul>
        </li>
        <li className="nav-item" onClick={() => {active ? setActive(false) : setActive(true)}}>
          <NavLink
            activeStyle={{ color: "#BDA175" }}
            to="/events"
            className="nav-link">
            Events
          </NavLink>
        </li>
        <li className="nav-item" onClick={() => {active ? setActive(false) : setActive(true)}}>
          <NavLink
            activeStyle={{ color: "#BDA175" }}
            to="/contact"
            className="nav-link">
            Contact
          </NavLink>
        </li>
      </ul>
      <div className={`${!active ? "nav-toggler" : "nav-toggler toggleIcon"}`} onClick={() => {active ? setActive(false) : setActive(true);}}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}
