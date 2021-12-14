import React from 'react'
import Fade from "react-reveal/Fade"
// Social Icon
import githubIcon from "../images/github.svg"
import codepenIcon from "../images/codepen.svg"
// import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "../images/instagram.svg"
import twitterIcon from "../images/Logo black.svg"
function Contact(){


const social= [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/tiny-witch" },
    {
      img: codepenIcon,
      url: "https://codepen.io/tiny_witch",
    },
    {
        img: twitterIcon,
        url: "https://twitter.com/oddlystar12",
      },
  ]

  // End Contact Section ---------------


    // document.body.style.backgroundColor = 'pink';
    return(
        <div>
            <Fade bottom>
             <div  className="proj-title">Contact</div>
             </Fade>
             import React from "react";

{/* export default function SocialFollow() {
  return ( */}
    <div class="social-container">
      {/* <h3>Social Follow</h3> */}
    </div>
    {/* <div id="work"> 
    <div className="social-icons">
            {social.map((socialLink) => (
                <div className="items"
                href={socialLink.url}
                onClick={socialLink.url}
                
                style={{ 
                  backgroundImage: `url(${socialLink.img})` 
                  
              }}>

              </div>

              ) 
          )
        }
        </div>
</div> */}
    <div className="social-icons">
            {social.map((socialLink) => (
              <a
                // key={index}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialLink.img} alt="icons"></img>
              </a>
               ))}
  {/* );
} */}
</div>
        </div>
    )
}
export default Contact;