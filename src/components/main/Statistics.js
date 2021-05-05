import React from 'react'

import img1 from '../../images/icon-brand-recognition.svg'
import img2 from '../../images/icon-detailed-records.svg'
import img3 from '../../images/icon-fully-customizable.svg'

const Statistics = () => {
    return (
        <section className="stats-section">
            <div className="stats-title">
                <h1>Advanced Statistics</h1>
                <p>Track how your links are performing across the web with our 
                advanced statistics dashboard.</p>
            </div>
            <div className="stats-container">
                <div className="stats high">
                    <div className="image">
                        <img src={img1} alt="not found"></img>
                    </div>
                    <div className="text">
                        <h2>Brand Recognition</h2>
                        <p>Boost your brand recognition with each click. Generic links don’t 
                        mean a thing. Branded links help instil confidence in your content.
                        </p>

                    </div>
                </div>
                <div className="line"></div>

                <div className="stats mid">

                    <div className="image">
                        <img src={img2} alt="not found"></img>
                    </div>
                    <div className="text">
                        <h2>Detailed Records</h2>
                        <p>Gain insights into who is clicking your links. Knowing when and where 
                        people engage with your content helps inform better decisions.
                        </p>
                    </div>
                </div>
                <div className="line"></div>

                <div className="stats low">
                    
                    <div className="image">
                        <img src={img3} alt="not found"></img>
                    </div>
                    <div className="text">
                        <h2>Fully Customizable</h2>
                        <p>Improve brand awareness and content discoverability through customizable 
                        links, supercharging audience engagement.</p>

                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Statistics
