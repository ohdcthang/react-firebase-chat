import React, { useState } from 'react'
import './chatlist.css'

export const ChatList = () => {
  const [addMode, setAddMode] = useState(false)
  return (
   <div className="chatList">
      <div className="search">
          <div className="searchBar">
            <img src="/search.png" alt="" />
            <input type="text" placeholder='Search' />
          </div>
          <img src={addMode ? './minus.png' : './plus.png'} alt=""  
              className='add'
              onClick={() => setAddMode(!addMode)}
          />
      </div>
   </div>
  )
}
