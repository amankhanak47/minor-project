import React from 'react'
import '../../components/model.css'
import Models from '../../components/Models';

const Furniture = () => {
     const models=["/assets/interior/furniture/chair","/assets/interior/furniture/chairAR","/assets/interior/furniture/sofaAR"];
  return (
      <div className='wrap'>
           {models.map((mod) => 
       <Models model={mod}/>
    )}
      
    </div>
  )
}

export default Furniture
