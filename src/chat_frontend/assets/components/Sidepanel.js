import React, { useState, useEffect } from 'react';
import Contact from './Contact';
import axiosInstance from '../services/axiosApi';

export default function Sidepanel(props) {

  const [chats, setChats] = useState([]);

  useEffect(() => {
    async function getUserChats() {
      try {
        let res = await axiosInstance.get('chat/');
        setChats(res.data);
      } catch (e) {
        console.log(e);
      }
    }
    getUserChats();
  }, [])

  const activeChats = chats?.map(c => (
    <Contact
      key={c.id}
      name="Louis Litt"
      picURL="https://ptetutorials.com/images/user-profile.png"
      chatURL={`/${c.id}`}
    />
  ));

  return (
    <div className="inbox_people">
      <div className="headind_srch">
        <div className="recent_heading">
          <h4>Recent</h4>
        </div>
        <div className="srch_bar">
          <div className="stylish-input-group">
            <input type="text" className="search-bar" placeholder="Search" />
            <span className="input-group-addon">
              <button type="button"> <i className="fa fa-search" aria-hidden="true"></i> </button>
            </span>
          </div>
        </div>
      </div>
      <div className="inbox_chat">
        { activeChats }
      </div>
    </div>
  )
}