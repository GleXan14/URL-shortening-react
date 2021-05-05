 
import React, { useRef } from 'react'

const NavBar = () => {

    const btnMenu = useRef();
    const menu = useRef();
    let isActive = true;


    const toggleMenu = () =>{

        btnMenu.current.classList.toggle('fa-times');
        
        if(isActive){
            menu.current.style.right = '0'
            isActive = false;
            
        }else{
            menu.current.style.right = '-100%'
            isActive = true;
        }
        
    }

    
    window.onresize = () => {//restore menu

        let pantalla = window.innerWidth;
        if(pantalla > 800){
            menu.current.style.right = '0'
        }else{
            menu.current.style.right = '-100%'
        }
    }
    

    return (
        <nav className="navbar">
            <div className="navbar-title">
                <h1>Shortly</h1>
            </div>

            <div className="icon-menu">
                 <i ref={btnMenu} className="fas fa-bars" onClick={toggleMenu}></i>
            </div>
            <div ref={menu} className="navbar-content">
                <ul className="navbar-menu1">
                    <li><a href="/">Features</a></li>
                    <li><a href="/">Pricing</a></li>
                    <li><a href="/">Resources</a></li>
                </ul>

                <ul className="navbar-menu2">
                    <li><a href="/">Login</a></li>
                    <li><a href="/">Sign Up</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
