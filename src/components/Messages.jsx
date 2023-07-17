import React, { useState } from 'react'
import Message from './Message'
import { useContext } from 'react'
import { ChatContext } from '../context/ChatContext'

const Messages = () => {
  const [messages,setMessages] = useState()
  const {data} = useContext(ChatContext);
  return (
    <div className='messages'>
      <Message/>
      <Message/>
      <Message/>
      <Message/>

    </div>
  )
}

export default Messages