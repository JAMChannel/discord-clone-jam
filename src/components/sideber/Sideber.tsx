import React from 'react';
import "./Sideber.scss";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';

const Sideber = () => {
  return (
    <div className='sideber'>
      <div className='sidebarLeft'>
        <div className='serverIcon'>
          <img src="./discordIcon.png" alt="" />
        </div>
        <div className='serverIcon'>
          <img src="./discordIcon.png" alt="" />
        </div>
      </div>
      <div className='sidebarRight'>
        <div className='sidebarTop'>
          <h3>Discord</h3>¥
        </div>
        <div className='sidebarChannels'>
          <div className='sidebarChannelsHeader'>
            <ExpandMoreIcon />
            <h4>プログラミングチャンネル</h4>
            <AddIcon />
          </div>

          <div className='sidebarChannelList'>
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
          </div>

          <div className='sidebarFooter'>
            <div className='sidebarAccount'>
              <img src="./icon.png" alt="" />
              <div className='accountName'>
              <h4>sign code</h4>
                <span>#0244</span>
              </div>
            </div>
            <div className='sidebarVoice'>
              <MicIcon />
              <HeadphonesIcon />
              <SettingsIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sideber
