import React from 'react'
import Nav from './Nav'
import CTA from './CTA'

function Homepage() {
  return (
    <div>
      <Nav />
      <CTA />
      <div className="cards"><h1>6 Cards go here</h1></div>
      <div className="short-content"><h1>Short content goes here</h1></div>
      <div className="Subsribe"><h1>Subscribe to Mag </h1></div>
      <div className="footer"><h1>Footer goes here</h1></div>
    </div>
  )
}

export default Homepage
