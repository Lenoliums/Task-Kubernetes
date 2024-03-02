import { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    fetch(process.env.BACKEND_URL)
        .then(res => res.json())
        .then(data => setMessages(data))
  }, [])
    function createMessage() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: '' })
        };
        fetch(process.env.BACKEND_URL, requestOptions)
            .then(res => res.json())
            .then(data => setMessages([...messages, data]))
    }
    function deleteMessages() {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: '' })
        };
        fetch(process.env.BACKEND_URL, requestOptions)
            .then(res => res.json())
            .then(data => setMessages([...data]))
    }
    function deleteLastMessage() {
      const requestOptions = {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
      };
      fetch(process.env.BACKEND_URL + `?id=${messages.pop().id}`, requestOptions)
          .then(res => res.json())
          .then(data => setMessages([...data]))
      }
  return (
      <div className="App">
          <h1>messages from backend:</h1>
            <div><button onClick={createMessage}>create</button><button onClick={deleteLastMessage}>delete last</button><button onClick={deleteMessages}>delete all</button></div>
          {messages.map(message => (<div key={message.id}>{message.title}</div>))}
      </div>
  );
}
export default App;