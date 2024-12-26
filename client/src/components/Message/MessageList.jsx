import React from 'react';

const MessageList = ({ messages, onMessageSelect }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Messages</h2>
      <ul className="divide-y divide-gray-200">
        {messages.map((message) => (
          <li
            key={message.id}
            className="py-2 px-4 cursor-pointer hover:bg-gray-100"
            onClick={() => onMessageSelect(message.id)}
          >
            <p className="font-medium">{message.senderName}</p>
            <p className="text-sm text-gray-600">{message.content.slice(0, 50)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;
