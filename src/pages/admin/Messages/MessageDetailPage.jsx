import React, { useState, useEffect } from 'react';
import MessageDetail from '../../components/Message/MessageDetail';

const MessageDetailPage = ({ match }) => {
  const { id } = match.params;
  const [message, setMessage] = useState(null);

  useEffect(() => {
    // Fetch message by ID from API
    fetch(`/api/messages/${id}`)
      .then((response) => response.json())
      .then((data) => setMessage(data));
  }, [id]);

  const handleReply = (replyContent) => {
    // Send reply to API
    fetch(`/api/messages/${id}/reply`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reply: replyContent }),
    });
  };

  return (
    <div className="container mx-auto py-6">
      {message ? (
        <MessageDetail message={message} onReply={handleReply} />
      ) : (
        <p>Loading message...</p>
      )}
    </div>
  );
};

export default MessageDetailPage;
