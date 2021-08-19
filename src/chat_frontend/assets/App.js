import React, {useEffect} from 'react';

import './App.css'
import Chat from './components/Chat';
import WebSocketInstance from './websocket';

export default function App() {

  useEffect(() => {
    WebSocketInstance.connect();
  })

  return (
    <Chat />
  )
}