import React from 'react';

const MessageDetail = ({ message, onReply }) => {
  const handleReply = (e) => {
    e.preventDefault();
    const replyContent = e.target.reply.value;
    onReply(replyContent);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">{message.senderName}</h2>
      <p className="mb-6">{message.content}</p>
      <form onSubmit={handleReply} className="flex items-center">
        <input
          type="text"
          name="reply"
          placeholder="Type your reply..."
          className="border border-gray-300 rounded-lg flex-grow py-2 px-4"
        />
        <button
          type="submit"
          className="ml-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Reply
        </button>
      </form>
    </div>
  );
};

export default MessageDetail;
