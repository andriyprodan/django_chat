import React from 'react';
import Contact from './Contact';

export default function Sidepanel(props) {
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
        <Contact 
          name="Louis Litt"
          picURL="https://ptetutorials.com/images/user-profile.png"
          chatURL="/louis" 
        />
      </div>
    </div>
  )
}