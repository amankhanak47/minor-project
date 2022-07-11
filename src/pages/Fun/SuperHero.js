import React from 'react'
import '../../components/model.css'
import Models from '../../components/Models';

const SuperHero = () => {
     const models=["assets/fun/superheros/batman","assets/fun/superheros/flash","assets/fun/superheros/ironman","assets/fun/superheros/captainamerica","assets/fun/superheros/Groot_dancing","assets/fun/superheros/spiderman","assets/fun/superheros/doctor-strange"];
  return (
      <div className='wrap'>
           {models.map((mod) => 
       <Models model={mod}/>
    )}
      
    </div>
  )
}

export default SuperHero
