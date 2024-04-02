import React,{useState } from "react";
import { scaleDown as Menu } from "react-burger-menu";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import './Navbar.css'

const  Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/auth');
    }
    

    const homeClass = location.pathname === '/home' ? 'active-item' : ' ';
    const facultyDetailsClass = location.pathname === '/facultydetails' ? 'active-item' : ' ';
    const taskPanelClass = location.pathname === '/taskpanel' ? 'active-item' : ' ';
    const specialControlsClass = location.pathname === '/contact' ? 'active-item' : ' ';
  return (
    <Menu width={ '20%' }>
      <Link className={`menu-item ${homeClass}`} to="home">Home</Link>
      <Link className={`menu-item ${taskPanelClass}`} to="taskpanel">Task Panel</Link>
      <Link className={`menu-item ${facultyDetailsClass}`} to="facultydetails">Faculty Details</Link>
      <Link className={`menu-item ${specialControlsClass}`} to="specialcontrols">Special Controls</Link>
      {
        <button className='menu-item logbtn' onClick={handleLogin}>Login</button> 
      }
    </Menu>
  );
};

export default Navbar;