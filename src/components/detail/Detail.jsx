import React from 'react'
import './detail.css'

export const Detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h1>Ohdcthang</h1>
        <p>The first half of the year,..</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Setting</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">

              <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/09/gojo-satoru-1.jpg" alt="" />
              <span>Hinh anh minh hoa</span>
              </div>
              <img src="./download.png" alt="" className='icon' />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared files</span>
            <img src="./arrowDown.png" alt="" />
          </div>
        </div>
        <button>Block user</button>
        <button className="logout">Log out</button>

      </div>
    </div>
  )
}
