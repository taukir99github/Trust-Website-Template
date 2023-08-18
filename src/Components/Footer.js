import React from 'react'
import "./Footer.css"
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import {AiOutlineMail} from "react-icons/ai";
import {BiPhoneCall} from "react-icons/bi";
import { Tooltip } from "@mui/material";

const Footer = () => {
  return (
    <div>
        
         <footer className="footer-distributed">

			<div className="footer-left">

				<h3>Aart Welfare<span> Trust </span></h3>

				<p className="footer-links">
					<a href="#" className="link-1">Home</a>
					
					<a href="#">About Us</a>
				
					<a href="#">Contact Us</a>
				
					<a href="#">Support</a>
					
					<a href="#">Teams</a>
					
					<a href="#">Work</a>
				</p>

				<p className="footer-company-name">Developer © 2021</p>
                <h2 className='font' style={{fontWeight:'200',color:'#fff',marginTop:'0.5rem'}}>Md Taukir</h2>
                <p className='font' style={{fontWeight:'200',color:'#fff',marginTop:'0.5rem'}}>taukir00sms@gmail.com</p>
                <p className='font' style={{fontWeight:'200',color:'#fff',marginTop:'0.5rem'}}>7909058803</p>
                <div className="social-media">
            <div className="social-icons">
              <Tooltip title=<p>Facebook</p> placement="left" arrow>
              <a
                href="https://www.facebook.com/profile.php?id=100008176398325"
                target="_blank"
              >
                <FaFacebook className="icon"  style={{color:'#fff'}}/>
              </a></Tooltip>

            </div>
            <div className="social-icons">
              <a href="https://twitter.com/MdTauki72542506" target="_blank">
                <AiFillTwitterCircle className="icon" style={{color:'#fff'}}/>
              </a>
            </div>
            <div className="social-icons">
              <a href="https://github.com/taukir99github" target="_blank">
                <AiFillGithub className="icon" style={{color:'#fff'}}/>
              </a>
            </div>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/md-taukir-992191102"
                target="_blank"
              >
                <AiFillLinkedin className="icon" style={{color:'#fff'}} />
              </a>
            </div>
          </div>
			</div>
            

			<div className="footer-center">

				<div>
					<i className="fa fa-map-marker"></i>
					<p><span>Aashiyana Colony baghmali Hajipur</span> Vaishali, Bihar</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>844101</p>
				</div>

				<div>
					<i className="fa fa-envelope"></i>
					<p><AiOutlineMail style={{fontSize:'20px',marginRight:'1rem'}}/><a href="AartWelfare@gmail.com">AartWelfare@gmail.com</a></p><br />
                    <p><BiPhoneCall style={{fontSize:'20px',marginRight:'1rem',marginLeft:'2rem'}}></BiPhoneCall>7909058803</p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<h3 style={{paddingBottom:'0.5rem'}}>About the Trust</h3>

					Aart Welfare Trust is an Islamic charitable organization committed to improving the well-being of underserved individuals and communities. With a focus on Islamic values, the trust endeavors to alleviate poverty, provide essential services, and empower those in need. Through initiatives in healthcare, education, and emergency relief, Aart Welfare  efficiently utilizing funds and resources, the trust aims to make a meaningful impact.
				</p>

                <div className="social-media">
            <div className="social-icons">
              <Tooltip title=<p>Facebook</p> placement="left" arrow>
              <a
                href="https://www.facebook.com/profile.php?id=100008176398325"
                target="_blank"
              >
                <FaFacebook className="icon"  style={{color:'#fff'}}/>
              </a></Tooltip>

            </div>
            <div className="social-icons">
              <a href="https://twitter.com/MdTauki72542506" target="_blank">
                <AiFillTwitterCircle className="icon" style={{color:'#fff'}}/>
              </a>
            </div>
            
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/md-taukir-992191102"
                target="_blank"
              >
                <AiFillLinkedin className="icon" style={{color:'#fff'}} />
              </a>
            </div>
          </div>

			</div>

		</footer>
    </div>
  )
}

export default Footer
