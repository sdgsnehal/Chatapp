import React from 'react'
import Img from '../assets/img.png'
import Attach from '../assets/attach.png'

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type something...' />
      <img src={Attach} alt="" />
      <input type="text" style={{display:'none'}} id="file" />
      <label htmlFor="file">
        <img src={Img} alt="" />

      </label>
      <button>Send</button>
    </div>
  )
}

export default Input