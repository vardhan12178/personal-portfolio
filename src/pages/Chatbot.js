import React, { useState, useEffect, useRef } from 'react';
import { FaRobot, FaPaperPlane } from 'react-icons/fa';
import styles from '../styles/Chatbot.module.scss';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [clarification, setClarification] = useState(null);
  const [typing, setTyping] = useState(false);
  const [userName, setUserName] = useState(null);
  const chatWindowRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setMessages([
        {
          sender: 'bot',
          text: 'Hi there! I’m Bala Vardhan’s Chatbot. How can I assist you today?'
        }
      ]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  const botResponses = {
    greetings: [
      'Hi there! 😊',
      'Hello! How can I help you today?',
      'Hey! Feel free to ask me anything!',
      'Hi! I’m here to assist you. What’s on your mind?'
    ],
    name: "I'm Bala Vardhan Pula's chatbot! My creator's name is Bala Vardhan Pula.",
    age: 'Bala Vardhan is 25 years old.',
    dob: 'Bala Vardhan was born on 21st November 1998.',
    skills:
      'Bala Vardhan has expertise in Frontend and Backend development, working with React, Node.js, JavaScript, SQL, and MongoDB.',
    education: 'Bala Vardhan completed his education at Lakireddy Bali Reddy College of Engineering.',
    experience:
      'Bala Vardhan has 3 years of experience as a Full Stack Developer, including a role at TCS.',
    contact: 'You can reach Bala Vardhan at balavardhan975@gmail.com or call him at 9542312181.',
    location: 'Bala Vardhan is based in Hyderabad, India.',
    farewell: 'Goodbye! Have a great day! 😊'
  };

  const typoMap = {
    nme: 'name',
    ag: 'age',
    dob: 'dob',
    skil: 'skills',
    educaion: 'education',
    experince: 'experience',
    conact: 'contact',
    phne: 'contact',
    loc: 'location'
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setTyping(true);

    if (['clear', 'clear all'].includes(input.toLowerCase())) {
      setTimeout(() => {
        setMessages([{ sender: 'bot', text: 'All messages have been cleared.' }]);
        setTyping(false);
      }, 1000);
      return;
    }

    if (clarification) {
      setTimeout(() => {
        if (input.toLowerCase() === 'yes') {
          const responseKey = clarification; 
          const botMessage = {
            sender: 'bot',
            text: botResponses[responseKey] || "I'm not sure how to respond to that."
          };
          setMessages([...newMessages, botMessage]);
        } else {
          setMessages([
            ...newMessages,
            { sender: 'bot', text: "Okay, let's try again. How can I assist you?" }
          ]);
        }
        setClarification(null); 
        setTyping(false);
      }, 1000);
      return;
    }

    const lowerInput = input.toLowerCase();

    if (checkForTypo(lowerInput)) {
      setTyping(false);
      return;
    }

    let botMessage = { sender: 'bot', text: "I'm not sure how to respond to that." };

    setTimeout(() => {
      if (['hi', 'hello', 'hey'].includes(lowerInput)) {
        botMessage.text = botResponses.greetings[Math.floor(Math.random() * botResponses.greetings.length)];
      } else if (lowerInput.includes('name')) {
        botMessage.text = userName
          ? `Your name is ${userName}. Nice to meet you!`
          : botResponses.name;
      } else if (lowerInput.includes('my name is')) {
        const name = lowerInput.split('my name is')[1].trim();
        setUserName(name);
        botMessage.text = `Nice to meet you, ${name}! How can I assist you?`;
      } else if (lowerInput.includes('age')) {
        botMessage.text = botResponses.age;
      } else if (lowerInput.includes('dob') || lowerInput.includes('date of birth')) {
        botMessage.text = botResponses.dob;
      } else if (lowerInput.includes('skills')) {
        botMessage.text = botResponses.skills;
      } else if (lowerInput.includes('education')) {
        botMessage.text = botResponses.education;
      } else if (lowerInput.includes('experience')) {
        botMessage.text = botResponses.experience;
      } else if (
        lowerInput.includes('contact') ||
        lowerInput.includes('mobile number') ||
        lowerInput.includes('phone number')
      ) {
        botMessage.text = botResponses.contact;
      } else if (lowerInput.includes('location')) {
        botMessage.text = botResponses.location;
      } else if (lowerInput.includes('bye')) {
        botMessage.text = botResponses.farewell;
      }

      setMessages([...newMessages, botMessage]);
      setTyping(false);
    }, 1000);
  };

  const checkForTypo = (input) => {
    const correctedWord = typoMap[input];
    if (correctedWord) {
      setClarification(correctedWord);
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: `Did you mean "${correctedWord}"? Type "yes" to confirm.` }
      ]);
      return true;
    }
    return false;
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div>
      <button
        className={styles.chatbotToggle}
        onClick={() => setIsOpen((prev) => !prev)}
        title="Chat with me!"
      >
        <FaRobot />
      </button>

      {isOpen && (
        <div className={styles.chatbot}>
          <div className={styles.chatWindow} ref={chatWindowRef}>
            {messages.map((message, index) => (
              <div key={index} className={`${styles.message} ${styles[message.sender]}`}>
                {message.text}
              </div>
            ))}
            {typing && <div className={styles.typing}>Typing...</div>}
          </div>
          <div className={styles.inputArea}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
            />
            <button onClick={handleSendMessage}>
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
