import React from 'react'

const Navbar = () => {
  return (
    <div  className='navbar'>
      <span className='logo'>lama chat</span>
      <div className='user'>
        <img src="https://images.pexels.com/photos/14191240/pexels-photo-14191240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar