import React from 'react'
import { Link } from 'react-router-dom'

const Education = () => {
  return (
    <div>
        <Link to={"/biology"}><div className="options">Biology</div></Link>
        {/* <Link to={"interior"}><div className="options">Interior</div></Link>
        <Link to={"interior"}><div className="options">Interior</div></Link> */}
      
    </div>
  )
}

export default Education
