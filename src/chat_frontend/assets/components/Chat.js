import React, { useState, useEffect } from 'react';

import Sidepanel from './Sidepanel';
import WebSocketInstance from '../websocket';
import Message from './Message';

export default function Chat(props) {
  const [messages, setMessages] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    waitForSocketConnection(() => {
      WebSocketInstance.addCallbacks(setMessages, addMessage);
      WebSocketInstance.fetchMessages(props.currentUser);
    });
  }, [addMessage, setMessages, props.currentUser]);

  function waitForSocketConnection(callback) {
    setTimeout(
      function() {
        if (WebSocketInstance.state() === 1) {
          console.log('connection is secure');
          callback();
          return;
        } else {
          console.log('waiting for connection...');
          waitForSocketConnection(callback);
        }
      },
    1);
  }

  function addMessage(message) {
    console.log(messages);
    console.log(message);
    setMessages([...messages, message])
  }

  function sendMessageHandler(e) {
    e.preventDefault();
    const messageObject = {
      from: 'andriy',
      content: message
    }
    WebSocketInstance.newChatMessage(messageObject);
    setMessage('');
  }

  function messageChangeHandler(e) {
    setMessage(e.target.value)
  }


  const messagesComponents = messages?.map(message => {
    const currentUser = 'andriy';
    return (
      <Message
        key={message.id}
        content={message.content}
        author={message.author}
        currentUser={currentUser}
      />
    );
  });
  
  return (
    <div className="container">
      <h3 className=" text-center">Messaging</h3>
      <div className="messaging">
        <div className="inbox_msg">

          <Sidepanel />

          <div className="mesgs">
            <div className="msg_history">
              { messagesComponents }
            </div>
            <form onSubmit={sendMessageHandler}>
              <div className="type_msg">
                <div className="input_msg_write">
                  <input
                    value={message}
                    onChange={messageChangeHandler}
                    type="text" 
                    className="write_msg" 
                    placeholder="Type a message" 
                  />
                  <button className="msg_send_btn" type="button"><i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}