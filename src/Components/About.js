import React from 'react'
import "./About.css"
import foto from "../Images/Pic.jpg"

const About = () => {
  return (
    <div className='main'>
        <h1 style={{marginLeft:'35rem',marginTop:'5rem'}}>About Us</h1>
        <hr />
        <div className="about">
            <div className="about-left">
                <h2>
                "Charity is an act of worship that purifies the soul and strengthens the community." - Caliph Abu Bakr as-Siddiq
                </h2>
                <p>Aart Welfare Trust is an Islamic charitable organization committed to improving the well-being of underserved individuals and communities. With a focus on Islamic values, the trust endeavors to alleviate poverty, provide essential services, and empower those in need. Through initiatives in healthcare, education, and emergency relief, Aart Welfare  efficiently utilizing funds and resources, the trust aims to make a meaningful impact.</p>
                <div className="about-btn">
                    <button>Read More</button>
                </div>
            </div>
            <div className="about-right">
                <img src={foto} alt="" />
            </div>
        </div>
        <h1 style={{marginLeft:'9rem'}}>OUR VOLUNTEERS</h1>
        <div className="main-card">
        <div className="team-card">
            <div className="card">crad1</div>
            <div className="card">crad2</div>
            <div className="card">crad3</div>
        </div>
            <div className="team-card2">
            <div className="card">crad4</div>
            <div className="card">crad5</div>
            <div className="card">crad6</div>
        </div>
    </div>
    </div>
  )
}

export default About