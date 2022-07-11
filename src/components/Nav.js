import React, { Component } from 'react'
import './Nav.css'

class Nav extends Component {

  render () {
    return (
      <div className="nav">
        <div className="nav-title" style={{ position: 'absolute', left: '50%', }}>ZeTe Pixel Art Maker</div>
      </div>
    )
  }
}

export default Nav
