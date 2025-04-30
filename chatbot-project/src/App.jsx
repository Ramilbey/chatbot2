import { useState } from 'react'
import { ChatInput } from './components/ChatInput'
import { ChatMessage } from './components/ChatMessage';
import ChatMessages from './components/ChatMessages';
import './App.css'




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
