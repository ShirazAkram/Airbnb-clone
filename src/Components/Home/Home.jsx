import React from 'react'
import "./Home.scss"
import Card2 from '../Card/Card2'
import { list } from "../Assets/CardList"





const Card1 = ({ imgSrc, desc }) => {
  return (
    <div className='Card1-div'>
      <img className='card' src={imgSrc} alt='cover' />
      <div className='Overlay-div'>
        <div className='overlay'>
          <p>Collection</p>
          <h3>{desc}</h3>
        </div>
        <div className='show-btn'>
          <button>Show all</button>
        </div>
        
      </div>
      
    </div>
  );
}

const Row = ({ title }) => {
  const firstImage = list[0].imgSrc[0];
  const secondImage = list[1].imgSrc[0];
  const thirdImage = list[2].imgSrc[0];

  return (
    <div className='row'>
      <div className='section'>
        <h2>{title}</h2>
      </div>
      <div className='card-section'>
        {/* {topThreeItems.map((item, index) => (
          <Card1 key={index} imgSrc={item.imgSrc} desc={item.desc} />
        ))} */}
        <Card1 imgSrc={firstImage} desc={list[0].desc} />
        <Card1 imgSrc={secondImage} desc={list[1].desc} />
        <Card1 imgSrc={thirdImage}  desc={list[2].desc} />
      </div>
    </div>
  );
}




function Home() {
  return (
    <div className='home-container'>
      <div className='home'>
        <Row title={"New this week"}  />
      </div>
      <div className='button-row'>
        <button>Dates</button>
        <button>Group size</button>
        <button>Great for groups</button>
        <button>Family-friend</button>
        <button>Animals</button>
        <button>Arts& writing</button>
        <button>Baking</button>
        <button>Cooking</button>
        <button>Dance</button>
        <button>Drinks</button>
        <button>Entertainment</button>
      </div>

      <Card2 />
    </div>
  )
}

export default Home
