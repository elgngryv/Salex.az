import React, { useRef, useState, useEffect } from 'react';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import axios from 'axios';
import { TiMicrophoneOutline } from 'react-icons/ti';
import { BsFillSendFill } from 'react-icons/bs';
import { v4 as uuidv4 } from 'uuid';
import ReactMarkdown from 'react-markdown';
import "../Widgets/Testai.scss";

const RobotChat = ({ reverse, token }) => {
  const client = useRef(null);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  const [connected, setConnected] = useState(false);
  const [messages, setMessages] = useState([]);
  const [messageContent, setMessageContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [receiverId, setReceiverId] = useState(null);
  const [scrollOnNewMessage, setScrollOnNewMessage] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [messageContent]);

  useEffect(() => {
    fetchMessages();
    connect();

    return () => {
      disconnect();
    };
  }, []);

  useEffect(() => {
    if (scrollOnNewMessage) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading, scrollOnNewMessage]);

  // Token-dən məlumat çıxarmaq üçün
  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };

  const BASE_URL = "https://api.selnaz.com:9098/selnaz";
  const API_URL = "https://api.selnaz.com:9098/selnaz";

  // Mesajları serverdən yükləyir
  const fetchMessages = async () => {
    const localToken = localStorage.getItem('token');
    if (!localToken) {
      console.log("Token tapılmadı!");
      return;
    }

    try {
      const res = await axios.get(`${API_URL}/message`, {
        headers: { Authorization: `Bearer ${localToken}` },
      });

      const transformed = res.data.map(msg => ({
        id: msg.id,
        message: msg.message,
        timestamp: msg.timestamp,
        uuid: msg.uuid,
        status: msg.status,
      }));

      setMessages(transformed);
      setScrollOnNewMessage(false);
    } catch (error) {
      console.error("Mesajları gətirərkən xəta:", error);
    }
  };

  // WebSocket + STOMP bağlantısı qurur
  const connect = () => {
    const localToken = token || localStorage.getItem('token');
    if (!localToken) {
      console.log("Token tapılmadı!");
      return;
    }

    const payload = parseJwt(localToken);
    const recId = payload?.sub;
    if (!recId) {
      console.log("receiverId token-dən tapılmadı!");
      return;
    }
    setReceiverId(recId);

    const sock = new SockJS(`${BASE_URL}/ws/chat?token=${localToken}`);

    client.current = new Client({
      webSocketFactory: () => sock,
      connectHeaders: {
        token: `Bearer ${localToken}`,
        Authorization: `Bearer ${localToken}`,
      },
      onConnect: () => {
        setConnected(true);
        client.current.subscribe('/user/queue/chat', (msg) => {
          let content;
          if (msg.binaryBody) {
            const decoder = new TextDecoder('utf-8');
            const decoded = decoder.decode(new Uint8Array(Object.values(msg._binaryBody)));
            content = JSON.parse(decoded);
          } else {
            content = JSON.parse(msg.body);
          }

          // "Typing..." statusunu idarə et
          if(content.typing !== undefined){
            setIsTyping(content.typing);
            return;
          }

          const selnazMessage = {
            id: uuidv4(),
            message: content.message,
            timestamp: new Date().toISOString(),
            uuid: uuidv4(),
            status: "selnaz",
          };

          setMessages(prev => [...prev, selnazMessage]);
          setLoading(false);
          setScrollOnNewMessage(true);
          setIsTyping(false);
        });
      },
      onDisconnect: () => {
        setConnected(false);
        console.log('WebSocket bağlantısı qapandı.');
      },
      onStompError: (frame) => {
        console.error('STOMP Xətası:', frame.headers['message']);
      }
    });

    client.current.activate();
  };

  const disconnect = () => {
    client.current?.deactivate();
    setConnected(false);
  };

  // Mesaj göndərmə funksiyası
  const sendMessage = () => {
    if (!messageContent.trim()) return; // boş mesaj göndərmə
    const localToken = localStorage.getItem('token');
    if (client.current && connected && localToken && receiverId) {
      const userMessage = {
        id: uuidv4(),
        message: messageContent,
        timestamp: new Date().toISOString(),
        uuid: uuidv4(),
        status: "user",
      };

      setMessages(prev => [...prev, userMessage]);
      setScrollOnNewMessage(true);

      client.current.publish({
        destination: '/chat/send',
        headers: { token: `Bearer ${localToken}` },
        body: JSON.stringify({
          message: messageContent,
          receiverId: receiverId,
        }),
      });

      setLoading(true);
      setMessageContent('');
      setIsTyping(false);
    } else {
      console.log("Göndərmək mümkün olmadı.");
    }
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('az-AZ');
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('az-AZ', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  // Mesajları tarixə görə qruplaşdırır
  const groupedMessages = messages.reduce((acc, msg) => {
    const date = formatDate(msg.timestamp);
    if (!acc[date]) acc[date] = [];
    acc[date].push(msg);
    return acc;
  }, {});

  return (
    <div className="chatbot-con">
      <style>{`
        .typing-indicator {
          display: inline-flex;
          gap: 4px;
          margin-top: 4px;
        }
        .typing-indicator span {
          display: block;
          width: 8px;
          height: 8px;
          background: #0b93f6;
          border-radius: 50%;
          animation: bounce 0.6s infinite alternate;
        }
        .typing-indicator span:nth-child(2) {
          animation-delay: 0.2s;
        }
        .typing-indicator span:nth-child(3) {
          animation-delay: 0.4s;
        }
        @keyframes bounce {
          from { transform: translateY(0); }
          to { transform: translateY(-6px); }
        }
      `}</style>

      <div className={`textarea-con ${reverse && "reverse"}`}>
        <div className="messages">
          {Object.keys(groupedMessages).map((date) => (
            <div key={date}>
              <div style={{ textAlign: 'center', color: '#888', margin: '10px 0', fontSize: '14px' }}>
                {date === new Date().toLocaleDateString('az-AZ') ? "Bu gün" : date}
              </div>
              {groupedMessages[date].map((msg) => (
                <div
                  key={msg.id}
                  className={`message-item ${msg.status === "selnaz" ? "selnaz" : "user"}`}
                >
                  <div className="message-bubble">
                    {msg.status === "selnaz" && (
                      <strong className="sender-name">Selnaz:</strong>
                    )}
                    <ReactMarkdown>
                      {msg.message}
                    </ReactMarkdown>
                    <div style={{
                      textAlign: msg.status === "selnaz" ? 'left' : 'right',
                      fontSize: '12px',
                      color: '#999',
                      marginTop: '4px'
                    }}>
                      {formatTime(msg.timestamp)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}

          {loading && (
            <div className="message-item selnaz">
              <div className="message-bubble">
                <strong className="sender-name">Selnaz:</strong>
                <div className="typing-indicator">
                  <span></span><span></span><span></span>
                </div>
              </div>
            </div>
          )}

          {isTyping && !loading && (
            <div className="message-item selnaz">
              <div className="message-bubble">
                <strong className="sender-name">Selnaz:</strong>
                <div className="typing-indicator">
                  <span></span><span></span><span></span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <div className='whrite-side'>
          <div className="advice-con"></div>
          <div className='input-con'>
            <textarea
              ref={textareaRef}
              placeholder='Selnaza mesaj yaz.. (Shift + Enter - yeni sətir)'
              value={messageContent}
              onChange={(e) => setMessageContent(e.target.value)}
              onKeyDown={(e) => {
                if(e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              rows={1}
              style={{resize: 'none', overflow: 'hidden'}}
            />
            <div className='icon-con'>
              <TiMicrophoneOutline />
            </div>
            <div
              className='icon-con send-icon'
              onClick={sendMessage}
              style={{ pointerEvents: loading ? 'none' : 'auto', opacity: loading ? 0.5 : 1 }}
            >
              <BsFillSendFill />
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default RobotChat;
