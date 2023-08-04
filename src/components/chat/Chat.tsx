import React from 'react';
import "./Chat.scss";
import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RedeemIcon from '@mui/icons-material/Redeem';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

function Chat() {
  return (
    <div className='chat'>
      <ChatHeader />
      <div className='chatMessage'>
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
      </div>
      <div className='chatInput'>
        <AddCircleOutlineIcon />
        <form action="">
          <input type="text" placeholder='Udemyへメッセージ送信'/>
          <button type='submit' className='chatInputButton'>
            送信
          </button>
        </form>
        <div className='hatInputIcons'>
          <RedeemIcon />
          <GifIcon />
          <EmojiEmotionsIcon />
        </div>
      </div>
    </div>
  )
}

export default Chat
