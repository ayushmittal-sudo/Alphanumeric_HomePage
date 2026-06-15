import React from 'react'
import './Cards.css'
const cards = [
  {
    img: "https://alphanumericideas.com/icons/icon1.webp",
    title: "Multi Channel Attribution",
    discription: "Crediting and valuing different channels differently with data-driven attribution modelin"
  },
  {
    img: "https://alphanumericideas.com/icons/icon5.webp",
    title: "Weekly Reporting",
    discription: "Weekly Reporting & Monthly Checkin Audit Calls to measure progress towards business goals"
  },
  {
    img: "https://alphanumericideas.com/icons/icon3.webp",
    title: "Performance Pricing",
    discription: "We love to get paid if you really do. We have custom variable pricing options available for some advertisers (pilot program)"
  },
  {
    img: "https://alphanumericideas.com/icons/icon4.webp",
    title: "Certified Team",
    discription: "We value your every penny being spent and handles all operations with care with Certified Teams from Google, Microsoft, Facebook, Hubspot to name a few."
  }
];
const Cards = () => {
  return (
    <>
    <div className="Cards">
        <div className="all-cards">
          {cards.map((card,index)=>(
            <div className='innercards' key={index}>
                <div className="icon-title">
                   <div className="icon"><img src={card.img} height={180} alt="" srcset="" /></div>
                   <h3>{card.title}</h3>
                </div>  
                <div className="card-contant">
                  <p>{card.discription}</p>
                </div>
                <div className="learn-more">
                  <p>Learn More</p>
                </div>
            </div>
          ))} 

     

        </div>

    </div>
    </>
  )
}

export default Cards