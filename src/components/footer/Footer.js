import React from 'react'

const Footer = () => {
    return (
        <div className="footer-container">
           <div className="title">
                <h1>Shortly</h1>
           </div>
           <nav className="menu-container">
                <ul className="menu">
                    <li><a href="/">Features</a></li>
                    <li><a href="/">Link Shortening</a></li>
                    <li><a href="/">Branded Links</a></li>
                    <li><a href="/">Analytics</a></li>
                </ul>

                <ul className="menu">
                    <li><a href="/">Resources</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Developers</a></li>
                    <li><a href="/">Support</a></li>
                </ul>

                <ul className="menu">
                    <li><a href="/">Company</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Our Team</a></li>
                    <li><a href="/">Careers</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
           </nav>
           
           <div className="social">
               <a href="/"><i className="fab fa-facebook-square"></i></a>
               <a href="/"><i className="fab fa-twitter"></i></a>
               <a href="/"><i className="fab fa-pinterest"></i></a>
               <a href="/"><i className="fab fa-instagram"></i></a>
           </div>
        </div>
    )
}

export default Footer
