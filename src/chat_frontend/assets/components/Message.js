import React, { useEffect, useState } from 'react';

export default function Message(props) {
  const [content, setContent] = useState(props.content);
  const [author, setAuthor] = useState(props.author);
  const [timestamp, setTimestamp] = useState(props.timestamp);

  function renderOutgoing() {
    return (
      <div className="outgoing_msg">
        <div className="sent_msg">
          <p>{content}</p>
          <span className="time_date">{timestamp}</span>
        </div>
      </div>
    );
  }

  function renderIncoming() {
    return(
      <div className="incoming_msg">
        <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
        </div>
        <div className="received_msg">
          <div className="received_withd_msg">
            <p>{content}</p>
            <span className="time_date">{timestamp}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      { (props.currentUser === props.author) ? renderOutgoing() : renderIncoming() }
    </>
  )
}