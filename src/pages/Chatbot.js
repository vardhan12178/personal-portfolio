import React, { useState, useEffect, useRef } from 'react';
import { IoChatbubblesOutline, IoSend } from 'react-icons/io5';
import styles from '../styles/Chatbot.module.scss';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [userName, setUserName] = useState('');
  const chatWindowRef = useRef(null);

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
    experience: 'Bala Vardhan has 3 years of experience as a Full Stack Developer, including a role at TCS.',
    challenges:
      'One of the biggest challenges Bala faced was optimizing a complex React application with high data usage. He implemented memoization and used React Query for caching to improve performance.',
    collaboration:
      'Bala has collaborated with cross-functional teams, working closely with designers, backend developers, and project managers to deliver successful projects.',
    futureGoals:
      'Bala’s goal is to continue growing as a Full Stack Developer and work on innovative projects that solve real-world problems.',
    portfolio: 'You can explore Bala’s portfolio here: [Portfolio Link].',
    github: 'Check out Bala’s GitHub profile: https://github.com/vardhan12178',
    linkedin: 'Connect with Bala on LinkedIn: https://www.linkedin.com/in/bala-vardhan-pula-753b011b9',
    farewell: 'Goodbye! Have a great day! 😊',
    default: "I'm not sure how to respond to that, but feel free to ask me anything!"
  };
  

  useEffect(() => {
    if (isOpen) {
      setMessages([
        {
          sender: 'bot',
          text: 'Hello! I’m Bala Vardhan’s chatbot. How can I assist you today?',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: 'user',
      text: input,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setTyping(true);

    setTimeout(() => {
      const botMessage = {
        sender: 'bot',
        text: generateBotResponse(input),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botMessage]);
      setTyping(false);
    }, 1000);
  };

  const generateBotResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    if (['hi', 'hello', 'hey'].includes(lowerMessage)) {
      return botResponses.greetings[Math.floor(Math.random() * botResponses.greetings.length)];
    }
    if (lowerMessage.includes('name')) return userName ? `Hi ${userName}, I'm here to assist you!` : botResponses.name;
    if (lowerMessage.includes('my name is')) {
      const name = lowerMessage.split('my name is')[1]?.trim();
      setUserName(name);
      return `Nice to meet you, ${name}! How can I assist you today?`;
    }
    if (lowerMessage.includes('age')) return botResponses.age;
    if (lowerMessage.includes('dob') || lowerMessage.includes('date of birth')) return botResponses.dob;
    if (lowerMessage.includes('skills')) return botResponses.skills;
    if (lowerMessage.includes('education')) return botResponses.education;
    if (lowerMessage.includes('experience')) return botResponses.experience;
    if (lowerMessage.includes('challenges')) return botResponses.challenges;
    if (lowerMessage.includes('collaboration')) return botResponses.collaboration;
    if (lowerMessage.includes('future') || lowerMessage.includes('goal')) return botResponses.futureGoals;
    if (lowerMessage.includes('portfolio')) return botResponses.portfolio;
    if (lowerMessage.includes('github')) return botResponses.github;
    if (lowerMessage.includes('linkedin')) return botResponses.linkedin;
    if (lowerMessage.includes('bye')) return botResponses.farewell;
    return botResponses.default;
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
        <IoChatbubblesOutline />
      </button>

      {isOpen && (
        <div className={styles.chatbot}>
          <div className={styles.chatWindow} ref={chatWindowRef}>
            {messages.map((message, index) => (
              <div key={index} className={`${styles.message} ${styles[message.sender]}`}>
                <p>{message.text}</p>
                <span className={styles.time}>{message.time}</span>
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
            <button onClick={handleSendMessage} aria-label="Send message">
              <IoSend />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
