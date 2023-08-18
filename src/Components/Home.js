import React from 'react'
import "./Home.css"
import photo2 from "../Images/charity.jpg"
import photo from "../Images/pic2.jpg"
import card1 from "../Images/target.png"
import card2 from "../Images/donation.png"
import card3 from "../Images/help.png"


const Home = () => {
  return (
    <div className="main">
    <div className='Hero'>
      <div className="hero-left">
        <h1>Give a helping hand to those who need it</h1>
       <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facere a, rem maxime velit sapiente voluptate libero </p>
       <div className="btn-1">
        <button>Join Us</button>
       </div>
      </div>
      <div className="hero-right">
        <img src={photo} alt="" />
      </div>
    
    </div>
    <div className="hero-bottom">
      <div className="text-area">
        <span>What we are doing</span>
        <h2>We Are In A Mission To Help The Helpless</h2>
      </div>
    </div>
    <div className="container1">
      <div className="card"> 
        <img src={card1} alt="" />
        <div className="card-text">
        <h2>OUR MISSION</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam reprehenderit</p>
        <button>Read More</button>
        </div>
      </div>
      <div className="card">
        <img src={card2} alt="" />
        <div className="card-text">
        <h2>MAKE DONATION</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam reprehenderit</p>
        <button>Read More</button>
        </div>
      </div>
      <div className="card">
        <img src={card3} alt="" />
        <div className="card-text">
        <h2>SUPPORT</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam reprehenderit</p>
        <button>Read More</button>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Home