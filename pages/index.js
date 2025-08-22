import { useState } from 'react';

export default function SimpleChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: "Hello! I'm Team Avocado's training bot. How can I help you today?", 
          sender: 'bot' 
        }]);
      }, 500);
      
      setInput('');
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20, fontFamily: 'Arial' }}>
      <h1>🥑 Team Avocado Trainer</h1>
      
      <div style={{ height: 400, border: '1px solid #ccc', padding: 10, overflowY: 'auto' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ 
            textAlign: msg.sender === 'user' ? 'right' : 'left',
            margin: '10px 0'
          }}>
            <span style={{
              background: msg.sender === 'user' ? '#007bff' : '#28a745',
              color: 'white',
              padding: '8px 12px',
              borderRadius: 15,
              display: 'inline-block'
            }}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', marginTop: 10 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          style={{ flex: 1, padding: 10, border: '1px solid #ccc', borderRadius: 5 }}
          placeholder="Ask me anything..."
        />
        <button 
          onClick={handleSend}
          style={{ marginLeft: 10, padding: '10px 20px', background: '#007bff', color: 'white', border: 'none', borderRadius: 5 }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
