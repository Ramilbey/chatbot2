import { useState,useRef, useEffect } from 'react'
import { Chatbot } from 'supersimpledev';
import RobotProfileImage from './assets/robot.png'
import UserProfileImage from './assets/user.png'
import './App.css'


function ChatMessage({message, sender}){
  //const message = props.message;
  //const sender = props.sender;
  // const {message, sender} = props; //destructuring
  
  /*
  if(sender === 'robot'){
    return (
      <div>
        <img src = "robot.png" width = "50" />
        {message}
      </div>
    );
  }
  */
  return (
    <div className = {
      sender  === "user" 
      ? 'chat-message-user'
      : 'chat-message-robot'
    }>
      {sender === 'robot' && (
        <img src = {RobotProfileImage}
        className = "chat-message-profile " />
      )}
      <div className = "chat-message-text" >
        {message}
      </div>
      {sender === 'user' && (
        <img src= {UserProfileImage}
        className = "chat-message-profile"/>
      )}
    </div>

  ); 
}

function ChatMessages({chatMessages}){
  const chatMessagesRef = useRef(null);
  useEffect(()=>{
    const containerElem = chatMessagesRef.current;
    if(containerElem){
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  },[chatMessages]);
  return (
    <div className = "chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage)=>{
        return (
          <ChatMessage
            message ={chatMessage.message} 
            sender = {chatMessage.sender}
            key = {chatMessage.id}
          />
        );
      })}
    </div>
  );

}

function App(){
  // Array Destructuring
  const [chatMessages, setChatMessages] = useState([{
   message: 'Hello chatbot',
   sender: 'user',
   id : 'id1'
 },{
   message: 'Hello, how can I help you?',
   sender: 'robot',
   id: 'id2'
 },{
   message: 'Can you get me todays date?',
   sender: 'user',
   id: 'id3'
 },{
   message: 'Today is April 26',
   sender: 'robot',
   id: 'id4'
 }]);
// const [chatMessages, setChatMessages] = array;
// const chatMessages = array[0];
// const setChatMessages = array[1];
return(
 <div className ="app-container">
   
   <ChatMessages 
     chatMessages ={chatMessages}
   />
   <ChatInput 
     chatMessages = {chatMessages}
     setChatMessages = {setChatMessages}
    />
 </div>
);
}

export default App
