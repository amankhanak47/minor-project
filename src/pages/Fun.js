import React from 'react'
import {Link} from 'react-router-dom'

const Fun = () => {
  return (
    <div>
       <Link to={"/superhero"}><div className="options">Superheros</div></Link>
      
    </div>
  )
}

export default Fun
