// import React, { useState, useEffect } from "react";
// import axios from "../../utils/api";

// const MessagePage = () => {
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     const fetchMessages = async () => {
//       const response = await axios.get("/messages");
//       setMessages(response.data);
//     };
//     fetchMessages();
//   }, []);

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-bold mb-4">Messages</h1>
//       <table className="min-w-full bg-white shadow-md rounded">
//         <thead className="bg-gray-200">
//           <tr>
//             <th className="px-6 py-3 text-left">Sender</th>
//             <th className="px-6 py-3 text-left">Email</th>
//             <th className="px-6 py-3 text-left">Status</th>
//             <th className="px-6 py-3 text-left">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {messages.map((message) => (
//             <tr key={message._id} className="border-t hover:bg-gray-50">
//               <td className="px-6 py-4">{message.senderName}</td>
//               <td className="px-6 py-4">{message.senderEmail}</td>
//               <td className="px-6 py-4">{message.status}</td>
//               <td className="px-6 py-4">
//                 <button className="text-blue-500 mr-2">View</button>
//                 <button className="text-red-500">Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default MessagePage;
import React, { useState, useEffect } from 'react';
import MessageList from '../../components/Message/MessageList';

const MessagePage = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch messages from API
    fetch('/api/messages')
      .then((response) => response.json())
      .then((data) => setMessages(data));
  }, []);

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Messages</h1>
      <MessageList messages={messages} />
    </div>
  );
};

export default MessagePage;
