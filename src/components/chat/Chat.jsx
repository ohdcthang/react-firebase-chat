import React, { useState } from 'react'
import './chat.css'
import EmojiPicker from 'emoji-picker-react'

export const Chat = () => {
  const [open, setOpen] = useState(false)
  const [text, setText] = useState('')

  const handleEmoji = e => {
    console.log("🚀 ~ handleEmoji ~ e:", e)
    setText((prev) => prev + e.emoji)
    setOpen(false)
  }
  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
            <img src="./avatar.png" alt="" />
            <div className="texts">
              <span>Ohdcthange</span>
              <p>Lorem ipsum dolor.</p>
            </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              The first half of the year, or H1, always includes the first and second quarter. The second half of the year, or H2, always includes the third and fourth quarter.
            </p>
            <span>1 minutes ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              The first half of the year, or H1, always includes the first and second quarter. The second half of the year, or H2, always includes the third and fourth quarter.
            </p>
            <span>1 minutes ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              The first half of the year, or H1, always includes the first and second quarter. The second half of the year, or H2, always includes the third and fourth quarter.
            </p>
            <span>1 minutes ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/09/gojo-satoru-1.jpg" alt="" />
            <p>
              The first half of the year, or H1, always includes the first and second quarter. The second half of the year, or H2, always includes the third and fourth quarter.
            </p>
            <span>1 minutes ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              The first half of the year, or H1, always includes the first and second quarter. The second half of the year, or H2, always includes the third and fourth quarter.
            </p>
            <span>1 minutes ago</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input type="text" placeholder='Type a message' onChange={e => setText(e.target.value)} value={text} />
        <div className="emoji">
          <img src="./emoji.png" alt=""  onClick={() => setOpen(!open)}/>
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  )
}
