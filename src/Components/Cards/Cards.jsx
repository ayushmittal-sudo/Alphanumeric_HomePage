import React from 'react'
import './Cards.css'
// const cards = [
//   {
//     title: "bdjnklelkcdklcd",
//     discription: "kjwjkndckjcj"
//   },
//   {
//     title: "bdjnklelkcdklcd",
//     discription: "kjwjkndckjcj"
//   },
//   {
//     title: "bdjnklelkcdklcd",
//     discription: "kjwjkndckjcj"
//   },
//   {
//     title: "bdjnklelkcdklcd",
//     discription: "kjwjkndckjcj"
//   }
// ]
const Cards = () => {
  return (
    <>
    <div className="Cards">
        <div className="all-cards">
          < div className="innersection1">
             <h1>Multi Channel Attribution</h1>
             <p>Crediting and valuing different channels differently with data-driven attribution modeling</p>
             <a href="">Learn More</a>
          </div>
            <div className="innersection2">
               <h1>Multi Channel Attribution</h1>
             <p>Crediting and valuing different channels differently with data-driven attribution modeling</p>
             <a href="">Learn More</a>
          </div>
            <div className="innersection3">
               <h1>Multi Channel Attribution</h1>
             <p>Crediting and valuing different channels differently with data-driven attribution modeling</p>
             <a href="">Learn More</a>
          </div>
            <div className="innersection4">
               <h1>Multi Channel Attribution</h1>
             <p>Crediting and valuing different channels differently with data-driven attribution modeling</p>
             <a href="">Learn More</a>
          </div>
          
          {/* {cards.map((card,index)=>{
            <div className='innercards' key={index}>
               
                <h1>{card.title}</h1>
               
            </div>
          })} */}

     

        </div>

    </div>
    </>
  )
}

export default Cards