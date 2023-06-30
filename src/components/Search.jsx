import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type="text" placeholder='Find a user' />

      </div>
      <div className="userchat">
        <img src="https://images.pexels.com/photos/14191240/pexels-photo-14191240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className="userchatinfo">
          <span>jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search