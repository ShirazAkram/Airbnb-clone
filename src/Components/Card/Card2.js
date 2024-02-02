import React from 'react'
import "./Card2.scss";
import { list } from "../Assets/CardList"




const Card2 = ({ imgSrc, rating, place, desc, titles, price }) => {
  return (
  <div className='card2-div'>

      <img className='card2' src={imgSrc} alt='card2' />
      <div className="card-details">
        <h5>{rating} {place} </h5>
        <p>{desc}</p>
        <p>{titles}</p>
        <h5>{price}</h5>
      </div>
      
    </div>)
}



const Row2 = ({ title, arr }) => {
  return (
    <div className='row2'>
      <h2>{title}</h2>
      <div className='card2-section'>
        {arr.map((item, i) => (
          <Card2
            key={i}
            imgSrc={item.imgSrc}
            rating={item.rating}
            place={item.place}
            desc={item.desc}
            titles={item.titles}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

function Card() {
  const topSellersData = list;
  return (
    <div className='card-container'>
        <Row2 title={"Top sellers"} arr={topSellersData}/>
        
        
      </div>
  )
}

export default Card
