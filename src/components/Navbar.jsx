import React from 'react'
import '../componentsCss/Navbar.css'

function Navbar() {
  return (
 <nav className="navbar">
      <div className="logo">Create Broadcast</div>
      <div className="profile-section">
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="profile" className='profile-pic' />
      </div>
    </nav>
  )
}

export default Navbar


