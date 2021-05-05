import React from 'react'
import img from '../../images/illustration-working.svg'


const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-info">
                
                <div className="banner-text">
                    <h1>More than just shorter links</h1>
                    <p>Build your brand’s recognition and get detailed insights 
                    on how your links are performing.</p>

                </div>
                <div className="banner-button">
                    <button type="button">Get Started</button>
                </div>
            
            </div>

            <div className="banner-img">
                <img src={img} alt=""></img>
            </div>

            
        </div>
    )
}

export default Banner
