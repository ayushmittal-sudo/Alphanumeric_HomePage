import React from 'react'
import './mainfirst.css';
const MainFirst = () => {
  return (
    <div className="mainfirst">
        <div className="mainInner">
            <div className="innerFirst">
                <div className="content">
                  <h1> We are Google Premier Partner for 2023! </h1>
                  <p>As a Google Premier Partner, we have access to the latest tools and resources from Google. We are committed to helping our clients grow their businesses and providing them with the best possible service. </p>
                </div>
                <button className='free'>GET FREE CONSULTATION</button>
            </div>
            <div className="innerSecond">
              <img src="https://alphanumericideas.com/images/header/google-partner.webp" height={400} width={500} alt="" />
            </div>
        </div>
    </div>
  )
}

export default MainFirst