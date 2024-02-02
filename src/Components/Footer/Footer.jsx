import React from "react";
import "./Footer.css";
import logo from "../Assets/logoicon.svg";
import { FaDiscord, FaFacebook, FaTelegram } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import instragram from "../Assets/instragram.svg";
import LinkedIn from "../Assets/LinkedIn.svg";
import FB from "../Assets/FB.svg";
import Twitter from "../Assets/Twitter.svg";
import FooterLogo from "../Assets/FooterLogo.png";
import Discord from "../Assets/discord-round-black-icon.svg"

import {
  BsFacebook,
  BsInstagram,
  BsMedium,
  BsReddit,
  BsTelegram,
  BsTwitter,
  BsDiscord,
  BsXCircle,
  BsX,
  
} from "react-icons/bs";
import { Link } from "react-router-dom";



export default function Footer() {
  return (
    <div className="Main_footer_bg">
      <div className="container">
        <div className="row m-0">
          <div className="col-md-6">
            <img src={FooterLogo} alt="" style={{ width: "15%" }} />
            <p className="cpr">©2024,All Rights Reserved</p>
          </div>
          <div className="col-md-6">
            {/* <img src={logo} alt="" /> */}
            <div>
              <h1 className="join_c">join the community</h1>
              <p className="alli">
                Discuss,build with, and meet thousands of starter from all
                around the world.{" "}
              </p>
              <div className="social_icons d-flex gap-3">


                {/* <a
                  href="https://www.facebook.com/profile.php?id=61554738035919"
                  target="_blank"
                
                >
                  <div></div>
                  <img src={FB} alt="" style={{ width: "80%" }} />
                </a> */}


                {/* <a
                  href="https://twitter.com/Smart_Staking"
                  target="_blank"
          
                >
                  <div>
                    <img src={Twitter} alt="" style={{ width: "80%" }} />
                  </div>
                </a> */}


                {/* <a
                  href="https://www.instagram.com/smartstaking/?igshid=NzZlODBkYWE4Ng%3D%3D"
                  target="_blank"
               
                >
                  <div>
                    <img src={instragram} alt="" style={{ width: "80%" }} />
                  </div>
                </a> */}


{/* 
                <a
                  href="#"
                  target="_blank"
                
                >
                  <div>

                    <img src={Discord} alt="" style={{ width: "30%" }} />
                  </div>
                </a> */}

                {/* <div className="around_social">
                  <FaFacebook className="icons_clr" />
                </div> */}
                <div className="around_social"  style={{textDecoration:"none !important",color:"white"}}>
                  <a href="https://www.instagram.com/smartstaking/?igshid=NzZlODBkYWE4Ng%3D%3D" target="_blank" style={{textDecoration:"none !important"}}> 
                     <AiFillInstagram className="icons_clr" />
                  </a>
               
                </div>

                <div className="around_social">
                  <a href="https://twitter.com/Smart_Staking" target="_blank">
                         <FaXTwitter className="icons_clr" />
                  </a>
             
                </div>

                <div className="around_social">
                  <a href="https://t.me/Smartstaking24" target="_blank">
                        <FaTelegram className="icons_clr" />
                  </a>
              
                </div>


                <div className="around_social">
                  <a href="https://www.facebook.com/profile.php?id=61554738035919" target="_blank">
                     <FaFacebook className="icons_clr" />
                  </a>
                 
                </div>
                <div className="around_social">
                  <a href="https://discord.gg/2WCQjmSH" target="_blank">
                      <FaDiscord className="icons_clr" />
                  </a>
                
                </div>

             
            
                {/* <div className="around_social">
                  <FaDiscord className="icons_clr" />
                </div> */}
            

              </div>
              <div style={{marginTop:"20px"}}>
                <Link to="/About" className="text-decoration-none">
                    <a className="header_links text-decoration-none">About</a>
                </Link>
                <Link to="/OurStory" className="text-decoration-none">
                    <a className="header_links text-decoration-none">Our Story</a>
                </Link>
              </div>

            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
