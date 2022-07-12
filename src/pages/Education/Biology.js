import React from 'react'
import '../../components/model.css'
import Models from '../../components/Models';

const Biology = () => {
     const models=["/assets/education/biology/skull","/assets/education/biology/skull"];
     
  return (
      <div className='wrap'>
           {models.map((mod) => 
       <Models model={mod}/>
    )}
      
    </div>
  )
}

export default Biology
