import React from 'react'

const Message = () => {
  return (
    <div className='message'>
        <div className="messageInfo">
        <img src="https://images.pexels.com/photos/14191240/pexels-photo-14191240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <span>just now</span>
            
        </div>
        <div className="messageContent">
            <p>helo</p>
            {/* <img src="https://images.pexels.com/photos/14191240/pexels-photo-14191240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> */}
        </div>
    </div>
  )
}

export default Message