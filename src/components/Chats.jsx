import React from 'react'
import { useState, useEffect, useRef } from 'react'

const Chats = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("")
    const websocket = useRef(null)

    useEffect(() => {
        websocket.current = new WebSocket('ws://localhost:8000/ws/chat/testroom/');

        websocket.current.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setMessages((prev) => [...prev, data.messages]);
        };

        return () => {
            websocket.current.close()
        }
    }, []);

    const sendMessage = () => {
        if(websocket.current){
         websocket.current.send(JSON.stringify({
            'message': message,
        }));
        setMessage('')
        }
    }
  return (
    <div>
        <div className="App">
            <h1>Chat</h1>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
            />
            <button onClick={sendMessage}>Send</button>
            <ul>
                {messages.map((msg, index) => (
                    <li key={index}>{msg}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Chats