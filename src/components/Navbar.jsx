import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import logo from "./seqlogo.png";

function Navbar() {
  return (
    <nav className='navbar'>
           
        <div className='logo-div'>
   <img src= {logo} alt="logo" />        
      <AiOutlineSearch />
        </div>

            <div className='number-div'>
                <div className='male'><span>25</span></div>
                <div className='female'><span>25</span></div>
            </div>

      
     
    </nav>
  );
}

export default Navbar;
