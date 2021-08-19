import React from 'react';

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
        <div className="chat_list active_chat">
          <div className="chat_people">
            <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
            <div className="chat_ib">
              <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
              <p>Test, which is a new approach to have all solutions
                astrology under one roof.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}