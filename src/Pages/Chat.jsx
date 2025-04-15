import React, { useState, useEffect, useRef } from 'react';
import '../Dashbaord_CSS/Chat.css';
import userData from './dashboardPages/userData';
import { FaCameraRetro, FaMicrophone, FaStop, FaSmile } from 'react-icons/fa';

const Chat = () => {
  const [activeUser, setActiveUser] = useState(0);
  const [messageInput, setMessageInput] = useState('');
  const [chats, setChats] = useState({});
  const [isSenderMe, setIsSenderMe] = useState(true);
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [reactions, setReactions] = useState({});
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(null);

  const chatBodyRef = useRef(null);
  const fileInputRef = useRef(null);
  const imageInputRef = useRef(null);

  const handleUserClick = (index) => {
    setActiveUser(index);
  };

  const handleSendMessage = () => {
    if (!messageInput.trim()) return;

    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newMessage = {
      text: messageInput.trim(),
      sender: isSenderMe ? 'me' : 'them',
      time,
      type: 'text',
      reactions: [],
    };

    setChats((prevChats) => {
      const userMessages = prevChats[activeUser] || [];
      return {
        ...prevChats,
        [activeUser]: [...userMessages, newMessage],
      };
    });

    setMessageInput('');
  };

  const handleImageSend = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const now = new Date();
        const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        const newMessage = {
          image: e.target.result,
          sender: isSenderMe ? 'me' : 'them',
          time,
          type: 'image',
          reactions: [],
        };

        setChats((prevChats) => {
          const userMessages = prevChats[activeUser] || [];
          return {
            ...prevChats,
            [activeUser]: [...userMessages, newMessage],
          };
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileSend = (event) => {
    const file = event.target.files[0];
    if (file) {
      const now = new Date();
      const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      const newMessage = {
        fileName: file.name,
        fileURL: URL.createObjectURL(file),
        sender: isSenderMe ? 'me' : 'them',
        time,
        type: 'file',
        reactions: [],
      };

      setChats((prevChats) => {
        const userMessages = prevChats[activeUser] || [];
        return {
          ...prevChats,
          [activeUser]: [...userMessages, newMessage],
        };
      });
    }
  };

  const handleStartRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      setMediaRecorder(recorder);
      setAudioChunks([]);

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          setAudioChunks((prev) => [...prev, e.data]);
        }
      };

      recorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
        const audioURL = URL.createObjectURL(audioBlob);

        const now = new Date();
        const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        const newMessage = {
          audio: audioURL,
          sender: isSenderMe ? 'me' : 'them',
          time,
          type: 'audio',
          reactions: [],
        };

        setChats((prevChats) => {
          const userMessages = prevChats[activeUser] || [];
          return {
            ...prevChats,
            [activeUser]: [...userMessages, newMessage],
          };
        });
      };

      recorder.start();
      setIsRecording(true);
    } catch (err) {
      alert('Microphone access denied or not supported.');
      console.error(err);
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  const handleReact = (msgIndex, emoji) => {
    const updatedReactions = { ...reactions };
    if (!updatedReactions[msgIndex]) {
      updatedReactions[msgIndex] = [];
    }
    updatedReactions[msgIndex].push(emoji);
    setReactions(updatedReactions);
    setEmojiPickerVisible(false); // Hide the emoji picker after selection
  };

  // Show emoji picker when smiley is clicked
  const toggleEmojiPicker = (msgIndex) => {
    setCurrentMessageIndex(msgIndex);
    setEmojiPickerVisible(!emojiPickerVisible);
  };

  // ✅ Handle Message Delete on Right Click
  const handleDeleteMessage = (userIndex, msgIndex) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      setChats((prevChats) => {
        const updatedUserMessages = [...(prevChats[userIndex] || [])];
        updatedUserMessages.splice(msgIndex, 1); // remove 1 item at msgIndex

        return {
          ...prevChats,
          [userIndex]: updatedUserMessages,
        };
      });
    }
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [chats, activeUser]);

  return (
    <div className="chat-container fixed-layout">
      <div className="chat-sidebar">
        <div className="sidebar-header">
          <h3>Chats</h3>
        </div>
        <div className="chat-list">
          {userData.map((user, i) => (
            <div
              key={i}
              className={`chat-user ${activeUser === i ? 'active' : ''}`}
              onClick={() => handleUserClick(i)}
            >
              <img src={user.photo} alt={user.name} className="avatar" />
              <div className="user-info">
                <span className="username">{user.name}</span>
                <span className="last-msg">{user.lastMessage}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="chat-main">
        <div className="chat-header">
          <div className="user-avatar-wrapper">
            <div className="user-avatar">
              <img
                src={userData[activeUser].photo}
                alt="photo"
                className="header-avatar"
              />
              <span className="online-status"></span>
            </div>
            <div className="user-details">
              <div className="user-name">{userData[activeUser].name}</div>
              <div className="user-status-text">Online</div>
            </div>
          </div>
        </div>

        <div className="chat-body" ref={chatBodyRef}>
          {(chats[activeUser] || []).map((msg, idx) => (
            <div
              key={idx}
              className={`msg ${msg.sender === 'me' ? 'sent' : 'received'}`}
              onContextMenu={(e) => {
                e.preventDefault();
                handleDeleteMessage(activeUser, idx);
              }}
              title="Right click to delete"
            >
              {msg.type === 'text' && <div>{msg.text}</div>}
              {msg.type === 'image' && (
                <img src={msg.image} alt="sent" className="chat-image" />
              )}
              {msg.type === 'file' && (
                <div className="file-msg">
                  📄 <a href={msg.fileURL} download={msg.fileName}>{msg.fileName}</a>
                </div>
              )}
              {msg.type === 'audio' && (
                <audio controls className="chat-audio">
                  <source src={msg.audio} type="audio/webm" />
                  Your browser does not support the audio element.
                </audio>
              )}

              <div className="msg-time">{msg.time}</div>

              <div className="msg-reactions">
                {(reactions[idx] || []).map((emoji, reactionIdx) => (
                  <span key={reactionIdx} className="emoji">
                    {emoji}
                  </span>
                ))}
                <div className="emoji-picker">
                  <span onClick={() => toggleEmojiPicker(idx)}>
                    <FaSmile />
                  </span>

                  {emojiPickerVisible && currentMessageIndex === idx && (
                    <div className="emoji-picker-popup">
                      <span onClick={() => handleReact(idx, '😊')}>😊</span>
                      <span onClick={() => handleReact(idx, '❤️')}>❤️</span>
                      <span onClick={() => handleReact(idx, '😂')}>😂</span>
                      <span onClick={() => handleReact(idx, '😢')}>😢</span>
                      <span onClick={() => handleReact(idx, '👍')}>👍</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="chat-input">
          <button onClick={() => imageInputRef.current.click()} title="Send Image">
            <FaCameraRetro />
          </button>
          <input
            type="file"
            accept="image/*"
            ref={imageInputRef}
            style={{ display: 'none' }}
            onChange={handleImageSend}
          />
          <button
            onClick={isRecording ? handleStopRecording : handleStartRecording}
            title={isRecording ? 'Stop Recording' : 'Start Recording'}
          >
            {isRecording ? <FaStop /> : <FaMicrophone />}
          </button>
          <input
            type="text"
            placeholder="Type a message..."
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button onClick={handleSendMessage}>Send</button>
          <button onClick={() => setIsSenderMe(!isSenderMe)} title="Switch Side">
            {isSenderMe ? '👁‍🗨 Me' : '👤 Them'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
