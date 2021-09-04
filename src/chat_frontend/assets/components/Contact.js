import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Contact(props) {
  return (
    <NavLink to={`${props.chatURL}`}>
      <div className="chat_list active_chat">
        <div className="chat_people">
          <div className="chat_img"> <img src={props.picURL} alt="sunil" /> </div>
          <div className="chat_ib">
            <h5>{props.name} <span className="chat_date">Dec 25</span></h5>
            <p>Test, which is a new approach to have all solutions
              astrology under one roof.</p>
          </div>
        </div>
      </div>
    </NavLink>
  )
}