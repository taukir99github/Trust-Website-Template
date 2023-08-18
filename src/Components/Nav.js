import React from 'react'
import "./Nav.css";
import image from "../Images/Art.jpg"
import pic from "../Images/logo.png.webp"

const Nav = () => {
  return (
    <div className='wrapper sticky-top' >
        <nav>
            <div className="nav-left">
                {/* <img src={image} alt="" /> */}
                <img src={pic} alt=''/>
                
            </div>
            <div className="nav-right">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Teams</a></li>
                    <li><a href="#">Work</a></li>
                </ul>
            </div>
            <div className="btn">
                <button>Donate Now</button>
            </div>

        </nav>





    </div>
  )
}

export default Nav