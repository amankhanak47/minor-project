import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
      <div>
          <Navbar />
         <div className="main-view"></div>
      <div className="main-options">

        {/* <Link
  to={{
    pathname: "/courses",
    search: "?sort=name",
    hash: "#the-hash",
    state: { fromDashboard: true }
  }}
/> */}
        <Link to={"interior"}><div className="options">Interior</div></Link>
        <Link to={"education"}><div className="options">Education</div></Link>
        <Link to={"fun"}><div className="options">Fun</div></Link>

         </div>
    </div>
  )
}

export default Home
