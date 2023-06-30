import React from 'react'
import add from '../assets/add.png'
import cam from '../assets/cam.png'
import more from '../assets/more.png'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatinfo">
        <span>jane</span>
        <div className="chatIcons">
          <img src={cam} alt="" />
          <img src={add} alt="" />
          <img src={more} alt="" />
        </div>
        

      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat