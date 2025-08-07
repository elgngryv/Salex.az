"use client";

import { useRef, useState, useEffect } from "react";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";
import axios from "axios";
import { Mic, Send } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import ReactMarkdown from "react-markdown";

const RobotChat = ({ reverse = false, token }) => {
  const client = useRef(null);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);
  const messagesContainerRef = useRef(null);

  const [connected, setConnected] = useState(false);
  const [messages, setMessages] = useState([]);
  const [messageContent, setMessageContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [receiverId, setReceiverId] = useState(null);
  const [isTyping, setIsTyping] = useState(false);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        Math.min(textareaRef.current.scrollHeight, 120) + "px";
    }
  }, [messageContent]);

  // Initialize chat
  useEffect(() => {
    fetchMessages();
    connect();
    return () => {
      disconnect();
    };
  }, []);

  // useEffect 2-ni belə saxla:
  useEffect(() => {
    const localToken = localStorage.getItem("token");

    if (!localToken) {
      axios
        .get("https://api.selnaz.com:9098/selnaz")
        .then((res) => {
          const token = res.data.token;
          localStorage.setItem("token", token);
          window.location.reload();
        })
        .catch((err) => {
          console.error("Token alınmadı:", err);
        });
    }

    return () => {
      disconnect();
    };
  }, []);

  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  };

  const BASE_URL = "https://api.selnaz.com:9098/selnaz";
  const API_URL = "https://api.selnaz.com:9098/selnaz";

  const fetchMessages = async () => {
    const localToken = localStorage.getItem("token");
    if (!localToken) {
      console.log("Token tapılmadı!");
      return;
    }
    const getToken = () => {
      let token = localStorage.getItem("guest_token");

      if (!token) {
        token = uuidv4();
        localStorage.setItem("guest_token", token);
      }

      return token;
    };

    axios.get("https://api.selnaz.com:9098/selnaz", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // istifadə:
    const token = getToken();
    console.log("Istifadəçi tokeni:", token);

    try {
      const res = await axios.get(`${API_URL}/message`, {
        headers: { Authorization: `Bearer ${localToken}` },
      });

      const transformed = res.data.map((msg) => ({
        id: msg.id,
        message: msg.message,
        timestamp: msg.timestamp,
        uuid: msg.uuid,
        status: msg.status,
      }));

      setMessages(transformed);
    } catch (error) {
      console.error("Mesajları gətirərkən xəta:", error);
    }
  };

  const connect = () => {
    const localToken = token || localStorage.getItem("token");
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
        client.current?.subscribe("/user/queue/chat", (msg) => {
          let content;
          if (msg.binaryBody) {
            const decoder = new TextDecoder("utf-8");
            const decoded = decoder.decode(
              new Uint8Array(Object.values(msg._binaryBody))
            );
            content = JSON.parse(decoded);
          } else {
            content = JSON.parse(msg.body);
          }

          if (content.typing !== undefined) {
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

          setMessages((prev) => [...prev, selnazMessage]);
          setLoading(false);
          setIsTyping(false);
        });
      },
      onDisconnect: () => {
        setConnected(false);
        console.log("WebSocket bağlantısı qapandı.");
      },
      onStompError: (frame) => {
        console.error("STOMP Xətası:", frame.headers["message"]);
      },
    });

    client.current.activate();
  };

  const disconnect = () => {
    client.current?.deactivate();
    setConnected(false);
  };
  const sendMessage = () => {
    if (!messageContent.trim()) return;

    const localToken = localStorage.getItem("token");
    if (client.current && connected && localToken && receiverId) {
      const newMessage = {
        id: uuidv4(),
        message: messageContent,
        timestamp: new Date().toISOString(),
        uuid: uuidv4(),
        status: "user",
      };

      setMessages((prev) => [...prev, newMessage]); // <- BURANI ƏLAVƏ ET
      setLoading(true);
      setMessageContent("");
      setIsTyping(false);

      client.current.publish({
        destination: "/chat/send",
        headers: { token: `Bearer ${localToken}` },
        body: JSON.stringify({
          message: messageContent,
          receiverId: receiverId,
        }),
      });
    } else {
      console.log("Göndərmək mümkün olmadı.");
    }
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("az-AZ");
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString("az-AZ", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const groupedMessages = messages.reduce((acc, msg) => {
    const date = formatDate(msg.timestamp);
    if (!acc[date]) acc[date] = [];
    acc[date].push(msg);
    return acc;
  }, {});

  const TypingIndicator = () => (
    <div className="typing-indicator">
      <span></span>
      <span></span>
      <span></span>
    </div>
  );

  return (
    <div className={`chat-container ${reverse ? "reverse" : ""}`}>
      {/* Chat Header */}
      <div className="chat-header">
        <div className="chat-title">
          <div
            className={`connection-status ${
              connected ? "connected" : "disconnected"
            }`}>
            {connected ? "ONLINE" : "OFFLINE"}
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="messages-container" ref={messagesContainerRef}>
        <div className="messages">
          {Object.keys(groupedMessages).map((date) => (
            <div key={date}>
              <div className="date-separator">
                {date === new Date().toLocaleDateString("az-AZ")
                  ? "Bu gün"
                  : date}
              </div>
              {groupedMessages[date].map((msg) => (
                <div
                  key={msg.id}
                  className={`message-item ${
                    msg.status === "selnaz" ? "selnaz" : "user"
                  }`}>
                  <div className="message-bubble">
                    {msg.status === "selnaz" && (
                      <div className="sender-name">Selnaz</div>
                    )}
                    <div className="message-content">
                      <ReactMarkdown>{msg.message}</ReactMarkdown>
                    </div>
                    <div className="message-time">
                      {formatTime(msg.timestamp)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}

          {/* Loading indicator */}
          {loading && (
            <div className="message-item selnaz">
              <div className="message-bubble">
                <div className="sender-name">Selnaz</div>
                <TypingIndicator />
              </div>
            </div>
          )}

          {/* Typing indicator */}
          {isTyping && !loading && (
            <div className="message-item selnaz">
              <div className="message-bubble">
                <div className="sender-name">Selnaz</div>
                <TypingIndicator />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="input-container">
        <div className="input-wrapper">
          <textarea
            ref={textareaRef}
            placeholder="Selnaza mesaj yaz..."
            value={messageContent}
            onChange={(e) => setMessageContent(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
            rows={1}
            className="message-input"
            disabled={!connected}
          />
          <div className="input-actions">
            <button className="action-button mic-button" type="button">
              <Mic size={20} />
            </button>
            <button
              className="action-button send-button"
              onClick={sendMessage}
              disabled={loading || !connected || !messageContent.trim()}
              type="button">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .chat-container {
          display: flex;
          flex-direction: column;
          height: 100vh;
          max-height: 800px;
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            sans-serif;
        }

        .chat-header {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 20px 24px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .chat-title h3 {
          margin: 0;
          font-size: 24px;
          font-weight: 600;
          color: #2d3748;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .connection-status {
          font-size: 14px;
          margin-top: 4px;
          font-weight: 500;
        }

        .connection-status.connected {
          color: #48bb78;
        }

        .connection-status.disconnected {
          color: #f56565;
        }

        .messages-container {
          flex: 1;
          overflow-y: auto;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
        }

        .messages {
          padding: 20px 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .date-separator {
          text-align: center;
          color: #718096;
          font-size: 14px;
          font-weight: 500;
          margin: 20px 0 10px;
          position: relative;
        }

        .date-separator::before,
        .date-separator::after {
          content: "";
          position: absolute;
          top: 50%;
          width: 30%;
          height: 1px;
          background: linear-gradient(
            to right,
            transparent,
            #e2e8f0,
            transparent
          );
        }

        .date-separator::before {
          left: 0;
        }

        .date-separator::after {
          right: 0;
        }

        .message-item {
          display: flex;
          margin-bottom: 12px;
        }

        .message-item.selnaz {
          justify-content: flex-start;
        }

        .message-item.user {
          justify-content: flex-end;
        }

        .message-bubble {
          max-width: 75%;
          padding: 16px 20px;
          border-radius: 20px;
          position: relative;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
        }

        .message-item.selnaz .message-bubble {
          background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
          border-bottom-left-radius: 8px;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .message-item.user .message-bubble {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-bottom-right-radius: 8px;
        }

        .sender-name {
          font-weight: 600;
          font-size: 14px;
          margin-bottom: 8px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .message-content {
          line-height: 1.5;
          font-size: 15px;
        }

        .message-content p {
          margin: 0;
        }

        .message-content pre {
          background: rgba(0, 0, 0, 0.05);
          padding: 12px;
          border-radius: 8px;
          overflow-x: auto;
          margin: 8px 0;
        }

        .message-content code {
          background: rgba(0, 0, 0, 0.05);
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 14px;
        }

        .message-time {
          font-size: 12px;
          opacity: 0.7;
          margin-top: 8px;
          text-align: right;
        }

        .message-item.selnaz .message-time {
          text-align: left;
        }

        .typing-indicator {
          display: flex;
          gap: 4px;
          align-items: center;
          padding: 4px 0;
        }

        .typing-indicator span {
          width: 8px;
          height: 8px;
          background: #667eea;
          border-radius: 50%;
          animation: bounce 1.4s infinite ease-in-out;
        }

        .typing-indicator span:nth-child(1) {
          animation-delay: -0.32s;
        }

        .typing-indicator span:nth-child(2) {
          animation-delay: -0.16s;
        }

        @keyframes bounce {
          0%,
          80%,
          100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }

        .input-container {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 20px 24px;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        .input-wrapper {
          display: flex;
          align-items: flex-end;
          gap: 12px;
          background: white;
          border-radius: 25px;
          padding: 12px 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }

        .input-wrapper:focus-within {
          border-color: #667eea;
          box-shadow: 0 4px 20px rgba(102, 126, 234, 0.2);
        }

        .message-input {
          flex: 1;
          border: none;
          outline: none;
          resize: none;
          font-size: 15px;
          line-height: 1.5;
          font-family: inherit;
          background: transparent;
          min-height: 24px;
          max-height: 120px;
          overflow-y: auto;
        }

        .message-input::placeholder {
          color: #a0aec0;
        }

        .message-input:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .input-actions {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .action-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          background: #f7fafc;
          color: #4a5568;
        }

        .action-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .action-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }

        .mic-button:hover:not(:disabled) {
          background: #e2e8f0;
        }

        .send-button {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .send-button:hover:not(:disabled) {
          background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .chat-container {
            height: 100vh;
            max-height: none;
            border-radius: 0;
            margin: 0;
          }

          .chat-header {
            padding: 16px 20px;
          }

          .chat-title h3 {
            font-size: 20px;
          }

          .messages {
            padding: 16px 20px;
          }

          .message-bubble {
            max-width: 85%;
            padding: 12px 16px;
          }

          .input-container {
            padding: 16px 20px;
          }

          .input-wrapper {
            padding: 10px 14px;
          }

          .action-button {
            width: 36px;
            height: 36px;
          }
        }

        @media (max-width: 480px) {
          .message-bubble {
            max-width: 90%;
            padding: 10px 14px;
          }

          .chat-header {
            padding: 12px 16px;
          }

          .messages {
            padding: 12px 16px;
          }

          .input-container {
            padding: 12px 16px;
          }
        }

        /* Custom scrollbar */
        .messages-container::-webkit-scrollbar {
          width: 6px;
        }

        .messages-container::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
        }

        .messages-container::-webkit-scrollbar-thumb {
          background: rgba(102, 126, 234, 0.3);
          border-radius: 3px;
        }

        .messages-container::-webkit-scrollbar-thumb:hover {
          background: rgba(102, 126, 234, 0.5);
        }
      `}</style>
    </div>
  );
};

export default RobotChat;
